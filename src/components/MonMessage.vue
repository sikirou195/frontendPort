<template>
  <div v-if="visible" class="popup-overlay" @click.self="closePopup">
    <div class="popup">
      <button class="close-button" @click="closePopup">×</button>
      <h2>🙏 Veuillez  m'excuser</h2>
      <p>
        Je rencontres actuellement des problèmes d'hébergement coté serveur sur mon portfolio.
        Certaines fonctionnalités pourraient ne pas être disponibles momentanément.
      </p>
      <p>
        Merci de votre compréhension 💙
      </p>
      <button class="continue-button" @click="closePopup">Continuer</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MonMessage",
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.visible = true;
    }, 1000); // Affiche le popup après 1 seconde
  },
  methods: {
    closePopup() {
      this.visible = false;
    },
  },
};
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.popup {
  background: white;
  border-radius: 15px;
  padding: 30px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  position: relative;
  animation: fadeIn 0.6s ease;
}

h2 {
  margin-bottom: 15px;
  color: #007BFF;
}

p {
  font-size: 16px;
  color: #333;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  color: #888;
  cursor: pointer;
  transition: color 0.3s ease;
}

.close-button:hover {
  color: #000;
}

.continue-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007BFF;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.continue-button:hover {
  background-color: #0056b3;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
