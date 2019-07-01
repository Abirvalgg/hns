import Vue from 'vue'
import Router from 'vue-router'
import Blank from './views/Blank.vue'
import Projects from './views/Projects.vue'
import Reports from './views/Reports.vue'
import Team from './views/Team.vue'
import Gtd from './views/Gtd.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name:  'blank',
      component: Blank
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/reports',
      name: 'reports',
      component: Reports
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/gtd',
      name: 'gtd',
      component: Gtd
    },
  ]
})


// { icon: 'dashboard', text: 'Расписание', route: '/' },
// { icon: 'book', text: 'Мои группы', route: '/projects' },
// { icon: 'person', text: 'Что-то', route: '/team' },
// { icon: 'assignment_turned_in', text: 'Отчеты', route: '/reports' },