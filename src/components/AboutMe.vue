<template>
  <div v-if="isDisable">
    <button type="button" class="btn btn-secondary">CHANGE</button>
    <input type="text">
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: '',
      isDisable: true
    };
  }
};
</script>
