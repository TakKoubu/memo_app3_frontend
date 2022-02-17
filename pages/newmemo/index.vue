<template>
  <div>
    <h2>Memoの入力</h2>
    <textarea
      class="content-area"
      v-model="content"
      placeholder="add some text"
    ></textarea>
    <button @click="addMemo">作成する</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
      // NOTE: 参考までに
      // memo: { tilte: "", content: "" },
    };
  },
  methods: {
    addMemo() {
      this.$store.dispatch("addMemo", this.content).then(() => {
        this.$router.push("/memo");
      });
    },
  },
};
</script>

<style scoped>
.content-area {
  width: 50%;
  display: block;
}
</style>
