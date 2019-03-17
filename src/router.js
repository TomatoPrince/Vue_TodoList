import Vue from "vue";
import Router from "vue-router";
import MyTask from "./views/MyTask.vue";
import InProgress from "./views/InProgress.vue";
import Completed from "./views/Completed.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "mytask",
      component: MyTask
    },
    {
      path: "/in-progress",
      name: "inprogress",
      component: InProgress
    },
    {
      path: "/completed",
      name: "completed",
      component: Completed
    }
  ]
});
