import { h, resolveComponent } from "vue"
import {createRouter, createWebHistory} from "vue-router"

const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes : [
        {
            path : "",
            name : "Home",
            component : {
              render() {
                return h(resolveComponent("router-view"))
              }
            },
            redirect : {path : "/todos"},
            children: [
                {
                    path : "todos",
                    name : "todos",
                    component : {
                        render(){
                            return h(resolveComponent("router-view"))
                        }
                    },
                    children : [
                        {
                            path : "",
                            component : () => import("../views/todos/Index.vue"),
                            name : "Todos List"
                        },
                        {
                            path : "add",
                            component : () => import("../views/todos/AddOrUpdate.vue"),
                            name: "Todos add"
                        },
                        {
                            path : ":id/update",
                            component : () => import("../views/todos/AddOrUpdate.vue"),
                            name : "todos update"
                        }
                    ]
                },
                {
                    path : "validation",
                    name : "validation",
                    component : () => import("../views/veevalidate/Index.vue")
                }
            ]
        }
    ]
})

export default router