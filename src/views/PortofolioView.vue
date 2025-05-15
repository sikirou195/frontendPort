
  <style>
  .modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0; top: 0;
  width: 100%; height: 100%;
  background-color: rgba(0,0,0,0.7);
}

.modal-content {
  background: #fff;
  margin: 5% auto;
  padding: 0;
  border-radius: 10px;
  width: 80%;
  max-width: 900px;
  position: relative;
  box-shadow: 0 0 15px rgba(0,0,0,0.5);
}

.modal-pdf {
  width: 100%;
  height: 80vh;
  border: none;
}

.close {
  position: absolute;
  top: 10px; right: 20px;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  color: #333;
}

.close:hover {
  color: red;
}

  .cv-section {
  background: #f9f9fb;
  padding: 80px 20px;
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
}

.cv-container {
  max-width: 1100px;
  margin: 0 auto;
}

.cv-section h2 {
  font-size: 36px;
  color: #333;
  margin-bottom: 10px;
}

.cv-subtitle {
  color: #666;
  font-size: 18px;
  margin-bottom: 40px;
}

.cv-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.cv-card {
  background: #fff;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  border-radius: 12px;
  padding: 20px;
  width: 100%;
  max-width: 500px;
  transition: transform 0.3s ease;
}

.cv-card:hover {
  transform: translateY(-5px);
}

.cv-card h3 {
  font-size: 20px;
  margin-bottom: 15px;
  color: #222;
}

.cv-preview {
  width: 100%;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 15px;
}

.cv-button {
  display: inline-block;
  background-color: #4a90e2;
  color: white;
  padding: 10px 25px;
  border-radius: 6px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s;
}

.cv-button:hover {
  background-color: #3a78c2;
}

.cv-button.alt {
  background-color: #5cb85c;
}

.cv-button.alt:hover {
  background-color: #4cae4c;
}

@media (max-width: 768px) {
  .cv-cards {
    flex-direction: column;
    align-items: center;
  }

  .cv-preview {
    height: 250px;
  }
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
      animation: fadeInScale 1s ease-out;
}

@keyframes fadeInScale {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
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
  opacity: 0;
  transform: translateY(50px);
  animation: fadeUp 2s forwards;
}

@keyframes fadeUp {
  100% {
    opacity: 1;
    transform: translateY(0);
  }
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
  opacity: 0;
  transform: translateX(50px);
  animation: slideIn 3s ease forwards;
}

@keyframes slideIn {
  100% {
    opacity: 1;
    transform: translateX(0);
  }
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
<template>
  <div id="app" :class="['bg-gray-100 text-gray-800', { 'dark-theme': isDarkTheme }]">
  
       <HeaderBar/>
    <!-- Hero Section -->
    <section id="home" class="hero section pt-24">
      <div class="container hero-container flex justify-between items-center">
        <div class="hero-content max-w-lg">
          <router-link to="/contactlist" class="btn-retour" >  <h1 class="hero-title text-5xl font-bold mb-4">
            Développeur <span class="text-primary">Passionné</span>
          </h1> </router-link>
          <p class="hero-subtitle text-lg mb-6">
            Étudiant en informatique aspirant à une Licence3 en Génie Logiciel, je conçois des solutions web innovantes et performantes.
          </p>
        </div>
        <div class="theme-switcher cursor-pointer" @click="toggleTheme">
          <i class="fas text-2xl" :class="isDarkTheme ? 'fa-sun' : 'fa-moon'" />
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about section bg-white">
      <div class="container about-container flex flex-col md:flex-row items-center gap-8 py-12">
        <div class="about-img w-full md:w-1/2">
          <p> <strong><h3> OTOROU Sikirou</h3> </strong></p>
          <img src="@/assets/sikirou1.jpg" alt="Mon portrait" class="rounded-lg shadow-lg"/>
        </div>
        <div class="about-content w-full md:w-1/2">
          <h2 class="section-title text-4xl font-bold mb-4">🙋‍♂️À Propos de Moi</h2>
          <p class="section-subtitle text-lg mb-6">Découvrez mon parcours et ma passion pour le développement logiciel</p>
          <p class="about-text mb-4">
            Je suis un étudiant passionné par le développement de logiciels et les technologies web modernes. J'ai acquis une solide expérience dans la conception d'applications web et mobiles.
          </p>
    <p class="about-text mb-6">
       Mon objectif est de poursuivre mes études en Licence3 Génie Logiciel afin d'approfondir mes connaissances et devenir un développeur d'exception.
      </p>
          <div class="about-stats flex gap-6">
            <div class="stat-item text-center">
              <h4 class="stat-number text-3xl font-bold text-primary">10+</h4>
              <p class="stat-text">Projets réalisés</p>
            </div>
            <div class="stat-item text-center">
              <h4 class="stat-number text-3xl font-bold text-primary">5+</h4>
              <p class="stat-text">Technologies maîtrisées</p>
            </div>
            <div class="stat-item text-center">
              <h4 class="stat-number text-3xl font-bold text-primary">3</h4>
              <p class="stat-text">Années d'expérience</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills section bg-gray-50">
      <div class="container py-12">
        <h2 class="section-title text-4xl font-bold text-center mb-4">🛠️Mes Compétences </h2>
        <p class="section-subtitle text-center mb-8">Les technologies que j'utilise pour créer des applications modernes et performantes</p>
        <div class="skills-container grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="skill-card bg-white p-6 rounded-lg shadow transition hover:-translate-y-2" v-for="skill in skills" :key="skill.id">
            <div class="skill-icon text-4xl mb-4 text-primary"><i :class="skill.icon" /></div>
            <h3 class="skill-title text-xl font-semibold mb-2">{{ skill.title }}</h3>
            <p class="skill-text text-sm mb-4">{{ skill.description }}</p>
            <div class="skill-rating flex justify-center">
              <span v-for="n in 5" :key="n" class="rating-star mx-1"><i class="fas" :class="n <= skill.rating ? 'fa-star' : 'fa-star-o'" /></span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects section bg-white">
      <div class="container py-12">
        <h2 class="section-title text-4xl font-bold text-center mb-4"> 🌐Mes Projets web</h2>
        <p class="section-subtitle text-center mb-8">Découvrez mes réalisations et applications développées</p>
        <div class="projects-filter flex justify-center mb-6 space-x-4">
          <button
            v-for="filter in projectFilters"
            :key="filter.id"
            class="filter-btn px-4 py-2 rounded-lg border"
            :class="{ 'bg-primary text-white': activeFilter === filter.id }"
            @click="setActiveFilter(filter.id)"
          >{{ filter.text }}</button>
        </div>
        <div class="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="project-card overflow-hidden rounded-lg shadow-lg transition hover:shadow-2xl" v-for="project in filteredProjects" :key="project.id">
            <div class="project-img h-48 overflow-hidden"><img :src="project.image" alt="Image du projet" class="w-full h-full object-cover transition-transform hover:scale-110" /></div>
            <div class="project-content p-6">
              <div class="project-tags flex flex-wrap gap-2 mb-4"><span class="project-tag bg-gray-100 px-2 py-1 rounded-full text-xs">{{ tag }}</span></div>
              <h3 class="project-title text-xl font-semibold mb-2">{{ project.title }}</h3>
              <p class="project-desc text-sm mb-4">{{ project.description }}</p>
              <div class="project-links flex gap-4">
                <a :href="project.demoLink" class="project-link flex items-center gap-2"><i class="fas fa-eye"></i> Démo</a>
                <a :href="project.codeLink" class="project-link flex items-center gap-2"><i class="fas fa-code"></i> Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <ProjetGraph/>
    </section>
<!-- CV & Lettre de Motivation Section -->
<!-- Section CV et Lettre -->
<section>
<LettreMotiv/>

</section>
    <!-- Education Section -->
    <section id="education" class="education section bg-gray-50">
      <div class="container py-12">
        <h2 class="section-title text-4xl font-bold text-center mb-4">🎓Mon Parcours</h2>
        <p class="section-subtitle text-center mb-8">Mon parcours académique et professionnel</p>
        <div class="timeline relative">
          <div class="timeline-item mb-8 pl-8 relative" v-for="item in education" :key="item.id">
            <div class="timeline-dot absolute left-0 top-1 w-4 h-4 bg-primary rounded-full"></div>
            <div class="timeline-content bg-white p-6 rounded-lg shadow-lg">
              <p class="timeline-date text-primary font-medium mb-2">{{ item.date }}</p>
              <h3 class="timeline-title text-xl font-semibold mb-1">{{ item.title }}</h3>
              <h4 class="timeline-subtitle text-sm mb-2">{{ item.institution }}</h4>
              <p class="timeline-text text-sm">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact section bg-white">
      <div class="container contact-container flex flex-col md:flex-row gap-8 py-12">
        <div class="contact-info w-full md:w-1/2">
          <h3 class="contact-title text-2xl font-bold mb-4">📞Informations de Contact</h3>
          <ul class="contact-list space-y-4">
            <li class="contact-item flex items-center gap-4">
              <div class="contact-icon w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full"><i class="fas fa-map-marker-alt" /></div>
              <p class="contact-text">Abomey Calavi, Bénin</p>
            </li>
            <li class="contact-item flex items-center gap-4">
              <div class="contact-icon w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full"><i class="fas fa-envelope" /></div>
              <p class="contact-text">sikirou195@gmail.com</p>
            </li>
            <li class="contact-item flex items-center gap-4">
              <div class="contact-icon w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full"><i class="fas fa-phone" /></div>
              <p class="contact-text">+229 01 67 77 97 71</p>
            </li>
            <li class="contact-item flex items-center gap-4">
              <div class="contact-icon w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full"><i class="fas fa-globe" /></div>
              <p class="contact-text">www.monsite.com</p>
            </li>
          </ul>
        </div>
        <div class="contact-form w-full md:w-1/2">
          <h3 class="section-title text-2xl font-bold mb-4">Formulaire de Contact</h3>
          <form @submit.prevent="submitForm" class="space-y-4">
            <input type="text" v-model="contactForm.name" placeholder="Votre Nom" class="form-control w-full" required />
            <input type="email" v-model="contactForm.email" placeholder="Votre Email" class="form-control w-full" required />
            <input type="text" v-model="contactForm.subject" placeholder="Sujet" class="form-control w-full" required />
            <textarea v-model="contactForm.message" placeholder="Votre Message" class="form-control w-full" required rows="6"></textarea>
            <button type="submit" class="btn w-full">Envoyer</button>
          </form>
        </div>
      </div>
    </section>
  </div>
 <footer class="site-footer">
  <p>© {{ currentYear }} OTOROU SIKIROU</p>
  <div class="social-links">
    <a href="#" class="social-link" aria-label="GitHub">
      <i class="fab fa-github"></i>
    </a>
    <a href="#" class="social-link" aria-label="LinkedIn">
      <i class="fab fa-linkedin"></i>
    </a>
    <a href="#" class="social-link" aria-label="Twitter">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="#" class="social-link" aria-label="Telegram">
      <i class="fab fa-telegram-plane"></i>
    </a>
  </div>
</footer>

</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import HeaderBar from '@/components/HeaderBar.vue';
import boutiqueImage from '@/assets/boutique.png';
import Crud2Image from '@/assets/Crud2.png';
import crud1Image from '@/assets/crud1.png';
import postesImage from '@/assets/postes.png';
import axios from 'axios';
import LettreMotiv from '@/components/lettreMotiv.vue';
import ProjetGraph from '@/components/ProjetGraph.vue';
import affiche8Image from '@/assets/affiche8.jpg';
const contactForm = ref({ name: '', email: '', subject: '', message: '' });

// Fonction pour envoyer le formulaire de contact à l'API NestJS
const submitForm = async () => {
  try {
    // Envoi des données du formulaire à l'API
await axios.post('https://victorious-quietude-production.up.railway.app/portofolio', {
      name: contactForm.value.name,
      email: contactForm.value.email,
      sujet: contactForm.value.subject,
      message: contactForm.value.message
    });
    
    // Vous pouvez ajouter un message de confirmation ou réinitialiser le formulaire après l'envoi réussi
    console.log("Formulaire envoyé avec succès !");
  } catch (error) {
    console.error("Erreur lors de l'envoi du formulaire", error);
    // Vous pouvez afficher un message d'erreur à l'utilisateur ici
  }
};

const isDarkTheme = ref(false);
const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
};
const activeSection = ref('')
// Compétences
const skills = ref([
  {
    title: "HTML, CSS, JavaScript, TypeScript,Php",
  },
  {
    title: "Vue.js, NestJS, Laravel",
  },
  {
    title: "MySQL, Prisma ORM",
    
  },
  {
    title: "Sourcetree",
    
  },
  {
    title: "Git, GitHub, Postman",
  },
  {
    title: "Photoshop,Canvas,Prémier Pro",
  }

 ]);

// Projets
const projectFilters = ref([ /* vos filtres */ ]);
const activeFilter = ref('all');
const projects = ref([ 
{
    id: 1,
    title: "ESAYCOLLAB",
    description: "Application web de gestion des tacches collaboratives,c'etais le projet de fin d'etude academique cycle3",
    image: affiche8Image,
    category: "fullstack",
    demoLink: "#",
    codeLink: "https://github.com/ton-utilisateur/dashboard-ecommerce",
    tags: ["Vue", "NestJS", "Prisma"]
  },
  {
    id: 2,
    title: "Un mini Crud laravel",
    description: "Un tableau de bord élégant avec gestion des utilisateurs, produits, commandes et paiements. Réalisé avec Vue.js (Composition API), NestJS et Prisma.",
    image: Crud2Image,
    category: "fullstack",
    demoLink: "#",
    codeLink: "https://github.com/ton-utilisateur/dashboard-ecommerce",
    tags: ["Vue", "NestJS", "Prisma"]
  },
  {
    id: 3,
    title: "Gestion des Congés",
    description: "Application web permettant de gérer les agents et postes dans une organisation, avec audit et suppression logique.",
    image: postesImage,
    category: "fullstack",
    demoLink: "#",
    codeLink: "https://github.com/ton-utilisateur/gestion-agents-postes",
    tags: ["Vue", "NestJS", "Prisma"]
  },
  {
    id: 4,
    title: "Site e-commerce restreint",
    description: "Un site e-commerce simple où seuls les utilisateurs connectés peuvent commander. Redirection automatique vers la connexion ou l’inscription.",
    image: boutiqueImage,
    category: "frontend",
    demoLink: "#",
    codeLink: "https://github.com/ton-utilisateur/ecommerce-vue-auth",
    tags: ["Vue", "auth", "frontend"]
  },
  {
    id: 5,
    title: "Crud nest.js et vue.js",
    description: "Un site e-commerce simple où seuls les utilisateurs connectés peuvent commander. Redirection automatique vers la connexion ou l’inscription.",
    image: crud1Image,
    category: "frontend",
    demoLink: "#",
    codeLink: "https://github.com/ton-utilisateur/ecommerce-vue-auth",
    tags: ["Vue", "auth", "frontend"]
  }

]);
const filteredProjects = computed(() =>
  activeFilter.value === 'all'
    ? projects.value
    : projects.value.filter(p => p.category === activeFilter.value)
);
const setActiveFilter = (f) => { activeFilter.value = f; };

// Éducation
const education = ref([
  
{
    id: 1,
    date: '2024 - Aujourd’hui',
    title: 'Stage Professionnelle',
    institution: 'Ministère Des Finances',
    description: 'Préparation à la Licence 3 Génie Logiciel avec un focus sur les technologies web, la programmation orientée objet et les bases de données.'
  },
  {
    id: 2,
    date: '2022 - 2023',
    title: 'Formation Professsionnelle',
    institution: 'CIFORQUE',
    description: 'Formation en développement web avec laravel, Graphisme.'
  },
  {
    id: 2,
    date: '2021 - 2024',
    title: 'Etude Superieur',
    institution: 'Université de Les Cours Sonou Calavi',
    description: 'Formation en développement web, algorithmique, administration système et gestion de projet.'
  },
  {
    id: 3,
    date: '2018 - 2021',
    title: 'Baccalauréat Scientifique',
    institution: 'College CEG1 Kouandé',
    description: 'Spécialité Mathématiques,Physique , Chimie et Biologie.'
  }
]);

// Scroll
onMounted(() => {
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 100;
    document.querySelectorAll('section').forEach(sec => {
      const top = sec.offsetTop;
      
      if (scrollPos >= top) activeSection.value = sec.id;
    });
  });
});
</script>
