<template>
  <section class="hero-section">
    <div class="hero-container">
      <div class="hero-content">
        <router-link to="/contactlist" class="hero-title-link">
          <h1 class="hero-title animated-title">
            Développeur <span class="highlight">Passionné</span>
          </h1>
        </router-link>
        <p class="hero-subtitle animated-subtitle">
          Étudiant en informatique aspirant à une Licence 3 en Génie Logiciel, je conçois des solutions web innovantes et performantes.
        </p>
      </div>

      <div class="theme-switcher" @click="toggleTheme">
        <i class="fas" :class="isDarkTheme ? 'fa-sun' : 'fa-moon'"></i>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      isDarkTheme: false,
    };
  },
  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      document.body.classList.toggle('dark-theme', this.isDarkTheme);
    },
  },
};
</script>

<style scoped>
.hero-section {
  padding: 100px 20px 60px;
  background-color: #ffffff;
  border-bottom: 1px solid #eee;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.hero-content {
  max-width: 600px;
}

.hero-title-link {
  text-decoration: none;
}

.hero-title {
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #222;
}

.highlight {
  color: #007BFF;
}

.hero-subtitle {
  font-size: 18px;
  color: #555;
  line-height: 1.6;
}

.theme-switcher {
  font-size: 28px;
  cursor: pointer;
  color: #007BFF;
  padding: 10px;
  transition: color 0.3s ease;
}

.theme-switcher:hover {
  color: #0056b3;
}

/* ✨ Animations */
.animated-title {
  animation: slideInLeft 0.9s ease-out both;
}

.animated-subtitle {
  animation: fadeIn 1.2s ease-in both;
  animation-delay: 0.4s;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Optional dark theme toggle effect */
.dark-theme {
  background-color: #111;
  color: #f1f1f1;
}
</style>
