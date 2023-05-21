import { createWebHistory, createRouter } from "vue-router";
import MainTask from "@/components/MainTask"
import CreateTask from "@/components/CreateTask"
import UserCalendar from "@/components/UserCalendar"
import UserSettings from "@/components/UserSettings"


const routes = [
    { path : "/", name : "MainTask", component : MainTask},
    { path : "/createtask", name : "CreateTask", component : CreateTask },
    { path : "/usercalendar", name : "UserCalendar", component : UserCalendar },
    { path : "/usersettings", name : "UserSettings", component : UserSettings },
]

const router = createRouter({
    history : createWebHistory(),
    routes : routes
});

export default router;