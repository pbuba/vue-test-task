<template>
  <div class="todo-list-wrap">
    <ul class="todo-list list-group">
      <li v-for="(item, index) in todos" :key="index" class="todo list-group-item">
        <i class="fas fa-times" @click="remove(index)"></i>
        {{ item }}
      </li>
    </ul>

    <label for="todo-input">Что бы еще сделать такого?</label>
    <input id="todo-input" v-model="nextDo" type="text" class="form-control" @keyup.enter="add">
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      todos: ['Just', 'do', 'it'],
      nextDo: ''
    };
  },
  methods: {
    add: function() {
      if (!this.todos.includes(this.nextDo) && this.nextDo) {
        this.todos.push(this.nextDo);
      }
      this.nextDo = '';
    },
    remove: function(i) {
      this.todos.splice(i, 1);
    }
  }
};
</script>

<style scoped>
.todo-list {
  list-style: none;
}

.todo i {
  opacity: 0.5;
}

.todo i:hover {
  opacity: 1;
}
</style>
