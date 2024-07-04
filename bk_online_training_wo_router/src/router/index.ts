import ListOfCourses from "@/components/ListOfCourses.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/list",
    component: ListOfCourses
  }
  //   {
  //     path: "/productdetails/:id",
  //     name: "productdetails",
  //     component: ProductDetails
  //   },
  //   {
  //     path: "/posts",
  //     component: Posts
  //   },
  //   {
  //     path: "/postdetails/:id",
  //     name: "postdetails",
  //     component: PostDetails
  //   }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;
