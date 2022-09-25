import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  header: {
    "API-KEY": "2fd61b36-0720-41b2-8251-f557940cabd2",
  },
});

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`, {})
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(`follow/${userId.id}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId.id}`);
  },
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
};
