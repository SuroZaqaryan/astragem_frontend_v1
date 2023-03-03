import { api } from "@/libs/axios";

export const countriesApi = {
  getAllCountries: async () => {
    const { data } = await api.get("https://restcountries.com/v2/all");
    return data;
  },
};
