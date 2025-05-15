<template>
  <!-- Section Réalisations Photoshop -->
  <section class="photoshop-section">
    <div class="container">
      <div class="section-header">
        <div class="header-decoration">
          <div class="header-line"></div>
          <div class="header-icon">🎨</div>
          <div class="header-line"></div>
        </div>
        <h2>Mes Réalisations Photoshop</h2>
        <p class="subtitle">Portfolio créatif</p>
      </div>

      <div class="gallery-grid">
        <!-- Gallerie de projets Photoshop -->
        <div v-for="(projet, index) in projetsPhotoshop" :key="index" class="gallery-item">
          <div class="gallery-image-container">
            <img :src="projet.image" :alt="projet.titre" class="gallery-image" />
            <div class="gallery-overlay">
              <button class="zoom-button" @click="openPhotoModal(index)">
                <span class="zoom-icon">🔍</span>
              </button>
            </div>
          </div>
          <div class="gallery-caption">
            <h4>{{ projet.titre }}</h4>
            <p>{{ projet.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Modal pour les photos Photoshop -->
  <div class="modal" :class="{ 'show-modal': isModalPhotoOpen }">
    <div class="modal-content photo-modal-content">
      <div class="modal-header">
        <h4>{{ selectedProject ? selectedProject.titre : '' }}</h4>
        <span class="close-button" @click="closeModal">&times;</span>
      </div>
      <div class="modal-body photo-modal-body">
        <div class="navigation-buttons">
          <button class="nav-button prev-button" @click="prevProject">◀</button>
          <img v-if="selectedProject" :src="selectedProject.image" :alt="selectedProject.titre" class="modal-photo" />
          <button class="nav-button next-button" @click="nextProject">▶</button>
        </div>
        <div class="photo-details">
          <p class="photo-description">{{ selectedProject ? selectedProject.description : '' }}</p>
          <div class="photo-tags">
            <span v-for="(tag, i) in selectedProject ? selectedProject.tags : []" :key="i" class="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// États pour le modal
const isModalPhotoOpen = ref(false);
const selectedProject = ref(null);

// Liste des projets Photoshop
const projetsPhotoshop = ref([
  {
    titre: "Manipulation Créative",
    description: "Composition surréaliste combinant paysage urbain et nature",
    image: "/files/photoshop/projet1.jpg",
    tags: ["Composition", "Surréalisme", "Montage photo"]
  },
  {
    titre: "Retouche Portrait",
    description: "Retouche professionnelle pour photo de mode",
    image: "/files/photoshop/projet2.jpg",
    tags: ["Retouche", "Mode", "Portrait"]
  },
  {
    titre: "Design Publicitaire",
    description: "Création d'une bannière publicitaire pour une marque de cosmétiques",
    image: "/files/photoshop/projet3.jpg",
    tags: ["Publicité", "Design graphique", "Branding"]
  },
  {
    titre: "Illustration Digitale",
    description: "Illustration combinant techniques traditionnelles et retouche numérique",
    image: "/files/photoshop/projet4.jpg",
    tags: ["Illustration", "Digital Art", "Mixte"]
  },
  {
    titre: "Photo Composite",
    description: "Assemblage de plusieurs photos pour créer une scène fantastique",
    image: "/files/photoshop/projet5.jpg",
    tags: ["Composite", "Fantastique", "Manipulation"]
  },
  {
    titre: "Design Web",
    description: "Maquette d'interface pour un site e-commerce",
    image: "/files/photoshop/projet6.jpg",
    tags: ["UI Design", "Web", "E-commerce"]
  }
]);

// Fonction pour ouvrir le modal photo
function openPhotoModal(index) {
  selectedProject.value = projetsPhotoshop.value[index];
  isModalPhotoOpen.value = true;
  document.body.style.overflow = 'hidden';
}

// Fonction pour fermer le modal
function closeModal() {
  isModalPhotoOpen.value = false;
  document.body.style.overflow = 'auto'; // Restaurer le défilement du corps de la page
}

// Fermer le modal en cliquant sur la touche Échap
function handleEscapeKey(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

// Navigation entre les projets dans le modal
function nextProject() {
  if (!selectedProject.value) return;
  const currentIndex = projetsPhotoshop.value.findIndex(p => p.titre === selectedProject.value.titre);
  const nextIndex = (currentIndex + 1) % projetsPhotoshop.value.length;
  selectedProject.value = projetsPhotoshop.value[nextIndex];
}

function prevProject() {
  if (!selectedProject.value) return;
  const currentIndex = projetsPhotoshop.value.findIndex(p => p.titre === selectedProject.value.titre);
  const prevIndex = (currentIndex - 1 + projetsPhotoshop.value.length) % projetsPhotoshop.value.length;
  selectedProject.value = projetsPhotoshop.value[prevIndex];
}

// Ajoute l'écouteur d'événements pour la touche Échap
window.addEventListener('keydown', handleEscapeKey);

// Nettoyage de l'écouteur d'événements lors du démontage du composant
import { onUnmounted } from 'vue';
onUnmounted(() => {
  window.removeEventListener('keydown', handleEscapeKey);
});
</script>


<style scoped>
.photoshop-section {
  padding: 4rem 2rem;
  background-color: #1e1e24;
  color: #f9fafb;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.header-decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.header-line {
  height: 2px;
  width: 80px;
  background: linear-gradient(90deg, transparent, #f43f5e, transparent);
}

.header-icon {
  font-size: 1.75rem;
  margin: 0 1rem;
  color: #f43f5e;
}

h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #f9fafb;
  margin: 0.5rem 0;
}

.subtitle {
  font-size: 1.1rem;
  color: #cbd5e1;
  font-weight: 400;
}

/* Styles pour la galerie Photoshop */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.gallery-item {
  background-color: #262631;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.gallery-image-container {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-image-container:hover .gallery-overlay {
  opacity: 1;
}

.gallery-image-container:hover .gallery-image {
  transform: scale(1.05);
}

.zoom-button {
  background-color: rgba(244, 63, 94, 0.85);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.zoom-button:hover {
  background-color: #f43f5e;
}

.zoom-icon {
  font-size: 1.25rem;
  color: white;
}

.gallery-caption {
  padding: 1rem;
}

.gallery-caption h4 {
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #f1f5f9;
}

.gallery-caption p {
  margin: 0;
  font-size: 0.9rem;
  color: #94a3b8;
  line-height: 1.5;
}

/* Styles pour la modal */
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.show-modal {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: #262631;
  border-radius: 12px;
  width: 90%;
  max-width: 1200px;
  max-height: 90vh;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-header {
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e1e24;
  border-bottom: 1px solid #3f3f46;
}

.modal-header h4 {
  margin: 0;
  font-size: 1.25rem;
  color: #f1f5f9;
}

.close-button {
  font-size: 1.75rem;
  color: #64748b;
  cursor: pointer;
  line-height: 1;
}

.close-button:hover {
  color: #f9fafb;
}

.modal-body {
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
}

.photo-modal-body {
  display: flex;
  flex-direction: column;
}

.navigation-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.modal-photo {
  max-width: 100%;
  max-height: 60vh;
  object-fit: contain;
  margin: 0 auto;
  display: block;
  border-radius: 4px;
}

.nav-button {
  background-color: rgba(244, 63, 94, 0.85);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  transition: background-color 0.2s ease;
}

.nav-button:hover {
  background-color: #f43f5e;
}

.photo-details {
  margin-top: 1.5rem;
}

.photo-description {
  color: #cbd5e1;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.photo-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background-color: #3f3f46;
  color: #e2e8f0;
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Responsive */
@media (max-width: 768px) {
  .photoshop-section {
    padding: 3rem 1rem;
  }
  
  h2 {
    font-size: 1.75rem;
  }
  
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
  
  .header-line {
    width: 60px;
  }
  
  .modal-content {
    width: 95%;
  }
}
gallery-image {
  transform: scale(1.05);
}

.zoom-button {
  background-color: rgba(244, 63, 94, 0.85);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.zoom-button:hover {
  background-color: #f43f5e;
}

.zoom-icon {
  font-size: 1.25rem;
  color: white;
}

.gallery-caption {
  padding: 1rem;
}

.gallery-caption h4 {
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #f1f5f9;
}

.gallery-caption p {
  margin: 0;
  font-size: 0.9rem;
  color: #94a3b8;
  line-height: 1.5;
}

/* Styles pour la modal */
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.show-modal {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: white;
  border-radius: 12px;
  width: 90%;
  max-width: 1000px;
  max-height: 90vh;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.photo-modal-content {
  background-color: #262631;
  max-width: 1200px;
}

.modal-header {
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}

.photo-modal-content .modal-header {
  background-color: #1e1e24;
  border-bottom: 1px solid #3f3f46;
}

.modal-header h4 {
  margin: 0;
  font-size: 1.25rem;
  color: #1e293b;
}

.photo-modal-content .modal-header h4 {
  color: #f1f5f9;
}

.close-button {
  font-size: 1.75rem;
  color: #64748b;
  cursor: pointer;
  line-height: 1;
}

.close-button:hover {
  color: #1e293b;
}

.photo-modal-content .close-button:hover {
  color: #f9fafb;
}

.modal-body {
  flex: 1;
  overflow: hidden;
}

.photo-modal-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.modal-iframe {
  width: 100%;
  height: calc(90vh - 60px); /* hauteur modale - hauteur header */
  border: none;
}

.modal-photo {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  margin: 0 auto;
  display: block;
  border-radius: 4px;
}

.photo-details {
  margin-top: 1.5rem;
}

.photo-description {
  color: #cbd5e1;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.photo-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background-color: #3f3f46;
  color: #e2e8f0;
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Responsive */
@media (max-width: 768px) {
  .documents-section, .photoshop-section {
    padding: 3rem 1rem;
  }
  
  h2 {
    font-size: 1.75rem;
  }
  
  .documents-grid {
    grid-template-columns: 1fr;
  }
  
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
  
  .document-preview {
    height: 250px;
  }
  
  .modal-content {
    width: 95%;
    max-height: 95vh;
  }
  
  .header-line {
    width: 60px;
  }
  }
</style>

