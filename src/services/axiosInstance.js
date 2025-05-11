// Dans un fichier api.js ou directement dans votre composant
import axios from 'axios';

// Créer une instance axios configurée
const api = axios.create({
  baseURL: 'https://backendport-tsol.onrender.com',
  timeout: 30000, // 30 secondes pour tenir compte des services Render en veille
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});
// Exemple pour envoyer un message ou créer un contact
export async function createContact(contactData) {
  try {
    const response = await api.post('/portofolio', contactData);
    return response.data;
  } catch (error) {
    console.error('Échec de la création du contact:', error);
    throw error;
  }
}

// Intercepteur pour les requêtes
api.interceptors.request.use(config => {
  console.log('Requête sortante:', {
    url: config.url,
    method: config.method,
    headers: config.headers,
    data: config.data
  });
  return config;
}, error => {
  console.error('Erreur de requête:', error);
  return Promise.reject(error);
});

// Intercepteur pour les réponses
api.interceptors.response.use(response => {
  console.log('Réponse reçue:', {
    status: response.status,
    headers: response.headers,
    data: response.data
  });
  return response;
}, error => {
  console.error('Erreur de réponse:', error);
  
  // Informations détaillées sur les erreurs CORS et autres
  if (error.response) {
    console.error('Données d\'erreur:', error.response.data);
    console.error('Statut:', error.response.status);
    console.error('En-têtes:', error.response.headers);
  } else if (error.request) {
    console.error('Pas de réponse reçue. La requête a été envoyée mais aucune réponse n\'a été reçue.');
    console.error('Détails de la requête:', error.request);
    
    // Vérifier spécifiquement les erreurs CORS
    if (error.message.includes('CORS')) {
      console.error('ERREUR CORS DÉTECTÉE - Vérifiez la configuration CORS de votre serveur');
    }
  } else {
    console.error('Erreur lors de la configuration de la requête:', error.message);
  }
  
  return Promise.reject(error);
});

// Exemple d'utilisation
export async function fetchContacts() {
  try {
    const response = await api.get('/portofolio');
    return response.data;
  } catch (error) {
    console.error('Échec de récupération des contacts:', error);
    throw error;
  }
}

export async function deleteContact(id) {
  try {
    const response = await api.delete(`/portofolio/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Échec de suppression du contact ${id}:`, error);
    throw error;
  }
}