<template>
    <div id="app">
      <div class="controls">
          <button class="add" @click="addSynchronously">Add a task <strong>synchronously</strong></button>
          <button class="add2" @click="addAsynchronously">Add a task <strong>asynchronously</strong></button>
          <button class="remove" @click="remove">Remove the last task</button>
      </div>
      <div class="elementContainer" v-if="tasksList.length > 0">
          <div class='tooltipMe'
              v-for="task in tasksList"
              :class="{ completed: task.completed }"
              v-tippy="{
                        html : `#opTooltip-${task.id}`,
                         delay : [150, 150],
                        theme : 'light',
                        interactive : true,
                        reactive : true,
                        sticky : true,
                        arrow : true,
              }"
              @mouseenter="updateCounter"
          >Task id <strong>{{ task.id }}</strong></div>
      </div>
      <div class="errors">{{ errors }}</div>
      <operation-tooltip v-for="task in tasksList"
                      :id="`opTooltip-${task.id}`" 
                      :counter="counter"
                      :title="task.title"
                        :task-id="task.id"
                      :completed="task.completed"
      ></operation-tooltip>
  </div>
</template>

<script>
import OperationTooltip from './components/OperationTooltip';

export default {
    name: 'App',

    components: {
        OperationTooltip,
    },

    data() {
        return {
            counter: 0,
            tasksList: [],
            idCount: 9,
            errors: '',
        };
    },

    created() {
        console.clear();
        this.getInitialTasks();
    },

    methods: {
        updateValue(val) {
            this.hoveredValue = val;
        },

        updateCounter() {
            this.counter++;
        },

        addSynchronously() {
            this.idCount++;
            this.tasksList.push({
                id: this.idCount,
                title: Math.random()
                    .toString(36)
                    .substring(2, 5),
                completed: Math.random() > 0.5,
            });
        },

        async addAsynchronously() {
            this.idCount++;
            const newTask = await this.getOneMoreTask();
            this.tasksList.push(newTask);
        },

        remove() {
            this.tasksList.pop();
        },

        getInitialTasks() {
            var vm = this;
            axios
                .get(
                    `https://jsonplaceholder.typicode.com/todos?_start=1&_limit=${this
                        .idCount++}`,
                )
                .then(function(response) {
                    vm.tasksList = response.data;
                })
                .catch(function(error) {
                    vm.errors = 'Error! Could not reach the API. ' + error;
                });
        },

        async getOneMoreTask() {
            // Note: for async/await to work in codepen, we need to add the following dependency: https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.23.0/polyfill.min.js
            console.log(`Getting the task id ${this.idCount}...`); //DEBUG
            const task = await axios.get(
                `https://jsonplaceholder.typicode.com/todos/${this.idCount}`,
            );
            // console.log('task.data:', task.data); //DEBUG

            return task.data;
        },
    },
};
</script>

<style lang="scss">
$colorCompleted: greenyellow;
$colorCompletedHovered: #739341;
$colorUncompleted: #d75420;
$colorUncompletedHovered: #a55232;

.controls {
    display: flex;
    justify-content: space-around;
}

.elementContainer {
    width: 40vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border: 1px dashed #222;
    border-radius: 6px;
    margin-top: 2rem;
}

.tooltipMe {
    border-radius: 3px;
    border: 1px solid #222;
    padding: 2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 0.5rem;
    max-width: 200px;
    text-align: center;
    // background-color: #444;
    // color: white;
    background-color: $colorUncompleted;
    color: white;

    &:hover {
        background-color: $colorUncompletedHovered;
    }

    &.completed {
        background-color: $colorCompleted;
        color: #333;

        &:hover {
            background-color: $colorCompletedHovered;
            color: white;
        }
    }
}

.value span {
    font-size: 1.2rem;
    color: $colorUncompleted;

    &.completed {
        color: $colorCompleted;
    }
}
.counter span {
    font-size: 1.2rem;
    color: forestgreen;
}

#tooltip {
    color: #333;
    transition: all 0.3s ease;
    background-color: white;
    border-radius: 6px;
    padding: 1rem;

    h3 {
        color: #3b4a4f;
        margin-bottom: 1.2rem;
    }

    p {
        margin-bottom: 1rem;
    }

    button {
        background-color: lightblue;
        color: #333;
        border: 1px solid aliceblue;
        padding: 1rem;
        border-radius: 3px;
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
            background-color: #9dc5d1;
        }
    }
}

//-------------------- Unimportant css rules --------------------
$transitionDuration: 0.3s;

* {
    margin: 0;
    padding: 0;
    position: relative;
    box-sizing: border-box;
}

button {
    cursor: pointer;
    border: 1px solid #222;
    border-radius: 3px;
    padding: 0.5rem;
    font-size: 0.8rem;
    transition: all 0.3s ease, box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    background-color: #444;
    color: white;

    &:hover {
        background-color: #555;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
    }
}

.remove {
    background-color: brown;
    color: white;

    &:hover {
        background-color: #cf2020;
    }
}

.add {
    background-color: forestgreen;
    color: white;

    &:hover {
        background-color: #2aaa2a;
    }
}

.add2 {
    background-color: deepskyblue;
    color: white;

    &:hover {
        background-color: #3ecfff;
    }
}

button:-moz-focusring,
input:-moz-focusring {
    outline: 0;
}

.container {
    margin-top: 2rem;
    //height          : 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.filler {
    background-color: #12232f;
    border: 1px solid #3f4245;
    opacity: 0.8;
    height: 20vh;
    width: 100vw;
}

body {
    background: #333; //#022238
    color: white;
    font-family: 'Open sans', sans-serif;
    font-weight: 100;
    font-size: 1rem;
}

a.button {
    // color           : white;
    color: yellow;
    text-decoration: none;
    transition: color $transitionDuration ease;

    &:focus {
        outline: none;
    }

    &:hover {
        // color : deeppink;
        color: lime;
    }
}

.button2 {
    background-color: deeppink;
    color: white;
    border: 1px solid red;
    border-radius: 2px;
    height: 30px;
    cursor: pointer;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }
}

h1 {
    margin: 0;
}
</style>
