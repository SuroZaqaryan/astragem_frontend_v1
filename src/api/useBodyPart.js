import { useQuery, useQueryClient } from "@tanstack/vue-query";
import { computed, onMounted } from "vue";
import { bodyPartApi } from "./bodyPartApi";

export const useBodyPart = () => {
  console.log("asdasddsad");
  const queryClient = useQueryClient();

  const {
    isLoading,
    isFetching,
    isStale,
    isError,
    data: resData,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: bodyPartApi.getGeneralBody,
    staleTime: 5 * 60 * 60 * 1000,
  });

  onMounted(async () => {
    if (isStale.value) {
      await queryClient.invalidateQueries({ queryKey: ["courses"] });
    }
  });

  return {
    pending: computed(
      () => isFetching.value || isLoading.value || isError.value
    ),
    data: computed(() => resData.value?.data),
    isEmpty: computed(() => !resData.value?.data.length),
  };
};
