import Vue from "vue";

export const store = Vue.observable({
  baseUrl: "http://localhost:3000",
});

export const mutations = {
  setBaseUrl(url) {
    store.baseUrl = url;
  },
};
