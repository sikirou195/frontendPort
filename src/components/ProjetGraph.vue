<template>
  <section id="projet" class="documents-section">
    <div class="documents-container">
      <div class="section-header">
        <div class="header-decoration">
          <div class="header-icon">✨</div>
        </div>
        <h2>Mes Réalisations Photoshop</h2>
        <p class="subtitle">Designs professionnels réalisés avec Photoshop</p>
      </div>

      <div class="documents-grid">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="document-card"
          :style="{ animationDelay: index * 0.1 + 's' }"
        >
          <div class="document-preview">
            <img
              :src="image.src"
              class="preview-frame"
              :alt="'Affiche Photoshop ' + (index + 1)"
              @click="openModal(image.src, 'Affiche ' + (index + 1))"
              loading="lazy"
            />
            <div class="preview-overlay">
              <button class="preview-button" @click="openModal(image.src, 'Affiche ' + (index + 1))">
                <span class="preview-icon">👁️</span>
              </button>
            </div>
          </div>
          <div class="document-info">
            <h3>Affiche {{ index + 1 }}</h3>
            <div class="document-actions">
              <button class="action-button view" @click="openModal(image.src, 'Affiche ' + (index + 1))">
                <span class="button-icon">🔍</span>Voir
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Modal -->
  <div class="modal" :class="{ 'show-modal': isModalOpen }" @click="closeModal">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <h4>{{ modalTitle }}</h4>
        <span class="close-button" @click="closeModal">&times;</span>
      </div>
      <div class="modal-body">
        <img v-if="modalImage" :src="modalImage" class="modal-image" alt="Affiche en plein écran" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted, onMounted } from 'vue'

// ⚠️ Assure-toi que ces images existent bien dans src/assets/
import image1 from '@/assets/affiche.jpg'
import image2 from '@/assets/affiche3.jpg'
import image3 from '@/assets/affiche6.jpg'
import image4 from '@/assets/affiche2.jpg'
import image5 from '@/assets/affiche5.jpg'
import image6 from '@/assets/affiche7.jpg'
// Données des images avec titres
const images = [
  { src: image1 },
  { src: image2 },
  { src: image3 },
   { src: image4 },
  { src: image5 },
  { src: image6 }
]

// État de la modale
const isModalOpen = ref(false)
const modalImage = ref(null)
const modalTitle = ref("")

// Ouvre la modale avec l'image sélectionnée
function openModal(src, title) {
  modalImage.value = src
  modalTitle.value = title
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

// Ferme la modale
function closeModal() {
  isModalOpen.value = false
  setTimeout(() => {
    modalImage.value = null
    document.body.style.overflow = 'auto'
  }, 300)
}

// Animation sur le défilement
function checkVisibility() {
  const cards = document.querySelectorAll('.document-card')
  const windowHeight = window.innerHeight
  
  cards.forEach(card => {
    const rect = card.getBoundingClientRect()
    if (rect.top < windowHeight - 100) {
      card.classList.add('visible')
    }
  })
}

// Gère la touche "Échap" pour fermer
function handleEscapeKey(event) {
  if (event.key === 'Escape') {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('scroll', checkVisibility)
  checkVisibility() // Vérifier au chargement initial
})

window.addEventListener('keydown', handleEscapeKey)

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscapeKey)
  window.removeEventListener('scroll', checkVisibility)
})
</script>

<style scoped>
.documents-section {
  padding: 5rem 2rem;
  background-color: #f0f4f8;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(211, 211, 216, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.03) 0%, transparent 50%);
}

.documents-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
}

.header-decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.header-icon {
  font-size: 2.5rem;
  color: #4f46e5;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

h2 {
  font-size: 2.75rem;
  font-weight: 800;
  color: #1e293b;
  margin: 0.5rem 0;
  background: linear-gradient(90deg, #4f46e5, #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 10px rgba(79, 70, 229, 0.1);
}

.subtitle {
  font-size: 1.2rem;
  color: #64748b;
  font-weight: 400;
  max-width: 600px;
  margin: 0.5rem auto 0;
}

.documents-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5rem;
  justify-content: center;
}

.document-card {
  background-color: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04), 
              0 2px 8px rgba(0, 0, 0, 0.02);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: translateY(20px);
  opacity: 0;
  animation: fadeIn 0.5s forwards;
  animation-play-state: paused;
}

.document-card.visible {
  animation-play-state: running;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.document-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(79, 70, 229, 0.15), 
              0 10px 15px rgba(0, 0, 0, 0.05);
}

.document-preview {
  height: 250px;
  position: relative;
  overflow: hidden;
}

.preview-frame {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.document-card:hover .preview-frame {
  transform: scale(1.05);
}

.preview-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(30, 41, 59, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.document-card:hover .preview-overlay {
  opacity: 1;
}

.preview-button {
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: scale(0.8);
  transition: all 0.3s ease;
}

.preview-button:hover {
  transform: scale(1);
  background-color: white;
}

.preview-icon {
  font-size: 1.5rem;
}

.document-info {
  padding: 1.5rem;
}

.document-info h3 {
  margin: 0 0 1rem 0;
  font-size: 1.3rem;
  font-weight: 600;
  color: #1e293b;
}

.document-actions {
  display: flex;
  gap: 0.75rem;
}

.action-button {
  padding: 0.75rem 1rem;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.95rem;
  text-decoration: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.button-icon {
  margin-right: 8px;
  font-size: 1.1rem;
}

.action-button.view {
  background-color: #4f46e5;
  color: white;
  border: none;
  box-shadow: 0 4px 10px rgba(79, 70, 229, 0.2);
}

.action-button.view:hover {
  background-color: #4338ca;
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(79, 70, 229, 0.25);
}

.action-button.download {
  background-color: #f8fafc;
  color: #334155;
  border: 1px solid #e2e8f0;
}

.action-button.download:hover {
  background-color: #f1f5f9;
  color: #1e293b;
  transform: translateY(-2px);
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
  background-color: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.show-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
}

.modal-content {
  background-color: white;
  border-radius: 16px;
  width: 90%;
  max-width: 1000px;
  max-height: 90vh;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transform: scale(0.95);
  transition: transform 0.3s ease;
}

.show-modal .modal-content {
  transform: scale(1);
}

.modal-header {
  padding: 1.25rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}

.modal-header h4 {
  margin: 0;
  font-size: 1.25rem;
  color: #1e293b;
  font-weight: 600;
}

.close-button {
  font-size: 1.75rem;
  color: #64748b;
  cursor: pointer;
  line-height: 1;
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.close-button:hover {
  color: #1e293b;
  background-color: #f1f5f9;
}

.modal-body {
  flex: 1;
  overflow: hidden;
  background-color: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.modal-image {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

/* Responsive */
@media (max-width: 768px) {
  .documents-section {
    padding: 3rem 1rem;
  }
  
  h2 {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
  }
  
  .documents-grid {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1.5rem;
  }
  
  .document-preview {
    height: 200px;
  }
  
  .modal-content {
    width: 95%;
    max-height: 95vh;
  }
  
  .action-button {
    padding: 0.6rem 0.8rem;
    font-size: 0.9rem;
  }
}

@media (min-width: 1400px) {
  .documents-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>