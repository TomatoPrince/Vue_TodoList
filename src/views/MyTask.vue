<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-6 mb-3">
        <AddTodoGroup/>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-6 mb-3">
        <TaskListItem />
      </div>
    </div>
  </div>
</template>

<script>
import AddTodoGroup from "@/components/AddTodoGroup";
import TaskListItem from "@/components/TaskListItem";

export default {
  components: {
    AddTodoGroup,
    TaskListItem
  }
};
</script>
<style scoped>
</style>

