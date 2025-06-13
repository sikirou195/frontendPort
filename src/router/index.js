import { createRouter, createWebHistory } from 'vue-router';
import HomeView    from '../views/Home.vue';
import ContactListView from '@/views/ContactListView.vue';
import PortofolioView from '@/views/PortofolioView.vue';

const routes = [
 
  { path: '/home',   name: 'Home', component: HomeView  },
  { path: '/',   name: 'Portofolio', component: PortofolioView},
  { path: '/contactlist',   name: 'ContactList', component: ContactListView},
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
