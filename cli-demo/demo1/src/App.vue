<template>
  <div class="hello">
    <div>
      <input class="redColor blueBg" v-model="inputValue" />
      <button @click="addTodo">添加</button>
    </div>
    <ul>
      <hello-world v-for="(todo, i) in todoList"
                   v-bind:todoValue="todo" v-bind:index="i"
                   v-on:remove="removeTodo"
      ></hello-world>
    </ul>
  </div>
</template>

<script>
  import HelloWord from "./components/HelloWorld";

  export default {
    name: 'App',
    data () {
      return {
        inputValue: '',
        todoList: [],
      }
    },
    methods: {
      addTodo() {
        this.todoList.push(this.inputValue);
        this.inputValue = '';
      },
      removeTodo(i) {
        this.todoList.splice(i, 1)
      },
    },
    components: {
      'hello-world': HelloWord,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
