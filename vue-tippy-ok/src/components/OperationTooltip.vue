<template>
  <div>
		<div class="counter">This is as been shown <span>{{ counter }}</span> times.</div>
		<div class="value">Tasks [{{ taskId }}] <span :class="{ completed }">{{ title }}</span>.</div>
	</div>
</template>

<script>
export default {
    name: 'OperationTooltip',
    props: ['counter', 'title', 'taskId', 'completed'],
    data() {
        return {
            //
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
