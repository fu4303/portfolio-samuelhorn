<template>
  <g-link
    class="my-8"
    exact-active-class="border-b-2 border-complementary"
    :to="to"
  >
    <slot />
  </g-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    }
  }
}
</script>