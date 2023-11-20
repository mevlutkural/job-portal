import { defineStore } from "pinia";
import axios from "axios";

export const useJobAdvertisementsStore = defineStore({
  id: "jobAdvertisementsStore",
  state: () => {
    return {
      jobAdvertisements: [],
    };
  },
  actions: {
    async fetch() {
      const response = await axios.get(
        "http://localhost:3000/job-advertisements"
      );

      this.jobAdvertisements = response.data;
    },
    async add(data) {
      try {
        const response = await axios.post(
          "http://localhost:3000/job-advertisements",
          data
        );

        this.jobAdvertisements.push(response.data);

        return {
          isSuccess: true,
        };
      } catch (error) {
        console.log("ADD_JOB_ERROR", error);
      }
    },
    async delete(id) {
      try {
        const response = await axios.delete(
          "http://localhost:3000/job-advertisements/" + id
        );

        this.jobAdvertisements = this.jobAdvertisements.filter(
          (j) => j._id !== id
        );
      } catch (error) {
        console.log("ADD_JOB_ERROR", error);
      }
    },
  },
});
