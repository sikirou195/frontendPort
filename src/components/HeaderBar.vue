<!-- Header.vue -->
<template>
    <header class="fixed w-full bg-white shadow-lg z-50">
      <div class="container nav-container">
        <a href="" class="logo">Mon<span>Portfolio</span></a>
       
        <nav>
          
          <ul class="nav-menu" :class="{ active: isMenuActive }">
            <li v-for="item in navItems" :key="item.id">
              <a
                :href="item.link"
                class="nav-link"
                :class="{ active: activeSection === item.id }"
                @click.prevent="setActiveSection(item.id)"
              >{{ item.text }}</a>
            </li>
          </ul>
          <button class="nav-toggle" @click="toggleMenu">
            <i class="fas" :class="isMenuActive ? 'fa-times' : 'fa-bars'"></i>
          </button>
        </nav>
      </div>
    </header>
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue'

// Navigation
const isMenuActive = ref(false)
const activeSection = ref('home')
const navItems = ref([
  { id: 'home', text: 'Accueil', link: '#home' },
  { id: 'about', text: 'À Propos', link: '#about' },
  { id: 'skills', text: 'Compétences', link: '#skills' },
  { id: 'projects', text: 'Projets', link: '#projects' },
  { id: 'projet', text: 'projet Graphisme', link: '#projet' },
  { id: 'lettre-motivation-card', text: 'Mon CV et LM', link: '#lettre-motivation-card' },
  { id: 'education', text: 'Parcours', link: '#education' },
  { id: 'contact', text: 'Contact', link: '#contact' }
])

const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value
}

const setActiveSection = (section) => {
  activeSection.value = section
  isMenuActive.value = false

  // Gestion du défilement fluide vers la section
  const sectionElement = document.getElementById(section)
  if (sectionElement) {
    sectionElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start', // Aligne la section en haut de la fenêtre
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 100
    document.querySelectorAll('section').forEach((sec) => {
      const top = sec.offsetTop
      if (scrollPos >= top) activeSection.value = sec.id
    })
  })
})
</script>

<style>
.btn-retour {
  display: inline-block;
  margin: 10px 0;
  padding: 8px 16px;
  background-color: #f2f5f8;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}
.btn-retour:hover {
  background-color: #f2f4f8;
}

:root {
  --primary-color: #3498db;
  --secondary-color: #2980b9;
  --dark-color: #2c3e50;
  --light-color: #ecf0f1;
  --success-color: #2ecc71;
  --text-color: #333;
  --border-radius: 4px;
  --box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  --transition: all 0.3s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: #f9f9f9;
}

a {
  color: var(--primary-color);
  text-decoration: none;
  transition: var(--transition);
}

a:hover {
  color: var(--secondary-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: white;
  border-radius: var(--border-radius);
  border: none;
  cursor: pointer;
  transition: var(--transition);
  font-weight: 500;
}

.btn:hover {
  background-color: var(--secondary-color);
  transform: translateY(-2px);
}

.btn-outline {
  background-color: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.btn-outline:hover {
  background-color: var(--primary-color);
  color: white;
}

.section {
  padding: 60px 0;
}

.section-title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
  color: var(--dark-color);
}

.section-subtitle {
  text-align: center;
  margin-bottom: 40px;
  font-size: 1.2rem;
  color: var(--text-color);
  opacity: 0.8;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* Header */
header {
  background-color: white;
  box-shadow: var(--box-shadow);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--dark-color);
}

.logo span {
  color: var(--primary-color);
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 30px;
}

.nav-link {
  color: var(--dark-color);
  font-weight: 500;
  transition: var(--transition);
}

.nav-link:hover, .nav-link.active {
  color: var(--primary-color);
}

.nav-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--dark-color);
}

/* Hero Section */

.hero-content {
  max-width: 600px;
  animation: fadeIn 1s ease;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 20px;
  color: var(--dark-color);
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: var(--text-color);
}

.hero-btns {
  display: flex;
  gap: 15px;
}

/* About Section */
.about {
  background-color: white;
}

.about-container {
  display: flex;
  gap: 50px;
  align-items: center;
}

.about-img {
  width: 40%;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  overflow: hidden;
}

.about-img img {
  width: 100%;
  height: auto;
  transition: var(--transition);
}

.about-content {
  width: 60%;
}

.about-title {
  font-size: 2rem;
  margin-bottom: 20px;
  color: var(--dark-color);
}

.about-text {
  margin-bottom: 20px;
  color: var(--text-color);
}

.about-stats {
  display: flex;
  gap: 30px;
  margin-top: 30px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 5px;
}

.stat-text {
  font-size: 0.9rem;
  color: var(--text-color);
}

/* Skills Section */
.skills {
  background-color: var(--light-color);
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.skill-card {
  background-color: white;
  padding: 30px;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  width: calc(33.33% - 20px);
  text-align: center;
  transition: var(--transition);
}

.skill-card:hover {
  transform: translateY(-10px);
}

.skill-icon {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.skill-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: var(--dark-color);
}

.skill-text {
  color: var(--text-color);
  font-size: 0.9rem;
}

.skill-rating {
  margin-top: 15px;
  display: flex;
  justify-content: center;
}

.rating-star {
  color: #f1c40f;
  margin: 0 2px;
}

/* Projects Section */
.projects {
  background-color: white;
}

.projects-filter {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
}

.filter-btn {
  background: none;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  font-size: 0.9rem;
  color: var(--text-color);
  border-radius: var(--border-radius);
  transition: var(--transition);
}

.filter-btn:hover, .filter-btn.active {
  background-color: var(--primary-color);
  color: white;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.project-card {
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
}

.project-card:hover {
  transform: translateY(-10px);
}

.project-img {
  height: 200px;
  overflow: hidden;
}

.project-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.project-card:hover .project-img img {
  transform: scale(1.1);
}

.project-content {
  padding: 20px;
  background-color: white;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
}

.project-tag {
  font-size: 0.7rem;
  padding: 5px 10px;
  background-color: var(--light-color);
  border-radius: 20px;
  color: var(--text-color);
}

.project-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: var(--dark-color);
}

.project-desc {
  font-size: 0.9rem;
  color: var(--text-color);
  margin-bottom: 15px;
}

.project-links {
  display: flex;
  gap: 15px;
}

.project-link {
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 5px;
}

/* Education Section */
.education {
  background-color: var(--light-color);
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 2px;
  background-color: var(--primary-color);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1px;
}

.timeline-item {
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;
}

.timeline-item:nth-child(odd) {
  left: 0;
}

.timeline-item:nth-child(even) {
  left: 50%;
}

.timeline-content {
  padding: 20px;
  background-color: white;
  position: relative;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

.timeline-date {
  font-size: 0.9rem;
  color: var(--primary-color);
  margin-bottom: 10px;
  font-weight: 500;
}

.timeline-title {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: var(--dark-color);
}

.timeline-subtitle {
  font-size: 0.9rem;
  color: var(--text-color);
  margin-bottom: 10px;
  opacity: 0.8;
}

.timeline-text {
  font-size: 0.9rem;
  color: var(--text-color);
}

.timeline-dot {
  width: 20px;
  height: 20px;
  position: absolute;
  background-color: var(--primary-color);
  border-radius: 50%;
  top: 20px;
  z-index: 1;
}

.timeline-item:nth-child(odd) .timeline-dot {
  right: -10px;
}

.timeline-item:nth-child(even) .timeline-dot {
  left: -10px;
}

/* Contact Section */
.contact {
  background-color: white;
}

.contact-container {
  display: flex;
  gap: 50px;
}

.contact-info {
  width: 40%;
}

.contact-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: var(--dark-color);
}

.contact-list {
  list-style: none;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.contact-icon {
  width: 40px;
  height: 40px;
  background-color: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.2rem;
}

.contact-text {
  font-size: 0.9rem;
  color: var(--text-color);
}

.contact-form {
  width: 60%;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  font-family: inherit;
  font-size: 0.9rem;
  transition: var(--transition);
}

.form-control:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
}

textarea.form-control {
  min-height: 150px;
  resize: vertical;
}

/* Footer */
footer {
  background-color: var(--dark-color);
  color: white;
  padding: 30px 0;
  text-align: center;
}

.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.footer-logo span {
  color: var(--primary-color);
}

.social-links {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.social-link {
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: var(--transition);
}

.social-link:hover {
  background-color: var(--primary-color);
  transform: translateY(-5px);
}

.footer-text {
  font-size: 0.9rem;
  opacity: 0.8;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Theme Switcher */
.theme-switcher {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1000;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
}

.theme-switcher:hover {
  transform: rotate(30deg);
}

/* Dark Theme */
.dark-theme {
  --primary-color: #3498db;
  --secondary-color: #2980b9;
  --dark-color: #ecf0f1;
  --light-color: #2c3e50;
  --text-color: #f5f5f5;
  --box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
}

.dark-theme body {
  background-color: #1a1a1a;
}

.dark-theme header, 
.dark-theme .about, 
.dark-theme .projects, 
.dark-theme .contact, 
.dark-theme .project-content,
.dark-theme .skill-card,
.dark-theme .timeline-content {
  background-color: #2c3e50;
}

.dark-theme .project-tag {
  background-color: #1a1a1a;
}

.dark-theme footer {
  background-color: #1a1a1a;
}

/* Responsive */
@media (max-width: 992px) {
  .about-container, .contact-container {
    flex-direction: column;
  }

  .about-img, .about-content, .contact-info, .contact-form {
    width: 100%;
  }

  .skill-card {
    width: calc(50% - 20px);
  }

  .timeline::after {
    left: 31px;
  }

  .timeline-item {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  .timeline-item:nth-child(even) {
    left: 0;
  }

  .timeline-item:nth-child(odd) .timeline-dot,
  .timeline-item:nth-child(even) .timeline-dot {
    left: 21px;
  }
}

@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    top: 80px;
    right: -100%;
    width: 80%;
    height: 100vh;
    background-color: white;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
    transition: var(--transition);
    box-shadow: var(--box-shadow);
  }

  .nav-menu.active {
    right: 0;
  }

  .nav-toggle {
    display: block;
  }

  .skill-card {
    width: 100%;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .dark-theme .nav-menu {
    background-color: #2c3e50;
  }
}
</style>