import Vue from 'vue'
import Vuex from 'vuex'
import { recruiterGetters ,adminGetters,applicantGetters,jobGetters,applicationsGetters } from './getters'
import { recruiterMutations, adminMutations, jobsMutations,applicantMutations,applicationMutations } from './mutations'
import {  RecruiterActions,ApplicantActions,JobActions, ApplicationsActions, AdminActions } from "./action"

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
      
      jobs: [],
      
      showLoader: false,
      
      applicants: [],
      admins:[],
      recruiters:[],
      applications:[]

    },
    // GETTERS
    getters: Object.assign({}, recruiterGetters ,adminGetters,applicantGetters,jobGetters,applicationsGetters),

    mutations: Object.assign({},recruiterMutations, adminMutations, jobsMutations,applicantMutations,applicationMutations ),

    actions: Object.assign({},RecruiterActions,ApplicantActions,JobActions, ApplicationsActions, AdminActions ),
  })
