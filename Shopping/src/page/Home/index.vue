<template>
  <div>
    <TypeNav></TypeNav>

    <ListContainer></ListContainer>

    <Recommend></Recommend>

    <Rank></Rank>

    <Like></Like>

    <Floor
      v-for="(floor, index) in FloorList"
      :key="floor.id"
      :list="floor"
    ></Floor>

    <Brand></Brand>
  </div>
</template>
<script>
import ListContainer from "./ListContainer";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";
import { mapState } from "vuex";

export default {
  name: "home",
  components: { ListContainer, Recommend, Rank, Like, Floor, Brand },
  data() {
    return {};
  },
  methods: {
    async getToken() {
      await this.$store.dispatch("checkToken");
    },
  },
  mounted() {
    this.$store.dispatch("getFloor");
    this.getToken()
  },
  computed: {
    ...mapState({
      FloorList: (state) => {
        return state.Home.floorList;
      },
    }),
  },
};
</script>

<style lang="less" scoped>
</style>