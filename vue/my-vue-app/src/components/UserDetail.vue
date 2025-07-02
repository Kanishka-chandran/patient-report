<template>
  <div class="user-detail" v-if="patient">
    <h2>PATIENT REPORT RECORD</h2>

    <div class="details-container">
      
      <div class="info-card">
        <img :src="patient.image" class="main-avatar" />
        <h1>{{ patient.name }}</h1>
        <div class="info-grid">
          <p><strong>Age:</strong> {{ patient.age }}</p>
          <p><strong>DOB:</strong> {{ patient.dob }}</p>
          <p><strong>Phone:</strong> {{ patient.phone }}</p>
          <p><strong>Email:</strong> {{ patient.email }}</p>
          <p><strong>Admitted:</strong> {{ patient.admit }}</p>
          <p><strong>Discharged:</strong> {{ patient.discharge }}</p>
          <p><strong>Address:</strong>{{ patient.address.country }}</p>
        </div>

        <h3>Checkups</h3>
        <ul class="checkup-list">
          <li v-for="(check, index) in patient.checkups" :key="index">
             {{ check }}
          </li>
        </ul>
      </div>

      
      <div class="cards">
        <div class="card">
          <img src="https://static.vecteezy.com/system/resources/previews/007/063/118/non_2x/blood-drop-isolated-on-white-background-free-vector.jpg" class="icon" />
          <p><strong>Blood Group</strong><br />{{ patient.blood }}</p>
        </div>
        <div class="card">
          <img src="https://www.shutterstock.com/image-vector/human-measures-height-icon-scale-260nw-2230789141.jpg" class="icon" />
          <p><strong>Height</strong><br />{{ patient.height }} cm</p>
        </div>
        <div class="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa-QKiY346hNqshwV1b7hrzWXC_0n7XvhrOQ&s" class="icon" />
          <p><strong>Weight</strong><br />{{ patient.weight }} kg</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['patient']
}
</script>

<style scoped>
.user-detail {
  flex: 1;
  padding: 30px;
  background: #f0f4f8;
  height: 100vh;
  overflow-y: auto;
}
h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}
.details-container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
}
.info-card {
  flex: 1;
  min-width: 300px;
  background: #ffffff;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}
.main-avatar {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
}
.info-card h1 {
  margin: 10px 0 20px;
  color: #0077b6;
}
.info-grid p {
  margin: 8px 0;
  font-size: 15px;
}
.checkup-list {
  padding-left: 20px;
  margin-top: 10px;
}
.cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.card {
  background: #00CED1;
  padding: 15px;
  border-radius: 12px;
  text-align: center;
  width: 200px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
.icon {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  object-fit: contain;
}
</style>


<!-- <template>
  <div class="user-detail" v-if="patient">
    <h2 class="title">PATIENT PROFILE</h2>
    <img :src="patient.image" class="main-avatar" />

    
    <div class="info-card">
      <p><strong>Name:</strong> {{ patient.name }}</p>
      <p><strong>Age:</strong> {{ patient.age }}</p>
      <p><strong>DOB:</strong> {{ patient.dob }}</p>
      <p><strong>Phone:</strong> {{ patient.phone }}</p>
      <p><strong>Email:</strong> {{ patient.email }}</p>
       <p><strong>City:</strong> {{ patient.address.city}}</p>
        <p><strong>Country:</strong> {{ patient.address.country }}</p>
    </div>

    
    <h3 class="vitals-title">Vitals</h3>
    <div class="cards">
      <div class="card">
        <img src="https://static.vecteezy.com/system/resources/previews/007/063/118/non_2x/blood-drop-isolated-on-white-background-free-vector.jpg" class="icon" />
        <p><strong>Blood Group:</strong> {{ patient.blood }}</p>
      </div>
      <div class="card">
        <img src="https://www.shutterstock.com/image-vector/human-measures-height-icon-scale-260nw-2230789141.jpg" class="icon" />
        <p><strong>Height:</strong> {{ patient.height }} cm</p>
      </div>
      <div class="card">
        <img src="https://th.bing.com/th/id/OIP.NU415M3BWP6ryrjUaVs_KwHaEd?rs=1&pid=ImgDetMain" class="icon" />
        <p><strong>Weight:</strong> {{ patient.weight }} kg</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['patient']
};
</script>

<style scoped>
.user-detail {
  width: 100%;
  min-height: 100vh;
  padding: 40px 20px;
  box-sizing: border-box;
  background-color: #f0f4f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
}

.title {
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.main-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #6ab7d6;
  margin-bottom: 20px;
}

.info-card {
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  padding: 25px 30px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 40px;
}

.vitals-title {
  text-align: center;
  font-size: 22px;
  margin-bottom: 20px;
  color: #444;
}

.cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 40px;
  width: 100%;
}

.card {
  background: #dbeafe;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  width: 200px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.icon {
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
}
</style> -->
