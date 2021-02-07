export const jobGetters = {
    
    alljobs: (state, getters) => {
      return state.jobs
    },
    
    jobById: (state, getters) => id => {
      if (getters.alljobs.length > 0) {
        return getters.alljobs.filter(j => j._id === id)[0]
      } else {
        return state.job
      }
    },
  }
  export const applicantGetters = {

    allapplicants: (state, getters) => {
      return state.applicants
    },
    
    applicantsById: (state, getters) => id => {
      if (getters.allapplicants.length > 0) {
        return getters.allapplicants.filter(a => a._id === id)[0]
      } else {
        return state.applicants
      }
    },
  }
  export const recruiterGetters = {
    
    allrecruiters: (state, getters) => {
      return state.recruiters
    },
    
    recruiterById: (state, getters) => id => {
      if (getters.allrecruiters.length > 0) {
        return getters.allrecruiters.filter(r => r._id === id)[0]
      } else {
        return state.recruiter
      }
    },
  }
  export const adminGetters = {
    
    alldmins: (state, getters) => {
      return state.admins
    },

    adminById: (state, getters) => id => {
      if (getters.alladmins.length > 0) {
        return getters.alladmins.filter(d => d._id === id)[0]
      } else {
        return state.admins
      }
    },
  }
  export const applicationsGetters = {
    
    allapplications: (state, getters) => {
      return state.applications
    },
    
    applicationsById: (state, getters) => id => {
      if (getters.allapplications.length > 0) {
        return getters.allapplications.filter(p => p._id === id)[0]
      } else {
        return state.applications
      }
    },
  }
  
  
  