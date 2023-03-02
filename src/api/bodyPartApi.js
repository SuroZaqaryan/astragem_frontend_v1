import { api } from "@/libs/axios";

export const bodyPartApi = {
  getGeneralBody: async () => {
    const { data } = await api.get("general-body");
    return data;
  },

  getBodyFrame: async () => {
    const { data } = await api.get("body-frame");
    return data;
  },
};
