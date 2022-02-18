<template>
  <div>
    {{ memo.id }}
    {{ memo.content }}
    <button @click="deleteMemo(memo)">削除</button>
    <button @click="addFavo(memo)">いいね</button>
    <button @click="unFavo(memo)">いいね解除</button>
    {{ memo.favorite_count }}いいね
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
    unFavo(memo) {
      this.$store.dispatch("unFavo", memo.id).then(() => {
        this.$router.push("/memo");
      });
    },
  },
};
</script>
