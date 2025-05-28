<template>
    <!-- Section CV et Lettre -->
    <section class="documents-section">
      <div class="documents-container">
        <div class="section-header">
          <div class="header-decoration">
            <div class="header-line"></div>
            <div class="header-icon">📄</div>
            <div class="header-line"></div>
          </div>
          <h2>Mon CV & Lettre de Motivation</h2>
          <p class="subtitle">Documents professionnels</p>
        </div>
  
        <div class="documents-grid">
          <!-- CV Card -->
          <div class="document-card">
            <div class="document-header">
              <div class="document-icon">📄</div>
              <h3>Curriculum Vitae</h3>
            </div>
            <div class="document-preview">
              <iframe src="/files/CV_OTOROU_Sikirou.pdf" class="preview-frame" title="CV"></iframe>
            </div>
            <div class="document-actions">
              <button class="action-button view" @click="openCVModal">Voir en plein écran</button>
              <a href="/files/CV_OTOROU_Sikirou.pdf" download class="action-button download">Télécharger</a>
            </div>
          </div>
  
          <!-- Lettre de Motivation Card -->
          <div class="document-card" id="lettre-motivation-card">
            <div class="document-header">
              <div class="document-icon">📝</div>
              <h3>Lettre de Motivation</h3>
            </div>
            <div class="document-preview">
              <iframe src="/files/LM_OTOROU_Sikirou.pdf" class="preview-frame" title="Lettre de motivation"></iframe>
            </div>
            <div class="document-actions">
              <button class="action-button view" @click="openLettreModal">Voir en plein écran</button>
              <a href="/files/LM_OTOROU_Sikirou.pdf" download class="action-button download">Télécharger</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Modal pour le CV -->
    <div class="modal" :class="{ 'show-modal': isModalCVOpen }">
      <div class="modal-content">
        <div class="modal-header">
          <h4>Mon CV</h4>
          <span class="close-button" @click="closeModal">&times;</span>
        </div>
        <div class="modal-body">
          <iframe v-if="isModalCVOpen" src="/files/CV_OTOROU_Sikirou.pdf" class="modal-iframe" title="CV complet"></iframe>
        </div>
      </div>
    </div>
  
    <!-- Modal pour la lettre de motivation -->
    <div class="modal" :class="{ 'show-modal': isModalLettreOpen }">
      <div class="modal-content">
        <div class="modal-header">
          <h4>Ma Lettre de Motivation</h4>
          <span class="close-button" @click="closeModal">&times;</span>
        </div>
        <div class="modal-body">
          <iframe v-if="isModalLettreOpen" src="/files/LM_OTOROU_Sikirou.pdf" class="modal-iframe" title="Lettre complète"></iframe>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // États pour les modals
  const isModalCVOpen = ref(false);
  const isModalLettreOpen = ref(false);
  
  // Fonctions pour ouvrir les modals
  function openCVModal() {
    isModalCVOpen.value = true;
    document.body.style.overflow = 'hidden'; // Empêcher le défilement du corps de la page
  }
  
  function openLettreModal() {
    isModalLettreOpen.value = true;
    document.body.style.overflow = 'hidden'; // Empêcher le défilement du corps de la page
  }
  
  // Fonction pour fermer n'importe quel modal ouvert
  function closeModal() {
    isModalCVOpen.value = false;
    isModalLettreOpen.value = false;
    document.body.style.overflow = 'auto'; // Restaurer le défilement du corps de la page
  }
  
  // Fermer le modal en cliquant sur la touche Échap
  function handleEscapeKey(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
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
  .documents-section {
    padding: 4rem 2rem;
    background-color: #f0f2f5;
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
    background-color: white;
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
    color: #edeff1;
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
  