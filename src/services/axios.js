// src/services/axios.js
import axiosInstance from './axiosInstance';

// Exemple de fonction pour envoyer une requête POST à /etudiant
export const createEtudiant = async (etudiantData) => {
  try {
    const response = await axiosInstance.post('/contact', etudiantData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création de l’étudiant :', error);
    throw error;
  }
};

// Exemple de fonction pour récupérer la liste des étudiants
export const getEtudiants = async () => {
  try {
    const response = await axiosInstance.get('/contact');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des étudiants :', error);
    throw error;
  }
};
