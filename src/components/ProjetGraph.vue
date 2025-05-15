<template>
  <section class="documents-section">
    <div class="documents-container">
      <div class="section-header">
        <div class="header-decoration">
          <div class="header-line"></div>
          <div class="header-icon">🎨</div>
          <div class="header-line"></div>
        </div>
        <h2>Mes Réalisations Photoshop</h2>
        <p class="subtitle">Designs professionnels réalisés avec Photoshop</p>
      </div>

      <div class="documents-grid">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="document-card"
        >
          <div class="document-header">
            <div class="document-icon">🖼️</div>
            <h3>Affiche {{ index + 1 }}</h3>
          </div>
          <div class="document-preview">
            <img
              :src="image.src"
              class="preview-frame"
              :alt="'Affiche Photoshop ' + (index + 1)"
              @click="openModal(image.src)"
              style="object-fit: cover"
            />
          </div>
          <div class="document-actions">
            <button class="action-button view" @click="openModal(image.src)">
              Voir en plein écran
            </button>
            <a :href="image.src" download class="action-button download">
              Télécharger
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Modal -->
  <div class="modal" :class="{ 'show-modal': isModalOpen }">
    <div class="modal-content">
      <div class="modal-header">
        <h4>Affiche en plein écran</h4>
        <span class="close-button" @click="closeModal">&times;</span>
      </div>
      <div class="modal-body">
        <img v-if="modalImage" :src="modalImage" class="modal-iframe" alt="Affiche" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isModalOpen = ref(false)
const modalImage = ref(null)

// Remplace les chemins ici par les bons fichiers dans /public/assets/
const images = ref([
  { src: '/assets/sikirou1.jpg' },
  { src: '/assets/sikirou.jpg' },
  { src: '/assets/photoshop3.jpg' }
])

function openModal(src) {
  modalImage.value = src
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  modalImage.value = null
  isModalOpen.value = false
  document.body.style.overflow = 'auto'
}

function handleEscapeKey(event) {
  if (event.key === 'Escape') {
    closeModal()
  }
}

window.addEventListener('keydown', handleEscapeKey)
import { onUnmounted } from 'vue'
onUnmounted(() => {
  window.removeEventListener('keydown', handleEscapeKey)
})
</script>

<style scoped>
.documents-section {
    padding: 4rem 2rem;
    background-color: #f9fafb;
  }
  
  .documents-container {
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
    background: linear-gradient(90deg, transparent, #4f46e5, transparent);
  }
  
  .header-icon {
    font-size: 1.75rem;
    margin: 0 1rem;
    color: #4f46e5;
  }
  
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e293b;
    margin: 0.5rem 0;
  }
  
  .subtitle {
    font-size: 1.1rem;
    color: #64748b;
    font-weight: 400;
  }
  
  .documents-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    justify-content: center;
  }
  
  .document-card {
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    max-width: 500px;
    margin: 0 auto; /* Centre les cartes */
  }
  
  .document-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
  
  .document-header {
    padding: 1.5rem;
    display: flex;
    align-items: center;
    background: linear-gradient(to right, #4f46e5, #6366f1);
    color: white;
  }
  
  .document-icon {
    font-size: 1.75rem;
    margin-right: 1rem;
    background-color: rgba(255, 255, 255, 0.2);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .document-header h3 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
  }
  
  .document-preview {
    height: 300px;
    border-bottom: 1px solid #e2e8f0;
    position: relative;
  }
  
  .preview-frame {
    width: 100%;
    height: 100%;
    border: none;
  }
  
  .document-actions {
    display: flex;
    padding: 1rem;
    gap: 1rem;
    justify-content: center;
  }
  
  .action-button {
    padding: 0.75rem 1.25rem;
    border-radius: 8px;
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
  
  .action-button.view {
    background-color: #4f46e5;
    color: white;
    border: none;
  }
  
  .action-button.view:hover {
    background-color: #4338ca;
  }
  
  .action-button.download {
    background-color: #f8fafc;
    color: #334155;
    border: 1px solid #e2e8f0;
  }
  
  .action-button.download:hover {
    background-color: #f1f5f9;
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
  
  .modal-header {
    padding: 1rem 1.5rem;
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
  
  .modal-body {
    flex: 1;
    overflow: hidden;
  }
  
  .modal-iframe {
    width: 100%;
    height: calc(90vh - 60px); /* hauteur modale - hauteur header */
    border: none;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .documents-section {
      padding: 3rem 1rem;
    }
    
    h2 {
      font-size: 1.75rem;
    }
    
    .documents-grid {
      grid-template-columns: 1fr;
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

  
