<template>
  <div class="home">
    <img :src="welcomeImage" alt="welcome" class="welcome-img" />
    <p class="message">Ce projet est un mini CRUD réalisé avec Nest.js et Vue.js 🎉</p>
    <router-link to="/etudiant" class="btn">Accéder au formulaire</router-link>
   
    <footer>Copy right | OTOROU SIKIROU</footer>
  </div>
</template>

<script>
import welcomeImage from '@/assets/welcome.jpeg'; // ✅ Import correct de l'image

export default {
  name: 'HomeViews',
  data() {
    return {
      welcomeImage,
    };
  },
};
</script>

<style scoped>
.message {
 margin-top: 0px;
  margin-left: 300px;
  color: black;
}

footer {
  margin-top: 50px;
  margin-left: 530px
}

.welcome-img {
  margin-top: 180px;
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-left: 450px
}

.btn {
  padding: 15px 30px;
  font-size: 1em;
  background-color: #673ab7;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.3s;
  margin-left: 530px;
  margin-bottom: 70px
}

.btn:hover {
  background-color: #512da8;
}
</style>
