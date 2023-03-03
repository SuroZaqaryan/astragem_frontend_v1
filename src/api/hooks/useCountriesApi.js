import { useQuery, useQueryClient } from "@tanstack/vue-query";
import { computed, onMounted } from "vue";
import { countriesApi } from "@/api/countriesApi.js";

export const useCountriesApi = () => {
  const queryClient = useQueryClient();

  const { data, isError, isLoading, isStale, isFetching } = useQuery({
    queryKey: ["countries"],
    queryFn: countriesApi.getAllCountries,
    staleTime: 10 * 60 * 60 * 1000,
  });

  onMounted(async () => {
    if (isStale.value) {
      await queryClient.invalidateQueries({ queryKey: ["countries"] });
    }
  });

  return {
    pending: computed(
      () => isFetching.value || isLoading.value || isError.value
    ),
    data: computed(() => data?.value),
    isEmpty: computed(() => !data.value?.length),
  };
};
