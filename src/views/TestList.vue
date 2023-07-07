<template>
  <ul>
    <li
        v-for="{ id, content, activation } in todoItems"
        @click="toggle(id)"
    >
      <input type="checkbox" :checked="activation" />
      <span
          :style="{
          textDecoration: activation ? 'line-through' : 'none'
        }"
          v-html="content"
      />
    </li>
  </ul>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import axios from "axios";

const pageTitle = "TodoList | Vue SSR";

export default {
  name: "TodoList",

  computed: {
    ...mapState(['todoItems']),
  },

  methods: {
    ...mapMutations(['SET_TODO_ITEMS']),

    toggle (id) {
      const todoItems = [ ...this.todoItems ];
      const selectedItem = todoItems.find(v => v.id === id);
      selectedItem.activation = !selectedItem.activation;
      this.SET_TODO_ITEMS(todoItems);

      // axios로 서버에 api 요청을 하여 server쪽 state를 수정합니다.
      axios.put("/api/state", { todoItems });
    }
  },
}
</script>

<style scoped>
</style>