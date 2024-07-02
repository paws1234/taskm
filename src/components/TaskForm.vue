<template>
  <div>
    <h2 class="text-lg font-semibold mb-2">{{ editingIndex === -1 ? 'Add Task:' : 'Edit Task:' }}</h2>
    <form @submit.prevent="editingIndex === -1 ? addTask() : saveTask()" class="flex items-center">
      <input 
        type="text" 
        v-model="newTask" 
        placeholder="Enter task" 
        class="py-2 px-3 border border-gray-300 rounded-md mr-2 focus:outline-none focus:border-blue-500 flex-1"
      >
      <button 
        type="submit" 
        class="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
      >
        {{ editingIndex === -1 ? 'Add' : 'Save' }}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      editingIndex: -1,
    };
  },
  props: ['tasks'],
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.$emit('addTask', this.newTask.trim());
        this.newTask = '';
      }
    },
    saveTask() {
      if (this.newTask.trim()) {
        this.$emit('saveTask', { index: this.editingIndex, newTask: this.newTask.trim() });
        this.newTask = '';
        this.editingIndex = -1;
      }
    },
  },
};
</script>
