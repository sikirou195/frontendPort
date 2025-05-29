<template>
  <div class="overlay" @click.self="$emit('close')">
    <div class="popup">
      <button class="close-btn" @click="$emit('close')">×</button>

      <img :src="welcomeImage" alt="Bienvenue" class="welcome-img" />

      <h1 class="title">
        Bienvenue <span class="highlight">dans mon portfolio</span>
      </h1>

      <p class="message">Portfolio réalisé avec <strong>Vue.js</strong> 🚀</p>

      <div class="tech-stack">
        <span class="tech-badge">Vue.js</span>
        <span class="tech-badge">JavaScript</span>
        <span class="tech-badge">HTML</span>
        <span class="tech-badge">CSS</span>
      </div>

      <router-link to="/portofolio" class="btn">🎯 Voir mon Portfolio</router-link>

      <footer>
        <p>© {{ currentYear }} <strong>OTOROU SIKIROU</strong></p>
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
  inset: 0;
  background: radial-gradient(circle at center, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8));
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.4s ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0 }
  to { opacity: 1 }
}

.popup {
  background: linear-gradient(145deg, #ffffff, #f0f0f0);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  text-align: center;
  position: relative;
  animation: popupIn 0.5s ease;
  overflow: hidden;
}

@keyframes popupIn {
  from {
    transform: scale(0.85) translateY(30px);
    opacity: 0;
  }
  to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 15px;
  font-size: 1.8rem;
  background: none;
  border: none;
  color: #aaa;
  cursor: pointer;
  transition: color 0.3s ease;
}

.close-btn:hover {
  color: #000;
}

.title {
  font-size: 2.2rem;
  color: #2c3e50;
  margin: 1.2rem 0;
  font-weight: bold;
}

.highlight {
  color: #673ab7;
  background: linear-gradient(90deg, #673ab7, #9c27b0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.welcome-img {
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 30px rgba(103, 58, 183, 0.2);
  transition: transform 0.3s ease;
}

.welcome-img:hover {
  transform: scale(1.03);
}

.message {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 1rem;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin: 1.2rem 0 2rem;
}

.tech-badge {
  background: #ede7f6;
  color: #673ab7;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  box-shadow: 0 2px 5px rgba(103, 58, 183, 0.15);
  transition: transform 0.2s ease;
}

.tech-badge:hover {
  transform: scale(1.05);
}

.btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: linear-gradient(135deg, #7e57c2, #5e35b1);
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.05rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(126, 87, 194, 0.3);
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(126, 87, 194, 0.5);
}

footer {
  margin-top: 2rem;
}

footer p {
  color: #999;
  font-size: 0.9rem;
}

.social-links {
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
  gap: 1rem;
}

.social-link {
  color: #999;
  font-size: 1.4rem;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #7e57c2;
}
</style>
