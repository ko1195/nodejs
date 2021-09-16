import axios from "axios";
import config from "../../config.json";
const state = () => ({
  all: [],
  saved_photos: JSON.parse(localStorage.getItem("saved_photos")) || [],
  filters: [],
  comments: []
});

const getters = {
  comments: (state) => state.comments,
  photos_like: (state) => state.all.filter((photo) => photo.like === true),
  photos_pick: (state) => state.all.filter((photo) => photo.pick === true),
  filters: (state) => state.filters,
  photo_filters: (state) =>
    state.filters.length
      ? state.all.filter(
          (photo) =>
            state.filters.filter((filt) => photo[filt] === true).length > 0
        )
      : state.all
};

const actions = {
  async getAll({ commit }) {
    try {
      const res = await axios.get(`${config.main_api}/albums/1/photos`);
      let photos = res.data;
      if (photos || photos.length) {
        photos = res.data.map((photo) => {
          return {
            ...photo,
            like: false,
            pick: false,
            save: false,
            comments: []
          };
        });
      }
      commit("getAllPhoto", photos);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }
};

const mutations = {
  getAllPhoto(state, photos) {
    if (!photos || !photos.length) return;
    state.all = photos;
  },
  togglePhotoLike(state, photo_id) {
    state.all.forEach((photo) =>
      photo.id === photo_id ? (photo.like = !photo.like) : photo
    );
  },
  togglePhotoPick(state, photo_id) {
    state.all.forEach((photo) =>
      photo.id === photo_id ? (photo.pick = !photo.pick) : photo
    );
  },
  togglePhotoSave(state, photo_id) {
    state.all.forEach((photo) =>
      photo.id === photo_id ? (photo.save = !photo.save) : photo
    );
    const saved_photos = state.all.filter((photo) => photo.save === true);
    localStorage.setItem("saved_photos", JSON.stringify(saved_photos));
  },
  setFiltersParams(state, filter_params) {
    // Если приходит пустой, то все значение сбрасываются
    state.filters = filter_params;
  },
  addComment(state, newComment) {
    const { photo_id, author, text, date } = newComment;

    state.all.forEach((photo) =>
      photo.id === photo_id
        ? (photo.comments = [...photo.comments, { author, text, date }])
        : photo
    );
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
