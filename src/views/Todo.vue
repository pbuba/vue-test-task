<template>
  <div class="todo">
    <h1 class="title">Список дел</h1>
    <TodoList/>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';

export default {
  name: 'Todo',
  components: {
    TodoList
  }
};
</script>
