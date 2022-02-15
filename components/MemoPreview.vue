<template>
  <div>
    {{ memo.id }}
    {{ memo.content }}
  </div>
</template>

<script>
export default {
  name: "MemoPreview",
  props: {
    memo: {
      type: Object,
      required: true,
    },
  },
};
</script>
