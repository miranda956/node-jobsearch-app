import {

    ALL_ADMINS,
    ALL_ADMINS_SUCCESS,
    ADD_ADMIN,
    ADD_ADMIN_SUCCESS,
    ADMIN_BY_ID,
    ADMIN_BY_ID_SUCCESS,
    UPDATE_ADMIN,
    UPDATE_ADMIN_SUCCESS,
    ALL_APPLICANTS,
    ALL_APPLICANTS_SUCCESS,
    ADD_APPLICANT,
    ADD_APPLICANT_SUCCESS,
    APPLICANT_BY_ID,
    APPLICANT_BY_ID_SUCCESS,
    APPLICATION_BY_ID,
    UPDATE_APPLICANT,
    UPDATE_APPLICANT_SUCCESS,
    ALL_JOBS,
    ALL_JOBS_SUCCESS,
    ADD_JOB,
    ADD_JOB_SUCCESS,
    JOB_BY_ID,
    JOB_BY_ID_SUCCESS,
    UPDATE_JOB,
    UPDATE_JOB_SUCCESS,
    REMOVE_JOB,
    REMOVE_JOB_SUCCESS,
    ALL_APPLICATIONS,
    ALL_APPLICATIONS_SUCCESS,
    APPLICATION_BY_ID_SUCCESS,
    ALL_RECRUITERS,
    ALL_RECRUITERS_SUCCESS,
    RECRUITER_BY_ID,
    RECRUITER_BY_ID_SUCCESS,
    ADD_RECRUITER,
    ADD_RECRUITER_SUCCESS,
    UPDATE_RECRUITER,
    UPDATE_RECRUITER_SUCCESS,
    REMOVE_RECRUITER,
    REMOVE_RECRUITER_SUCCESS
      
} from "./mutation-types";

export const jobsMutations = {
    [ALL_JOBS] (state) {
      
      state.showLoader = true
    },
    [ALL_JOBS_SUCCESS] (state, payload) {
      
      state.showLoader = false
      
      state.jobs = payload
    },
    [JOB_BY_ID] (state) {
      
      state.showLoader = true
    },
    [JOB_BY_ID_SUCCESS] (state, payload) {
    
      state.showLoader = false
      
      state.job = payload
    },
    [ADD_JOB]: (state) => {
    
      state.showLoader = true
    },
    [ADD_JOB_SUCCESS]: (state, payload) => {
      state.showLoader = false
      state.jobs.push(payload)
    },
    [UPDATE_JOB]: (state) => {
      state.showLoader = true
    },
    [UPDATE_JOB_SUCCESS]: (state, payload) => {
      // not yet done 
      state.showLoader = false
      state.jobs = state.jobs.map(j => {
        if (j._id === payload._id) {
          payload = {...payload, recruiter: state.recruiters.filter(r => r._id === payload.recruiter)[0]}
          return payload
        }
        return j
      })
    },
    [REMOVE_JOB]: (state) => {
      state.showLoader = true
    },
    [REMOVE_JOB_SUCCESS]: (state, payload) => {
      state.showLoader = false
      const index = state.jobs.findIndex(j => j._id === payload)
      console.debug('index', index)
      state.jobs.splice(index, 1)
    }
  }
  export const applicantMutations = {
    [ALL_APPLICANTS] (state) {
      
      state.showLoader = true
    },
    [ALL_APPLICANTS_SUCCESS] (state, payload) {
    
      state.showLoader = false
      
      state.applicants = payload
    },
    [APPLICANT_BY_ID] (state) {
      
      state.showLoader = true
    },
    [APPLICANT_BY_ID_SUCCESS] (state, payload) {
      
      state.showLoader = false
      
      state.applicant = payload
    },
    [ADD_APPLICANT]: (state) => {
      
      state.showLoader = true
    },
    [ADD_APPLICANT_SUCCESS]: (state, payload) => {
      state.showLoader = false
      state.applicants.push(payload)
    },
    [UPDATE_APPLICANT]: (state) => {
      state.showLoader = true
    },
    [UPDATE_APPLICANT_SUCCESS]: (state, payload) => {
      // not yet done 
      state.showLoader = false
      state.applicants = state.applicants.map(a => {
        if (a._id === payload._id) {
          payload = {...payload, applicant: state.applicants.filter(t=> t._id === payload.manufacturer)[0]}
          return payload
        }
        return a
      })
    }
  }
  export const adminMutations = {
    [ALL_ADMINS] (state) {
      
      state.showLoader = true
    },
    [ALL_ADMINS_SUCCESS] (state, payload) {
      
      state.showLoader = false
      
      state.admins = payload
    },
    [ADMIN_BY_ID] (state) {
      
      state.showLoader = true
    },
    [ADMIN_BY_ID_SUCCESS] (state, payload) {
      
      state.showLoader = false
      
      state.admin = payload
    },
    [ADD_ADMIN]: (state) => {
      
      state.showLoader = true
    },
    [ADD_ADMIN_SUCCESS]: (state, payload) => {
      state.showLoader = false
      state.admins.push(payload)
    },
    [UPDATE_ADMIN]: (state) => {
      state.showLoader = true
    },
    [UPDATE_ADMIN_SUCCESS]: (state, payload) => {
      // not done
      state.showLoader = false
      state.admins = state.products.map(p => {
        if (p._id === payload._id) {
          payload = {...payload, manufacturer: state.manufacturers.filter(x => x._id === payload.manufacturer)[0]}
          return payload
        }
        return p
      })
    },
  
  }
  export const recruiterMutations = {
    [ALL_RECRUITERS] (state) {
      
      state.showLoader = true
    },
    [ALL_RECRUITERS_SUCCESS] (state, payload) {
    
      state.showLoader = false
      
      state.recruiters= payload
    },
    [RECRUITER_BY_ID] (state) {
      
      state.showLoader = true
    },
    [RECRUITER_BY_ID_SUCCESS] (state, payload) {
      
      state.showLoader = false
      
      state.recruiter = payload
    },
    [ADD_RECRUITER]: (state) => {
      
      state.showLoader = true
    },
    [ADD_RECRUITER_SUCCESS]: (state, payload) => {
      state.showLoader = false
      state.recruiters.push(payload)
    },
    [UPDATE_RECRUITER]: (state) => {
      state.showLoader = true
    },
    [UPDATE_RECRUITER_SUCCESS]: (state, payload) => {
      // TO BE DONE 
      state.showLoader = false
      state.products = state.products.map(p => {
        if (p._id === payload._id) {
          payload = {...payload, manufacturer: state.manufacturers.filter(x => x._id === payload.manufacturer)[0]}
          return payload
        }
        return p
      })
    },

    [REMOVE_RECRUITER]: (state) => {
      state.showLoader = true
    },
    [REMOVE_RECRUITER_SUCCESS]: (state, payload) => {
      state.showLoader = false
      const index = state.recruiters.findIndex(r => r._id === payload)
      console.debug('index', index)
      state.recruiters.splice(index, 1)
    }
  }
  export const applicationMutations = {
    // not yet done 
    [ALL_APPLICATIONS] (state) {
      state.showLoader = true
    },
    [ALL_APPLICATIONS_SUCCESS] (state, payload) {
      
      state.showLoader = false
      
      state.applications = payload
    },
    [APPLICATION_BY_ID] (state) {
      state.showLoader = true
    },

    [APPLICATION_BY_ID_SUCCESS] (state, payload) {
      
      state.showLoader = false
      
      state.applications = payload
    }
  }
  // applicant -applied jobs to be figured out 
  