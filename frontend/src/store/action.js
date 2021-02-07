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
    ALL_APPLICANT_APPLIED_JOBS,
    ALL_APPLICANT_APPLIED_JOBS_SUCCESS,
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
import axios from 'axios';
const API_BASE = 'http://localhost:5000';

export const JobActions={

    alljobs ({commit}) {
        commit(ALL_JOBS)      
        axios.get(`${API_BASE}/jobs`).then(response => {
        commit(ALL_JOBS_SUCCESS, response.data)
        })
    },
    jobById ({commit}, payload) {
        commit(JOB_BY_ID)
    
        axios.get(`${API_BASE}/job/:id/${payload}`).then(response => {
            commit(JOB_BY_ID_SUCCESS, response.data)
        })
    },
    addjob ({commit}, payload) {
        commit(ADD_JOB)
        axios.post(`${API_BASE}/Jobs/post`, payload).then(response => {
            commit(ADD_JOB_SUCCESS, response.data)
        })
    },
    updatejob ({commit}, payload) {
        commit(UPDATE_JOB)
        
        axios.patch(`${API_BASE}/job/update/${payload._id}`, payload).then(response => {
            commit(UPDATE_JOB_SUCCESS, response.data)
        })
    },
    removejob ({commit}, payload) {
        commit(REMOVE_JOB)
        axios.delete(`${API_BASE}/job/delete/:Id/${payload}`, payload).then(response => {
            console.debug('response', response.data)
            commit(REMOVE_JOB_SUCCESS, response.data)
        })
    }

}

export const ApplicationsActions={


    allApplications({commit}) {
        commit(ALL_APPLICATIONS)      
        axios.get(`${API_BASE}/api/get/applications`).then(response => {
        commit(ALL_APPLICATIONS_SUCCESS, response.data)
        })
    },
    applicationById ({commit}, payload) {
        commit(APPLICATION_BY_ID)
    
        axios.get(`${API_BASE}/api/Recruiter/applicants/1/${payload}`).then(response => {
            commit(APPLICATION_BY_ID_SUCCESS, response.data)
        })
    }

}

export const RecruiterActions={
    allrecruiters({commit}) {
        commit(ALL_RECRUITERS)      
        axios.get(`${API_BASE}/api/get/Recruiters`).then(response => {
        commit(ALL_RECRUITERS_SUCCESS, response.data)
        })
    },
    recruiterById ({commit}, payload) {
        commit(RECRUITER_BY_ID)
    
        axios.get(`${API_BASE}/api/Recruiter/profile/:id/${payload}`).then(response => {
            commit(RECRUITER_BY_ID_SUCCESS, response.data)
        })
    },
    addRecruiter ({commit}, payload) {
        commit(ADD_RECRUITER)
        axios.post(`${API_BASE}/api/post/Recruiter`, payload).then(response => {
            commit(ADD_RECRUITER_SUCCESS, response.data)
        })
    },
    updateRecruiter({commit}, payload) {
        commit(UPDATE_RECRUITER)   
        axios.patch(`${API_BASE}/api/Recruiter/profile/update/:id${payload._id}`, payload).then(response => {
            commit(UPDATE_RECRUITER_SUCCESS, response.data)
        })
    },removerecruiter ({commit}, payload) {
        commit(REMOVE_RECRUITER)
        axios.delete(`${API_BASE}/api/delete/recruiter/:id${payload}`, payload).then(response => {
            console.debug('response', response.data)
            commit(REMOVE_RECRUITER_SUCCESS, response.data)
        })
    }

}

export const ApplicantActions ={

    allapplicants({commit}) {
        commit(ALL_APPLICANTS)      
        axios.get(`${API_BASE}/api/get/Applicants`).then(response => {
        commit(ALL_APPLICANTS_SUCCESS, response.data)
        })
    },
    applicantById ({commit}, payload) {
        commit(APPLICANT_BY_ID)
           axios.get(`${API_BASE}/api/Applicant/profile/:id/${payload}`).then(response => {
            commit(APPLICANT_BY_ID_SUCCESS, response.data)
        })
    },
    addapplicant({commit}, payload) {
        commit(ADD_APPLICANT)
        axios.post(`${API_BASE}/api/create/Applicant`, payload).then(response => {
            commit(ADD_APPLICANT_SUCCESS, response.data)
        })
    },
    updateapplicant({commit}, payload) {
        commit(UPDATE_APPLICANT)   
        axios.patch(`${API_BASE}/api/patch/applicant/profile/:id${payload._id}`, payload).then(response => {
            commit(UPDATE_APPLICANT_SUCCESS, response.data)
        })
    },
    getappliedjobs({commit}){
        commit(ALL_APPLICANT_APPLIED_JOBS)
        axios.get(`${API_BASE}/api/applicant/id/appliedjobs`).then(response=>{
            commit(ALL_APPLICANT_APPLIED_JOBS_SUCCESS, response.data)
        })
    }


}

export const AdminActions ={

    alladmins({commit}) {
        commit(ALL_ADMINS)      
        axios.get(`${API_BASE}/all/admins`).then(response => {
        commit(ALL_ADMINS_SUCCESS, response.data)
        })
    },
    

adminById({commit}, payload) {
        commit(ADMIN_BY_ID)
        axios.get(`${API_BASE}/Admin/profile/:id/${payload}`).then(response => {
            commit(ADMIN_BY_ID_SUCCESS, response.data)
        })
    },
    addAdmin ({commit}, payload) {
        commit(ADD_ADMIN)
        axios.post(`${API_BASE}/Admin/create`, payload).then(response => {
            commit(ADD_ADMIN_SUCCESS, response.data)
        })
    },
    updateadmin({commit}, payload) {
        commit(UPDATE_ADMIN)   
        axios.patch(`${API_BASE}/Admin/account/:id${payload._id}`, payload).then(response => {
            commit(UPDATE_ADMIN_SUCCESS, response.data)
        })
    },


}
