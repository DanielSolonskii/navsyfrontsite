import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Home from '../views/Home'
import Login from "@/views/Login";

import TasksPage from "@/views/staff/TasksPage";
import StaffForms from "@/views/staff/StaffForms";
import ScheduledTasks from "@/views/staff/ScheduledTasks";
import Employee from "@/views/staff/Employee";
import Places from "@/views/staff/Places";
import Departments from "@/views/staff/Departments";

import VehiclesPage from "@/views/vehicles/VehiclesPage";
import Drivers from "@/views/vehicles/Drivers";
import DriversLog from "@/views/vehicles/DriversLog";
import ServiceTasks from "@/views/vehicles/ServiceTasks";
import Ecodriving from "@/views/vehicles/Ecodriving";

import CreateNewScheduledTask from "@/views/create/CreateNewScheduledTask";
import CreateNewTask from "@/views/create/CreateNewTask";
import Analytics from "@/views/Analytics";
import BIAnalytics from "@/views/BIAnalytics";
import TimeTable from "@/views/TimeTable";
import DispatcherPlug from "@/views/DispatcherPlug";

import EventControl from "@/views/EventControl";
import MonitoringPage from "@/views/MonitoringPage";
import ConfigurationDevices from "@/views/ConfigurationDevices";
import ReportPage from "@/views/ReportPage";
import GeozonePage from "@/views/GeozonePage";
import GaragePage from "@/views/GaragePage";
import StartPage from "@/views/StartPage";


import Access from "@/views/profileMenuPages/Access";
import Account from "@/views/profileMenuPages/Account";
import Balance from "@/views/profileMenuPages/Balance";
import Journal from "@/views/profileMenuPages/Journal";
import Tags from "@/views/profileMenuPages/Tags";

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ru-RU'
import VCalendar from 'v-calendar';
import draggable from "vuedraggable";
import VModal from 'vue-js-modal';
import underscore from 'vue-underscore';
import Chat from 'vue-beautiful-chat'

Vue.use(VCalendar, {
    componentPrefix: 'vc',
});
Vue.use(ElementUI, {
    locale
})
Vue.use(draggable)

Vue.use(Chat)
Vue.use(Router);
Vue.use(VModal);
Vue.use(underscore);

let router = new Router({
    routes: [
        {
            path: '/bi-analytics',
            name: 'BIAnalytics',
            component: BIAnalytics,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/event-control',
            name: 'EventControl',
            component: EventControl,
            meta: {
                requiresAuth: true,
                heading: '???????????????? ??????????????'
            }

        },
        {
            path: '/ecodriving',
            name: 'Ecodriving',
            component: Ecodriving,
            meta: {
                requiresAuth: true,
                heading: '??????????????????'
            }

        },
        {
            path: '/dispatcher',
            name: 'DispatcherPlug',
            component: DispatcherPlug,
            meta: {
                requiresAuth: true,
                heading: '??????????????????'
            }

        },
        {
            path: '/account',
            name: 'Account',
            component: Account,
            meta: {
                requiresAuth: true,
                heading: '??????????????'
            }

        },
        {
            path: '/access',
            name: 'Access',
            component: Access,
            meta: {
                requiresAuth: true,
                heading: '????????????'
            }

        }, {
            path: '/balance',
            name: 'Balance',
            component: Balance,
            meta: {
                requiresAuth: true,
                heading: '????????????'
            }

        }, {
            path: '/journal',
            name: 'Journal',
            component: Journal,
            meta: {
                requiresAuth: true,
                heading: '???????????? ??????????????'
            }

        }, {
            path: '/tags',
            name: 'Tags',
            component: Tags,
            meta: {
                requiresAuth: true,
                heading: '????????'
            }

        },
        {
            path: '/service-tasks',
            name: 'ServiceTasks',
            component: ServiceTasks,
            meta: {
                requiresAuth: true,
                heading: '???????????????????? ????????????'
            }

        },
        {
            path: '/timetable',
            name: 'TimeTable',
            component: TimeTable,
            meta: {
                requiresAuth: true,
                heading: '????????????????????'
            }

        },
        {
            path: '/analytics',
            name: 'Analytics',
            component: Analytics,
            meta: {
                requiresAuth: true,
                heading: '??????????????????'
            }

        },

        {
            path: '/departments',
            name: 'Departments',
            component: Departments,
            meta: {
                requiresAuth: true,
                heading: '????????????'
            }

        },
        {
            path: '/drivers-log',
            name: 'DriversLog',
            component: DriversLog,
            meta: {
                requiresAuth: true,
                heading: '?????????????? ????????????????'
            }

        },
        {
            path: '/drivers',
            name: 'Drivers',
            component: Drivers,
            meta: {
                requiresAuth: true,
                heading: '????????????????'
            }

        },
        {
            path: '/employees',
            name: 'Employee',
            component: Employee,
            meta: {
                requiresAuth: true,
                heading: '????????????????????'
            }
        },
        {
            path: '/start-page',
            name: 'StartPage',
            component: StartPage,
            meta: {
                requiresAuth: true,
                heading: '?????????????????? ????????????????'
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/staff-forms',
            name: 'StaffForms',
            component: StaffForms,
            meta: {
                requiresAuth: true,
                heading: '??????????'
            }
        },
        {
            path: '/staff-places',
            name: 'Places',
            component: Places,
            meta: {
                requiresAuth: true,
                heading: '??????????'
            }
        },
        {
            path: '/monitoring',
            name: 'Monitoring',
            component: MonitoringPage,
            meta: {
                requiresAuth: true,
                heading: '????????????????????'
            }
        },
        {
            path: '/report',
            name: 'report',
            component: ReportPage,
            meta: {
                requiresAuth: true,
                heading: '????????????'
            }
        },
        {
            path: '/vehicles',
            name: 'Vehicles',
            component: VehiclesPage,
            meta: {
                requiresAuth: true,
                heading: '???????????????????????? ????????????????'
            }
        },
        {
            path: '/schedules',
            name: 'Schedules',
            component: ScheduledTasks,
            meta: {
                requiresAuth: true,
                heading: '???????????????????? ??????????????'
            }
        },
        {
            path: '/tasks',
            name: 'tasks',
            component: TasksPage,
            meta: {
                requiresAuth: true,
                heading: '???????????????????? ????????????????????????'
            }
        },
        {
            path: '/geozone',
            name: 'Geozone',
            component: GeozonePage,
            meta: {
                requiresAuth: true,
                heading: '???????????????? ????????????'
            }
        },
        {
            path: '/garage-page',
            name: 'Garage Page',
            component: GaragePage,
            meta: {
                requiresAuth: true,
                heading: 'none'
            }
        },
        {
            path: '/configuration',
            name: 'ConfigurationDevices',
            component: ConfigurationDevices,
            meta: {
                requiresAuth: true,
                heading: 'none'
            }
        },
        {
            path: '/create-new-scheduled-task',
            name: 'CreateNewScheduledTask',
            component: CreateNewScheduledTask,
            meta: {
                requiresAuth: true,
                heading: 'new task'
            }
        },
        {
            path: '/create-new-task',
            name: 'CreateNewTask',
            component: CreateNewTask,
            meta: {
                requiresAuth: true,
                heading: 'new task'
            }
        },
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters['auth/isLoggedIn']) {
            next('/');
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;