<template>
  <div class="home">
    <div class="container">
      <img :src="welcomeImage" alt="Bienvenue" class="welcome-img" />
      <h1 class="title">dans mon portfolio </h1>
      <p class="message">Portfolio réalisé avec Nest.js et Vue.js 🎉</p>
      <div class="tech-stack">
        <span class="tech-badge">Vue.js</span>
        <span class="tech-badge">Nest.js</span>
        <span class="tech-badge">JavaScript</span>
      </div>
      <router-link to="/portofolio" class="btn">Accéder a ma page Portfolio</router-link>
    </div>
    <footer>
      <p>© {{ currentYear }} OTOROU SIKIROU</p>
      <div class="social-links">
        <a href="#" class="social-link" aria-label="GitHub">
          <i class="fab fa-github"></i>
        </a>
        <a href="#" class="social-link" aria-label="LinkedIn">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="#" class="social-link" aria-label="Twitter">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
import welcomeImage from '@/assets/welcome.jpeg';

export default {
  name: 'HomeView',
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

.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ef 100%);
  position: relative;
}

.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin: 1rem 0;
  font-weight: 700;
}

.welcome-img {
  max-width: 600px;
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 1.5rem;
}

.welcome-img:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.message {
  font-size: 1.3rem;
  color: #34495e;
  margin: 1rem 0;
  line-height: 1.6;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
  margin: 1.5rem 0;
}

.tech-badge {
  background-color: #e0e6ed;
  color: #2c3e50;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.btn {
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  background-color: #673ab7;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  margin: 2rem 0;
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 15px rgba(103, 58, 183, 0.3);
}

.btn:hover {
  background-color: #512da8;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(103, 58, 183, 0.4);
}

.btn:active {
  transform: translateY(-1px);
}

footer {
  background-color: #f8f9fa;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.05);
  width: 100%;
}

footer p {
  color: #7f8c8d;
  margin-bottom: 0.8rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 0.5rem;
}

.social-link {
  color: #7f8c8d;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #673ab7;
}

/* Responsive design */
@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }
  
  .message {
    font-size: 1.1rem;
  }
  
  .btn {
    padding: 0.7rem 1.8rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.8rem;
  }
  
  .tech-stack {
    gap: 0.5rem;
  }
  
  .tech-badge {
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
  }
}
</style>