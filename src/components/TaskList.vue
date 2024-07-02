<template>
    <div class="mt-4">
      <h2 class="text-xl font-semibold mb-4">Tasks:</h2>
      <ul>
        <li v-for="(task, index) in tasks" :key="index" class="flex items-center mb-2">
          <span v-if="index !== editingIndex" class="flex-1">{{ task }}</span>
          <input 
            v-else 
            type="text" 
            v-model="editedTask" 
            @keyup.enter="saveEdit(index)" 
            @blur="saveEdit(index)"
            class="py-1 px-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:border-blue-500 flex-1"
          >
          <button 
            @click="editTask(index)" 
            class="py-1 px-3 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-600 focus:outline-none"
          >
            {{ index !== editingIndex ? 'Edit' : 'Save' }}
          </button>
          <button 
            @click="deleteTask(index)" 
            class="py-1 px-3 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['tasks'],
    data() {
      return {
        editingIndex: -1,
        editedTask: '',
      };
    },
    methods: {
      editTask(index) {
        this.editingIndex = index;
        this.editedTask = this.tasks[index];
      },
      saveEdit(index) {
        if (this.editedTask.trim()) {
          this.$emit('editTask', { index, editedTask: this.editedTask.trim() });
          this.editingIndex = -1;
        }
      },
      deleteTask(index) {
        this.$emit('deleteTask', index);
      },
    },
  };
  </script>
  