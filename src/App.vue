<template>
  <div class="max-w-3xl mx-auto mt-8 px-4">
    <h1 class="text-3xl font-semibold mb-6">Task Manager</h1>
    <TaskForm 
      :tasks="tasks"
      @addTask="addTask"
      @saveTask="saveTask"
      class="mb-6"
    ></TaskForm>
    <TaskList 
      :tasks="tasks" 
      @deleteTask="deleteTask"
      @editTask="editTask"
    ></TaskList>
  </div>
</template>

<script>
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';

export default {
  components: {
    TaskForm,
    TaskList,
  },
  data() {
    return {
      tasks: [],
    };
  },
  mounted() {
    // Load tasks from local storage
    if (localStorage.getItem('tasks')) {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  },
  methods: {
    addTask(newTask) {
      this.tasks.push(newTask);
      this.saveTasks();
    },
    saveTask({ index, newTask }) {
      if (index === -1) {
        this.tasks.push(newTask);
      } else {
        this.tasks[index] = newTask;
      }
      this.saveTasks();
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
      this.saveTasks();
    },
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
    editTask({ index, editedTask }) {
      this.tasks[index] = editedTask;
      this.saveTasks();
    },
  },
};
</script>
