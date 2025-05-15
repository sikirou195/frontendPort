<template>
  <section id="photoshop" class="section bg-white">
    <div class="container">
      <h2 class="section-title">Mes Réalisations Photoshop</h2>
      <p class="section-subtitle">
        Voici quelques projets créatifs réalisés avec Photoshop. Chaque visuel reflète ma maîtrise des outils graphiques et mon sens du détail.
      </p>
      <div class="gallery">
        <div
          v-for="(realisation, index) in realisations"
          :key="index"
          class="gallery-item"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <div class="image-wrapper">
            <img :src="realisation.image" :alt="realisation.title" />
            <div class="overlay">
              <h3>{{ realisation.title }}</h3>
              <p>{{ realisation.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjetGraph',
  data() {
    return {
      realisations: [
        {
          title: 'Affiche publicitaire',
          description: "Création d'une affiche pour un événement culturel.",
          image: require('@/assets/photoshop1.jpg')
        },
        {
          title: 'Montage photo',
          description: 'Fusion de plusieurs images pour un effet surréaliste.',
          image: require('@/assets/photoshop2.jpg')
        },
        {
          title: 'Retouche de portrait',
          description: 'Amélioration des couleurs et retouches de peau.',
          image: require('@/assets/photoshop3.jpg')
        }
      ]
    };
  }
};
</script>

<style scoped>
.section {
  padding: 60px 20px;
  background-color: #fff;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

.section-title {
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #f1efef;
}

.section-subtitle {
  font-size: 1.15rem;
  color: #666;
  margin-bottom: 40px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.gallery-item {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(218, 216, 216, 0.08);
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.image-wrapper:hover img {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(252, 250, 250, 0.6);
  color: #f3e6e6;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-wrapper:hover .overlay {
  opacity: 1;
}

.overlay h3 {
  font-size: 1.3rem;
  margin-bottom: 5px;
}

.overlay p {
  font-size: 0.95rem;
  color: #f5f1f1;
}
</style>