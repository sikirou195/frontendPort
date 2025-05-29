<template>
  <div class="overlay">
    <div class="popup">
      <button class="close-btn" @click="$emit('close')">×</button>
      <img :src="welcomeImage" alt="Bienvenue" class="welcome-img" />
      <h1 class="title">Bienvenue dans mon portfolio</h1>
      <p class="message">Portfolio réalisé avec Vue.js 🎉</p>

      <div class="tech-stack">
        <span class="tech-badge">Vue.js</span>
        <span class="tech-badge">JavaScript</span>
      </div>

      <router-link to="/portofolio" class="btn">Accéder à ma page Portfolio</router-link>

      <footer>
        <p>© {{ currentYear }} OTOROU SIKIROU</p>
        <div class="social-links">
          <a href="#" class="social-link" aria-label="GitHub"><i class="fab fa-github"></i></a>
          <a href="#" class="social-link" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="social-link" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import welcomeImage from '@/assets/welcome.jpeg';

export default {
  name: 'WelcomePopup',
  data() {
    return {
      welcomeImage,
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.popup {
  background: #ffffff;
  padding: 2rem;
  border-radius: 20px;
  max-width: 600px;
  width: 90%;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  position: relative;
  text-align: center;
  animation: popupIn 0.3s ease-out;
}

@keyframes popupIn {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: #888;
  cursor: pointer;
  transition: color 0.3s ease;
}

.close-btn:hover {
  color: #333;
}

.title {
  font-size: 2rem;
  margin: 1rem 0;
  color: #2c3e50;
  font-weight: bold;
}

.welcome-img {
  max-width: 100%;
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.message {
  font-size: 1.2rem;
  color: #34495e;
  margin: 1rem 0;
}

.tech-stack {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
}

.tech-badge {
  background: #e0e6ed;
  color: #2c3e50;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.btn {
  padding: 0.8rem 2rem;
  font-size: 1rem;
  background-color: #673ab7;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(103, 58, 183, 0.3);
}

.btn:hover {
  background-color: #512da8;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(103, 58, 183, 0.4);
}

footer {
  margin-top: 2rem;
}

footer p {
  color: #7f8c8d;
  margin-bottom: 0.5rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-link {
  color: #7f8c8d;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #673ab7;
}
</style>
