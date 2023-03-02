<script setup>
import { ref, watch } from "vue";
import { useBodyPart } from "@/api/hooks/useBodyPart";
import { useSideBar } from "@/stores/sidebar";
import BodyPartLayout from "@/layouts/body-part-layout/BodyPartLayout.vue";
import BaseIcon from "@/components/common/atoms/base-icon/BaseIcon.vue";
import BaseCardService from "@/components/common/molecules/base-cards/base-card-service/BaseCardService.vue";

const { data, pending } = useBodyPart();
const sidebar = useSideBar();

const subTitle = ref("Which area is wider ?");
const newData = ref([]);

watch(pending, (newVal) => {
  if (!newVal) {
    newData.value = [
      // At the initial stage, we do not display objects with "hurglass", "round", "rectangle" values
      ...data.value.filter(
        (option) => !["hurglass", "round", "rectangle"].includes(option.value)
      ),
      // Adding a new object with a value "equal"
      {
        title: "Equal",
        description: "",
        value: "equal",
        image: "identity-images/general-body/equal.png",
      },
    ];
  }
});

const findObj = (key) => data.value.find((obj) => obj.value === key);

const selectOption = (value, options) => {
  switch (value) {
    case "equal":
      options.value = [
        findObj("hurglass"),
        {
          title: "No",
          value: "no",
          image: "identity-images/general-body/diamond.png",
        },
      ];
      subTitle.value = "Is your waist defined";
      break;
    case "no":
      options.value = [findObj("round"), findObj("rectangle")];
      subTitle.value = "Do you have a full bust ?";
      break;
    default:
      sidebar.nextRoute("general-body", value);
      break;
  }
};
</script>

<template>
  <body-part-layout v-if="!pending" title="Find Your Body">
    <template #question>
      <p class="question">
        {{ subTitle }}
        <base-icon src="repeat/question-mark.svg" />
      </p>
    </template>

    <div class="content_options">
      <base-card-service
        type="square"
        :options="newData"
        @change="selectOption"
      />
    </div>
  </body-part-layout>
</template>

<style lang="scss" scoped>
@import "./GeneralBody.scss";
</style>
