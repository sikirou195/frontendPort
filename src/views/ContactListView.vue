<template>
    <div class="contact-list-container">
      <div class="header-section">
        <div class="header-decoration">
          <div class="header-line"></div>
          <div class="header-icon">✉️</div>
          <div class="header-line"></div>
        </div>
        <h1>Messages reçus</h1>
        <p class="subtitle">Centre de messagerie</p>
      </div>
      
      <div v-if="contacts.length === 0" class="empty-state">
        <div class="empty-animation">
          <div class="envelope">📩</div>
        </div>
        <p>Aucun message pour le moment.</p>
        <p class="empty-subtitle">Les nouveaux messages apparaîtront ici</p>
      </div>
      
      <div v-else class="messages-container">
        <div class="message-card" v-for="contact in contacts" :key="contact.id">
          <div class="message-header">
            <div class="avatar">{{ contact.nom.charAt(0).toUpperCase() }}</div>
            <div class="header-info">
              <h3>{{ contact.nom }}</h3>
              <span class="timestamp">Aujourd'hui</span>
            </div>
          </div>
          
          <div class="message-body">
            <div class="info-item">
              <div class="info-icon">✉️</div>
              <div class="info-content">
                <span class="info-label">Email</span>
                <span class="info-value">{{ contact.email }}</span>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">📌</div>
              <div class="info-content">
                <span class="info-label">Sujet</span>
                <span class="info-value">{{ contact.sujet }}</span>
              </div>
            </div>
            
            <div class="message-content">
              <div class="message-icon">💬</div>
              <div class="message-text-container">
                <span class="message-label">Message</span>
                <p class="message-text">{{ contact.message }}</p>
              </div>
            </div>
          </div>
          
          <div class="message-footer">
            <button class="action-button delete" @click="deleteContact(contact.id)">Supprimer</button>

            <div class="action-group">
              <button class="action-button reply">Répondre</button>
              <button class="action-button archive">Archiver</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const contacts = ref([]);
  
  const fetchContacts = async () => {
    try {
      const response = await axios.get('https://ton-backend-railway-url/portofolio');
      contacts.value = response.data;
    } catch (error) {
      console.error("Erreur lors du chargement des contacts :", error);
    }
  };
  const deleteContact = async (id) => {
  if (confirm("Voulez-vous vraiment supprimer ce message ?")) {
    try {
      await axios.delete(`'https://ton-backend-railway-url/portofolio'/${id}`);
      contacts.value = contacts.value.filter(contact => contact.id !== id);
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  }
};

  
  onMounted(() => {
    fetchContacts();
  });
  </script>
  
  <style scoped>
  .contact-list-container {
    max-width: 900px;
    margin: 3rem auto;
    padding: 2rem;
    font-family: 'Poppins', 'Segoe UI', sans-serif;
    color: #2d3748;
    text-align: center;
  }
  
  .header-section {
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
    background: linear-gradient(90deg, transparent, #805ad5, transparent);
  }
  
  .header-icon {
    font-size: 1.5rem;
    margin: 0 1rem;
  }
  
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #4a5568;
    margin: 0.5rem 0;
    letter-spacing: -0.5px;
  }
  
  .subtitle {
    font-size: 1.1rem;
    color: #718096;
    font-weight: 400;
  }
  
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    background-color: #f7fafc;
    border-radius: 1rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  }
  
  .empty-animation {
    margin-bottom: 2rem;
  }
  
  .envelope {
    font-size: 5rem;
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
  
  .empty-state p {
    font-size: 1.25rem;
    color: #4a5568;
    font-weight: 600;
    margin: 0.5rem 0;
  }
  
  .empty-subtitle {
    font-size: 1rem !important;
    color: #a0aec0 !important;
    font-weight: 400 !important;
  }
  
  .messages-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
  
  .message-card {
    width: 100%;
    max-width: 650px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
    background-color: #fff;
    transition: all 0.3s ease;
    text-align: left;
  }
  
  .message-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }
  
  .message-header {
    display: flex;
    align-items: center;
    padding: 1.5rem;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    color: white;
  }
  
  .avatar {
    width: 50px;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.5rem;
    margin-right: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }
  
  .header-info {
    flex: 1;
  }
  
  .message-header h3 {
    margin: 0;
    font-weight: 600;
    font-size: 1.3rem;
  }
  
  .timestamp {
    font-size: 0.85rem;
    opacity: 0.8;
  }
  
  .message-body {
    padding: 1.5rem;
    background-color: #fff;
  }
  
  .info-item {
    display: flex;
    margin-bottom: 1.25rem;
    align-items: flex-start;
  }
  
  .info-icon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #EBF4FF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    flex-shrink: 0;
  }
  
  .info-content {
    display: flex;
    flex-direction: column;
  }
  
  .info-label {
    font-size: 0.85rem;
    color: #718096;
    font-weight: 500;
    margin-bottom: 0.25rem;
  }
  
  .info-value {
    font-size: 1rem;
    color: #2d3748;
    word-break: break-word;
  }
  
  .message-content {
    display: flex;
    margin-top: 1.5rem;
    background-color: #f8fafc;
    border-radius: 12px;
    padding: 1.25rem;
  }
  
  .message-icon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #FEF5FF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    flex-shrink: 0;
  }
  
  .message-text-container {
    flex: 1;
  }
  
  .message-label {
    display: block;
    font-size: 0.85rem;
    color: #718096;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  
  .message-text {
    margin: 0;
    line-height: 1.6;
    color: #4a5568;
    font-size: 1rem;
  }
  
  .message-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background-color: #f8fafc;
    border-top: 1px solid #edf2f7;
  }
  
  .action-group {
    display: flex;
  }
  
  .action-button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-left: 0.75rem;
  }
  
  .reply {
    background-color: #667eea;
    color: white;
  }
  
  .reply:hover {
    background-color: #5a67d8;
  }
  
  .archive {
    background-color: #edf2f7;
    color: #4a5568;
  }
  
  .archive:hover {
    background-color: #e2e8f0;
  }
  
  .delete {
    background-color: #FED7D7;
    color: #E53E3E;
    margin-left: 0;
  }
  
  .delete:hover {
    background-color: #FEB2B2;
  }
  
  @media (max-width: 768px) {
    .contact-list-container {
      padding: 1.5rem;
      margin: 1.5rem auto;
    }
    
    h1 {
      font-size: 2rem;
    }
    
    .message-card {
      max-width: 100%;
    }
    
    .header-line {
      width: 50px;
    }
  }
  </style>