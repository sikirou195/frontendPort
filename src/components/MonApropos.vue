<template>
  <section class="about-section">
    <div class="about-container">
      <div class="about-img">
        <h3 class="name-title">OTOROU Sikirou</h3>
        <img src="@/assets/sikirou1.jpg" alt="Mon portrait" class="portrait animated-img" />
      </div>

      <div class="about-content">
        <h2 class="section-title animated-fade">🙋‍♂️ À Propos de Moi</h2>
        <p class="section-subtitle animated-fade delay-1">Découvrez mon parcours et ma passion pour le développement logiciel</p>

        <p class="about-text animated-fade delay-2">
          Je suis un étudiant passionné par le développement de logiciels et les technologies web modernes. J'ai acquis une solide expérience dans la conception d'applications web et mobiles.
        </p>
        <p class="about-text animated-fade delay-3">
          Mon objectif est de poursuivre mes études en Licence 3 Génie Logiciel afin d'approfondir mes connaissances et devenir un développeur d'exception.
        </p>

        <div class="about-stats">
          <div class="stat-item animated-stat">
            <h4 class="stat-number">10+</h4>
            <p class="stat-text">Projets réalisés</p>
          </div>
          <div class="stat-item animated-stat delay-1">
            <h4 class="stat-number">5+</h4>
            <p class="stat-text">Technologies maîtrisées</p>
          </div>
          <div class="stat-item animated-stat delay-2">
            <h4 class="stat-number">3</h4>
            <p class="stat-text">Années d'expérience</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
};
</script>

<style scoped>
.about-section {
  background-color: #f1f1f1;
  padding: 80px 20px;
}

.about-container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: center;
}

.about-img {
  flex: 1;
  text-align: center;
}

.name-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}

.portrait {
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* Contenu */
.about-content {
  flex: 1;
}

.section-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #007BFF;
}

.section-subtitle {
  font-size: 18px;
  margin-bottom: 20px;
  color: #444;
}

.about-text {
  font-size: 16px;
  margin-bottom: 16px;
  color: #333;
  line-height: 1.6;
}

.about-stats {
  display: flex;
  gap: 30px;
  margin-top: 30px;
  flex-wrap: wrap;
}

.stat-item {
  flex: 1;
  text-align: center;
}

.stat-number {
  font-size: 28px;
  font-weight: bold;
  color: #007BFF;
}

.stat-text {
  font-size: 14px;
  color: #666;
}

/* 🎬 Animations */
.animated-img {
  animation: fadeInUp 1s ease-out;
}

.animated-fade {
  opacity: 0;
  animation: fadeIn 0.8s ease forwards;
}

.animated-stat {
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
}

.delay-1 {
  animation-delay: 0.4s;
}

.delay-2 {
  animation-delay: 0.7s;
}

.delay-3 {
  animation-delay: 1s;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
