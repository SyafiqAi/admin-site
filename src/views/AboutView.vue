<template>
  <div class="about">
    <h1>This is an about page</h1>
    <table>
      <tr>
        <th>Name</th>
        <th>Message</th>
        <th>Action</th>
      </tr>
      <tr v-for="(fb, index) in feedback" :key="index">
        <td>{{ fb.name }}</td>
        <td>{{ fb.message }}</td>
        <td>
          <button @click='deleteClicked(fb.id)'>Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { getFeedbackListener, deleteData } from '../firebase.js'
export default {
  data() {
    return {
      feedback: null,
    }
  },
  methods: {
    deleteClicked(id) {
      deleteData(id);
    }
  },
  mounted() {
    this.feedback = getFeedbackListener();
  }
}
</script>

<style scoped>
td, th {
  text-align: left;
  padding: 10px 30px;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
