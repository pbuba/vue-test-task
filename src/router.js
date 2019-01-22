import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Todo from './views/Todo.vue';
import Filtering from './views/Filtering.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    },
    {
      path: '/filtering',
      name: 'filtering',
      component: Filtering
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
});
