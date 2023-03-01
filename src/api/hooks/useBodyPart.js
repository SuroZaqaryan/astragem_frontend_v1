import { useQuery, useQueryClient } from "@tanstack/vue-query";
import { computed, onMounted } from "vue";
import { bodyPartApi } from "@/api/bodyPartApi.js";

export const useBodyPart = () => {
  const queryClient = useQueryClient();

  const { data, isError, isLoading, isStale, isFetching } = useQuery({
    queryKey: ["body-part"],
    queryFn: bodyPartApi.getGeneralBody,
    staleTime: 10 * 60 * 60 * 1000,
  });

  onMounted(async () => {
    if (isStale.value) {
      await queryClient.invalidateQueries({ queryKey: ["body-part"] });
    }
  });

  console.log('ppppppp', );

  return {
    pending: computed(
      () => isFetching.value || isLoading.value || isError.value
    ),
    data: computed(() => data?.value),
    isEmpty: computed(() => !data.value?.length),
  };
};
