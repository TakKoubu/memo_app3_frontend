<template>
  <div>
    {{ memo.id }}
    {{ memo.content }}
    <button @click="deleteMemo(memo)">削除</button>
    <button @click="addFavo(memo)">いいね</button>
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
  methods: {
    deleteMemo(memo) {
      this.$store.dispatch("deleteMemo", memo.id).then(() => {
        this.$router.push("/memo");
      });
    },
    addFavo(memo) {
      this.$store.dispatch("addFavo", memo.id).then(() => {
        this.$router.push("/memo");
      });
    },
  },
};
</script>
