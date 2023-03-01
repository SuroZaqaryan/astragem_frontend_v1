import { api } from "@/libs/axios";

export const bodyPartApi = {
  getGeneralBody: async () => {
    const { data } = await api.get("/general-body");
    console.log(data);
    return data;
  },
};
