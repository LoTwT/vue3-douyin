import { createRouter, createWebHistory } from "vue-router"

import Video from "../views/video.vue"
import User from "../views/user/index.vue"

export default createRouter({
    history: createWebHistory("/"),
    routes: [
        { path: "/:uid?", component: Video, name: "video" },
        { path: "/user/:id", component: User, name: "user" }
    ]
})