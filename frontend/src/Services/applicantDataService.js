import http from "../http-common/http-common";

class ApplicantDataService {
  getAll() {
    return http.get("/api/get/Applicants");
  }

  get(id) {
    return http.get(`/api/Applicant/profile/${id}`);
  }

  create(data) {
    return http.post("/api/create/Applicant", data);
  }

  update(id, data) {
    return http.put(`/api/patch/applicant/profile/${id}`, data);
  }

  findApplicantJobs(id) {
    return http.get(`/api/applicant/id/appliedjobs/${id}`);
  }
}

export default new ApplicantDataService();