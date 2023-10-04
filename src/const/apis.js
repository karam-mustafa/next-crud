const baseUrl = "http://localhost:2000";

export default {
  courses: {
    get: `${baseUrl}/courses`,
    getById: (id) => `${baseUrl}/courses/${id}`,
    edit: (id) => `${baseUrl}/courses/${id}`,
    add: `${baseUrl}/courses`,
  },
};
