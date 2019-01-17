<template>
  <div class="filtering">
    <h1 class="title">Список</h1>
    <FilterComponent/>
  </div>
</template>

<script>
import FilterComponent from '@/components/FilterComponent.vue';

export default {
  name: 'Filtering',
  components: {
    FilterComponent
  }
};
</script>
