<!-- task 1 -->


 <!-- <template>
  <div id="app">
    <div class="card">
      <h1>👤 User Information</h1>
      <p class="label">User Name:</p>
      <p class="username">{{ userName }}</p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const userName = computed(() => store.getters.userName);
    return { userName };
  }
};
</script>

<style scoped>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #ece9e6, #ffffff);
  font-family: 'Segoe UI', sans-serif;
}

.card {
  background: #ffffff;
  padding: 30px 40px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.label {
  font-weight: 600;
  color: #6b7280;
  margin-top: 10px;
  font-size: 1.1rem;
}

.username {
  font-size: 1.5rem;
  font-weight: bold;
  color: green;
}
</style> -->





<!-- task 2 -->

 <!-- <template>
  <div id="app">
    <h1>🛒 My Grocery List</h1>

    <form @submit.prevent="addGroceryItem" class="form">
      <input v-model="newGrocery" placeholder="Add an item..." />
      <button type="submit">Add</button>
    </form>

    <ul v-if="groceryList.length" class="list">
      <li v-for="(item, index) in groceryList" :key="index" class="list-item">
        <span>{{ index + 1 }}. {{ item }}</span>
        <button class="delete-btn" @click="deleteItem(index)">🗑</button>
      </li>
    </ul>

    <p v-else class="empty-message">No items yet. Start adding groceries!</p>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const groceryList = computed(() => store.getters.groceries);
    const newGrocery = ref('');

    const addGroceryItem = () => {
      if (newGrocery.value.trim()) {
        store.dispatch('addGrocery', newGrocery.value.trim());
        newGrocery.value = '';
      }
    };

    const deleteItem = (index) => {
      store.dispatch('deleteGrocery', index);
    };

    return {
      groceryList,
      newGrocery,
      addGroceryItem,
      deleteItem
    };
  }
};
</script>

<style scoped>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  max-width: 500px;
  margin: 40px auto;
  background: #f9fafb;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
}

h1 {
  margin-bottom: 20px;
  color: #333;
}

.form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

button {
  padding: 10px 16px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition:  0.2s;
}

button:hover {
  background-color: #1e40af;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #e0f2fe;
  padding: 10px 15px;
  margin: 10px 0;
  border-radius: 8px;
  font-size: 1rem;
}

.delete-btn {
  background: transparent;
  border: none;
  font-size: 18px;
  color: #ef4444;
  cursor: pointer;
}

.empty-message {
  font-style: italic;
  color: #777;
}
</style> -->

 





 <!-- task 3 -->


 
<!-- <template>
  <div :class="theme" class="app-container">
    <button @click="toggleTheme">
      Toggle Theme (Current: {{ theme }})
    </button>
    <h1>Hello from Vue with Theme Toggle!</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters(['currentTheme']),
    theme() {
      return this.currentTheme;
    }
  },
  methods: {
    ...mapActions(['toggleTheme']),
  }
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  transition: background-color 0.3s, color 0.3s;
}

.light {
  background-color: white;
  color: black;
}

.dark {
  background-color: #121212;
  color: white;
}

button {
  padding: 0.6rem 1.2rem;
  margin: 1rem;
  border: none;
  border-radius: 5px;
  background-color: green;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: green;
}
</style> -->





<!-- task 5 -->



 <!-- <template>
  <div class="container">
    <SideView :patients="patients" @select="selectedPatient = $event" />
    <UserDetail :patient="selectedPatient" />
  </div>
</template>

<script>
import SideView from './components/SideView.vue'
import UserDetail from './components/UserDetail.vue'

export default {
  components: { SideView, UserDetail },
  data() {
    return {
      patients: [],
      selectedPatient: null
    }
  },
  mounted() {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        this.patients = data.users.map((item) => ({
          id: item.id,
          name: `${item.firstName} ${item.lastName}`,
          age: item.age,
          dob: item.birthDate,
          phone: item.phone,
          email: item.email,
          admit: '2025-06-01',
          discharge: '2025-06-10',
          blood: item.bloodGroup,
          height: item.height,
          weight: item.weight,
          image: item.image,
          address:item.address,
          checkups: ['ECG', 'X-Ray', 'Blood Test']
        }));
        this.selectedPatient = this.patients[0];
      });
  }
}
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
}
</style>  -->

































<template>
  <div class="container">
    <SideView :patients="patients" @select="selectedPatient = $event" />
    <UserDetail :patient="selectedPatient" />
  </div>
</template>

<script>
import SideView from './components/SideView.vue';
import UserDetail from './components/UserDetail.vue';

export default {
  components: { SideView, UserDetail },
  data() {
    return {
      patients: [],
      selectedPatient: null,
    };
  },
  mounted() {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        this.patients = data.users.map(user => ({
          id: user.id,
          name: `${user.firstName} ${user.lastName}`,
          age: user.age,
          dob: user.birthDate,
          phone: user.phone,
          email: user.email,
          address:user.address,
          blood: user.bloodGroup,
          height: user.height,
          weight: user.weight,
          image: user.image,
        }));
        this.selectedPatient = this.patients[0];
      });
  }
};
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
  background: #f0f0f5;
}
</style>