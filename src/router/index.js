import Vue from 'vue'
import VueRouter from 'vue-router'
import MainAppLayout from "../layouts/MainAppLayout";
import SimpleLayout from "../layouts/SimpleLayout";
import AppListView from "../views/AppListView";
import AppPageView from "../views/AppPageView";
import SimplePageView from "../views/SimplePageView";

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: MainAppLayout,
    children: [
      {
        path: '/',
        name: "main-app-list",
        component: AppListView,
      },
      {
        path: '/text',
        name: 'main-app-page',
        component: AppPageView
      }
    ]
  },
  {
    path: '',
    component: SimpleLayout,
    children: [
      {
        path: '/simple',
        name: 'simple-page',
        component: SimplePageView
      }
    ]
  } 

]

const router = new VueRouter({
  mode: 'history',  
  routes,

  scrollBehavior(to, from, savedPosition) {
    console.log('Scroll');
    
    if (savedPosition) {
      console.log('SavedPosition: true');
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
  
})

export default router
