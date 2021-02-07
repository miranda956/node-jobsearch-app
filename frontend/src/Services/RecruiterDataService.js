import http from "../http-common/http-common";

class RecruiterDataService {
  getAll() {
    return http.get("/api/get/Recruiters");
  }

  get(id) {
    return http.get(`/api/Recruiter/profile/${id}`);
  }

  create(data) {
    return http.post("/api/post/Recruiter", data);
  }

  update(id, data) {
    return http.put(`/api/Recruiter/profile/update/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

 Applicant(id){
     return http.get(`/api/Recruiter/applicants/${id}`);
 }
}

export default new RecruiterDataService();
