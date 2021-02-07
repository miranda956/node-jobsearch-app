import http from "../http-common/http-common";

class JobDataService {
  getAll() {
    return http.get("/api/jobs/details");
  }

  get(id) {
    return http.get(`/api/single/job/${id}`);
  }

  create(data) {
    return http.post("/api/post/job", data);
  }

  update(id, data) {
    return http.put(`/job/update/${id}`, data);
  }

  delete(id) {
    return http.delete(`/job/delete/${id}`);
  }
  findByTitle(keyword) {
    return http.get(`/?keyword=${keyword}`);
  }
}

export default new JobDataService();