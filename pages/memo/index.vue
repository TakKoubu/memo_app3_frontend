<template>
  <section>
    <MemoPreview v-for="memo in loadedMemos" :key="memo.memo_id" :memo="memo" />
  </section>
</template>

<script>
import MemoPreview from "@/components/MemoPreview";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  components: {
    MemoPreview,
  },
  created() {
    this.fetchMemos();
  },
  methods: {
    ...mapActions(["fetchMemos"]),
  },
  computed: {
    ...mapGetters(["loadedMemos"]),
  },
};
</script>
