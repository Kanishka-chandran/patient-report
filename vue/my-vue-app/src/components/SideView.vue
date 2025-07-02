
<template>
  <div class="side-view">
    <h2>Patient List</h2>
    <div class="patient-cards">
      <div
        class="patient-card"
        v-for="patient in patients"
        :key="patient.id"
        @click="$emit('select', patient)"
      >
        <img :src="patient.image" alt="Avatar" class="avatar" />
        <div class="info">
          <h3>{{ patient.name }}</h3>
          <p>{{ patient.phone }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['patients']
}
</script>

<style scoped>
.side-view {
  width: 300px;
  background: #e8f0fe;
  padding: 20px;
  overflow-y: auto;
  height: 100vh;
  border-right: 2px solid #ccc;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.patient-cards {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.patient-card {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 12px;
  background-color: #00CED1;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease;
}

.patient-card:hover {
  transform: scale(1.02);
  background-color: #d6eaff;
}

.avatar {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
}

.info h3 {
  margin: 0;
  font-size: 16px;
  color: #222;
}

.info p {
  margin: 4px 0 0;
  font-size: 13px;
  color: #555;
}
</style>



<!-- <template>
  <div class="side-view">
    <h2>PATIENTS</h2>
    <div class="user-list">
      <div
        class="user-card"
        v-for="(user, index) in patients"
        :key="index"
      >
        <img :src="user.image" class="avatar" />
        <div class="info">
          <h3>{{ user.name }}</h3>
          <p>{{ user.dob }}</p>
          <button class="view-btn" @click="$emit('select', user)">View</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['patients']
};
</script>

<style scoped>
.side-view {
  width: 300px;
  background-color: #354f52;
  color: white;
  padding: 20px;
  height: 100vh;
  overflow-y: auto;
}
h2 {
  text-align: center;
  margin-bottom: 20px;
}
.user-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.user-card {
  background: #52796f;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}
.info {
  flex: 1;
}
.view-btn {
  background-color: #cad2c5;
  color: #333;
  border: none;
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 5px;
}
.view-btn:hover {
  background-color: #a5b9a1;
}
</style> -->
