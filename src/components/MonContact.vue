<template>
  <section class="contact-section">
    <div class="contact-card">
      <h3 class="contact-title">📞 Informations de Contact</h3>
      <ul class="contact-list">
        <li class="contact-item">
          <div class="icon"><i class="fas fa-map-marker-alt"></i></div>
          <span>Abomey Calavi, Bénin</span>
        </li>
        <li class="contact-item">
          <div class="icon"><i class="fas fa-envelope"></i></div>
          <span>sikirou195@gmail.com</span>
        </li>
        <li class="contact-item">
          <div class="icon"><i class="fas fa-phone"></i></div>
          <span>+229 01 67 77 97 71</span>
        </li>
        <li class="contact-item">
          <div class="icon"><i class="fas fa-globe"></i></div>
          <span>Whatsapp: +229 67 77 97 71</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactInfo',
};
</script>

<style scoped>
.contact-section {
  background-color: #f7f9fc;
  padding: 60px 20px;
  display: flex;
  justify-content: center;
}

.contact-card {
  background-color: #fff;
  border-radius: 16px;
  padding: 40px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-4px);
}

.contact-title {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #007BFF;
  text-align: center;
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 16px;
  color: #333;
  transition: color 0.3s ease;
}

.icon {
  width: 42px;
  height: 42px;
  background-color: #007BFF;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  font-size: 18px;
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
}

.contact-item span {
  word-break: break-word;
}
</style>
