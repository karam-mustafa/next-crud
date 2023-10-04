export default {
  get: `/courses`,
  add: `/courses/add`,
  getById: (id) => `/courses/${id}`,
  edit: (id) => `/courses/edit/${id}`,
};
