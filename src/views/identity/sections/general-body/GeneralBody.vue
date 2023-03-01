<script setup>
import { ref } from 'vue'
import { useSideBar } from '@/stores/sidebar'
import { BaseQuery } from '@/service/base-query'
import IdentityLayout from '@/layouts/identity-layout/IdentityLayout.vue'
import BaseIcon from '@/components/common/atoms/base-icon/BaseIcon.vue'
import BaseCardService from '@/components/common/molecules/base-cards/base-card-service/BaseCardService.vue'

const sidebar = useSideBar()
const { isLoading, data } = BaseQuery()({ endpoint: 'general-body' })

const subTitle = ref('Which are is wider ?')

const selectOption = (value, options) => {
  const { defined, full_bust } = options.value.find(
    (option) => option.value === value
  )

  // If the value is false redirect back
  if (!value) {
    return (options.value = data.value)
  }

  if (defined) {
    options.value = defined
    subTitle.value = 'Is your waist defined'
  } else if (full_bust) {
    options.value = full_bust
    subTitle.value = 'Do you have a full bust ?'
  } else {
    sidebar.nextRoute('general-body', value)
  }
}
</script>

<template>
  <identity-layout v-if="!isLoading" title="Find Your Body">
    <template #question>
      <p class="question">
        {{ subTitle }}
        <base-icon src="repeat/question-mark.svg" />
      </p>
    </template>

    <div class="content_options">
      <base-card-service type="square" :options="data" @change="selectOption" />
    </div>
  </identity-layout>
</template>

<style lang="scss" scoped>
@import "./GeneralBody.scss";
</style>
