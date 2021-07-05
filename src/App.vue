<template>
  <div id="app">
    <h2>-----app内容：modules中的内容----</h2>
    <h2>{{ $store.state.a.name }}</h2>
    <button @click="updataname">修改名字</button>
    <h2>{{ $store.getters.fullname }}</h2>
    <h2>{{ $store.getters.fullname2 }}</h2>
    <h2>{{ $store.getters.fullname3 }}</h2>
    <button @click="upnamee">异步操作</button>

    <h2>-----app内容：info内容是否响应式----</h2>
    <h2>{{ $store.state.info }}</h2>
    <button @click="xiugai">修改信息</button>

    <h2>-----app内容：state相关信息----</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="add5(5)">+5</button>
    <button @click="add5(10)">+10</button>
    <button @click="addstumore(stu)">添加学生</button>

    <h2>-----HelloVuex内容----</h2>
    <hello-vuex />

    <h2>-----vuex内容：getters相关信息----</h2>
    <h3>{{ $store.getters.prow }}</h3>

    <h2>{{ $store.getters.more20stu }}</h2>
    <h2>{{ $store.getters.more20stuLength }}</h2>
    <h2>{{ $store.getters.moreAgestu(8) }}</h2>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex.vue";
import { INCREMENT } from "./store/mutationstype";
export default {
  name: "App",
  components: {
    HelloVuex,
  },
  data() {
    return {
      msg: "我是app组件",
    };
  },
  methods: {
    add() {
      //通过commit提交index.js定义的名字
      this.$store.commit(INCREMENT);
    },
    sub() {
      this.$store.commit("decrement");
    },
    add5(count) {
      this.$store.commit("addfive", count);
    },
    addstumore() {
      const stu = { id: 14, name: "ma", age: 30 };
      this.$store.commit("addstu", stu);
    },
    // updatainfo() {
    //   // this.$store.dispatch("aupdatainfo", {
    //   //   msg: "携带的信息",
    //   //   success: () => {
    //   //     console.log("完成了");
    //   //   },
    //   // });
    //   this.$store.dispatch("aupdatainfo", "携带的信息").then((res) => {
    //     console.log(res);
    //   });
    // },
    xiugai() {
      //this.$store.commit("xinxi");
      this.$store.dispatch("aupdatainfo", "携带的信息").then((res) => {
        console.log("里面完成提交了");
        console.log(res);
      });
    },
    updataname() {
      this.$store.commit("updataname", "lisi");
    },
    upnamee() {
      this.$store.dispatch("upname");
    },
  },
};
</script>

<style>
</style>
