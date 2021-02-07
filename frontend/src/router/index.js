import vue from "vue";
import Router from "vue-router";
import createjob from "../components/job/createjob.vue";
import listjob from "../components/job/listjobs.vue";
import editjob from "../components/job/editjob.vue";
import detailsjob from "../components/job/detailsjob.vue";
import createapplicant from "../components/applicant/createapplicant.vue";
//import listapplicant from "../components/Admin/listapplicants.vue";
import editapplicant from "../components/applicant/editapplicant.vue";
import detailapplicant from "../components/applicant/detailapplicant.vue";
import createrecruiter from "../components/Recruiter/createRecruiter.vue";
import editrecruiter from "../components/Recruiter/editRecruiter.vue";
//import listrecruiter from "../components/Admin/listrecruiters.vue";
import detailsrecruiter from "../components/Recruiter/detailsRecruiter.vue";
//import createadmin from "../components/Admin/createadmin.vue";
//import editadmin from "../components/Admin/editadmin.vue";
//import detailsadmin from "../components/Admin/detailsadmin.vue";
//import listapplication from "../components/Admin/listApplication.vue";
//import detailsapplication from "../components/Admin/detailapplication.vue";
import pagenotfound from "../pages/pagenotfound.vue";
import navbar from "../pages/navbar.vue";

import footer from "../pages/footer.vue";
//import sidenav from "../pages/sidebar.vue";
import login from "../pages/login.vue";                              

vue.use(Router)

export default  new Router({

routes:[
  {
    path:'/navbar',
    name:'navbar',
    // @ts-ignore
    component:navbar
  },
      {
         path:'/login',
         name:'login',
         // @ts-ignore
         component:login
        

      },
      {
        path:'/footer',
        name:'footer',
        // @ts-ignore
        component:footer

      },
    {
        path: '/createjob',
        name: 'createjob',
        // @ts-ignore
        component: createjob
      },
      {
        path: '/',
        name: 'listjob',
        // @ts-ignore
        component: listjob
      },
      {
        path: '/editjob',
        name: 'editjob/:id',
        // @ts-ignore
        component: editjob
      },
      {
        path: '/detailsjob/:id',
        name: 'detailsjob',
        // @ts-ignore
        component: detailsjob
      },
      {
        path: '/createapplicant',
        name: 'createapplicant',
        // @ts-ignore
        component: createapplicant
      },
      
      
      {
        path: '/editapplicant',
        name: 'editapplicant',
        // @ts-ignore
        component: editapplicant
      },
      {
        path: '/detailapplicant',
        name: 'detailapplicant',
        // @ts-ignore
        component: detailapplicant
      },
      {
        path: '/createrecruiter',
        name: 'createrecruiter',
        // @ts-ignore
        component: createrecruiter
      },
      {
        path: '/editrecruiter/:id',
        name: 'editrecruiter',
        // @ts-ignore
        component: editrecruiter
      },
      {
        path: '/detailsrecruiter',
        name: 'detailsrecruiter',
        // @ts-ignore
        component: detailsrecruiter
      },
      {
        path: '*',
        name: 'pagenotfound',
        // @ts-ignore
        component:pagenotfound
      },

      

      
      
      
      
      
      
      
      
      

]


})
