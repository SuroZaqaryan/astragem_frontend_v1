<script setup>
import { ref } from "vue";
import { useSideBar } from "@/stores/sidebar";
import BaseIcon from "@/components/common/atoms/base-icon/BaseIcon.vue";
import BaseCardService from "@/components/common/molecules/base-cards/base-card-service/BaseCardService.vue";

const sidebar = useSideBar();

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const newData = ref([]);
const subTitle = ref("Which area is wider ?");

newData.value = [
  // At the initial stage, we do not display objects with "hurglass", "round", "rectangle" values
  ...props.data["general-body"].filter(
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

const findObj = (key) =>
  props.data["general-body"].find((obj) => obj.value === key);

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
  <div>
    <h3 class="content__title">Find Your Body</h3>

    <p class="content__subtitle">
      {{ subTitle }}
      <base-icon src="repeat/question-mark.svg" />
    </p>

    <div class="content_options">
      <base-card-service
        type="square"
        :options="newData"
        @change="selectOption"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./GeneralBody.scss";
</style>
