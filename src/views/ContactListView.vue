<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// URL de base de l'API avec possibilité d'utiliser une variable d'environnement
const API_URL = import.meta.env.VITE_API_URL || 'https://backendport-tsol.onrender.com';

// État pour les contacts et le chargement
const contacts = ref([]);
const isLoading = ref(true);
const error = ref(null);

// Configuration axios pour améliorer la fiabilité
const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  timeout: 15000 // 15 secondes pour tenir compte des services Render qui peuvent être en veille
};

// Fonction pour récupérer les contacts
const fetchContacts = async () => {
  isLoading.value = true;
  error.value = null;
  
  try {
    console.log('Récupération des contacts depuis:', `${API_URL}/portofolio`);
    const response = await axios.get(`${API_URL}/portofolio`, axiosConfig);
    console.log('Données reçues:', response.data);
    contacts.value = response.data;
  } catch (err) {
    handleError(err, 'chargement des contacts');
  } finally {
    isLoading.value = false;
  }
};

// Fonction pour supprimer un contact
const deleteContact = async (id) => {
  if (!confirm("Voulez-vous vraiment supprimer ce message ?")) return;
  
  try {
    console.log('Suppression du contact:', id);
    // Correction de la syntaxe pour l'URL de suppression
    await axios.delete(`${API_URL}/portofolio/${id}`, axiosConfig);
    console.log('Contact supprimé avec succès');
    
    // Mettre à jour l'état local après suppression
    contacts.value = contacts.value.filter(contact => contact.id !== id);
  } catch (err) {
    handleError(err, 'suppression du contact');
  }
};

// Fonction de gestion des erreurs améliorée
const handleError = (error, action) => {
  console.error(`Erreur lors de la ${action}:`, error);
  
  if (error.response) {
    // Le serveur a répondu avec un code d'erreur
    console.error('Détails de la réponse serveur:', error.response.data);
    console.error('Code détat HTTP:', error.response.status);
    error.value = `Erreur serveur (${error.response.status}): ${error.response.data.message || 'Veuillez réessayer.'}`;
  } else if (error.request) {
    // La requête a été envoyée mais pas de réponse reçue
    console.error('Aucune réponse reçue:', error.request);
    error.value = 'Le serveur ne répond pas. Il est possible quil soit en cours de démarrage (veille Render) ou indisponible.';
  } else {
    // Erreur lors de la configuration de la requête
    console.error('Erreur de requête:', error.message);
    error.value = `Erreur: ${error.message}`;
  }
};

// Charger les contacts au montage du composant
onMounted(() => {
  fetchContacts();
});
</script>

<template>
  <div class="contacts-container">
    <h2 class="contacts-title">Messages reçus</h2>
    
    <!-- États de chargement et d'erreur -->
    <div v-if="isLoading" class="loading-state">
      <p>Chargement des messages...</p>
      <div class="loading-spinner"></div>
    </div>
    
    <div v-else-if="error" class="error-message">
      <p>{{ error }}</p>
      <button @click="fetchContacts" class="retry-button">Réessayer</button>
    </div>
    
    <!-- Liste des contacts -->
    <div v-else-if="contacts.length > 0" class="contacts-list">
      <div v-for="contact in contacts" :key="contact.id" class="contact-card">
        <div class="contact-header">
          <h3>{{ contact.nom }}</h3>
          <span class="contact-email">{{ contact.email }}</span>
        </div>
        
        <div class="contact-content">
          <h4>{{ contact.sujet }}</h4>
          <p>{{ contact.message }}</p>
        </div>
        
        <div class="contact-actions">
          <button @click="deleteContact(contact.id)" class="delete-button">
            Supprimer
          </button>
        </div>
      </div>
    </div>
    
    <!-- Message si aucun contact -->
    <div v-else class="no-contacts">
      <p>Aucun message reçu pour le moment.</p>
    </div>
  </div>
</template>

<style scoped>
.contacts-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

.contacts-title {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #333;
  border-bottom: 2px solid #673ab7;
  padding-bottom: 0.5rem;
}

.loading-state {
  text-align: center;
  padding: 2rem;
}

.loading-spinner {
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 4px solid rgba(103, 58, 183, 0.1);
  border-radius: 50%;
  border-top-color: #673ab7;
  animation: spin 1s linear infinite;
  margin-top: 1rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.error-message {
  background-color: #ffebee;
  color: #c62828;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  border: 1px solid #ef9a9a;
}

.retry-button {
  background-color: #673ab7;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-top: 0.5rem;
  cursor: pointer;
}

.contacts-list {
  display: grid;
  gap: 1.5rem;
}

.contact-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}

.contact-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.contact-header {
  padding: 1rem;
  background-color: #f5f5f5;
  border-bottom: 1px solid #eee;
}

.contact-header h3 {
  margin: 0;
  color: #333;
}

.contact-email {
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.25rem;
  display: block;
}

.contact-content {
  padding: 1rem;
}

.contact-content h4 {
  margin-top: 0;
  color: #444;
}

.contact-content p {
  color: #555;
  line-height: 1.5;
}

.contact-actions {
  display: flex;
  justify-content: flex-end;
  padding: 0.75rem 1rem;
  background-color: #f9f9f9;
  border-top: 1px solid #eee;
}

.delete-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.delete-button:hover {
  background-color: #d32f2f;
}

.no-contacts {
  text-align: center;
  color: #666;
  padding: 3rem 1rem;
  background-color: #f5f5f5;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .contacts-title {
    font-size: 1.5rem;
  }
  
  .contact-header {
    padding: 0.75rem;
  }
  
  .contact-content {
    padding: 0.75rem;
  }
}
</style>