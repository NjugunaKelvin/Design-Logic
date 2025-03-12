<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container">
      <router-link class="navbar-brand logo" to="/">Design Logic</router-link>

      <!-- Mobile Menu Toggle -->
      <button 
        class="navbar-toggler" 
        type="button" 
        @click="toggleMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" :class="{ 'show': isMenuOpen }">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" :class="{ 'active-link': isActive('/') }">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/insights" :class="{ 'active-link': isActive('/insights') }">Insights</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about" :class="{ 'active-link': isActive('/about') }">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/resources" :class="{ 'active-link': isActive('/resoources') }">Resources</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    isActive(route) {
      return this.$route.path === route;
    }
  }
};
</script>

<style scoped>
/* Navbar styling */
.navbar {
  background-color: #111 !important; /* Darker black */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.8);
}

/* Logo styling */
.logo {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: #0dcaf0 !important; /* Neon Blue */
  transition: 0.3s ease-in-out;
}
.logo:hover {
  color: #17a2b8 !important; /* Lighter blue */
}

/* Nav links */
.navbar-nav .nav-link {
  color: #ccc !important;
  font-weight: 500;
  transition: 0.3s ease-in-out;
  position: relative;
}
.navbar-nav .nav-link:hover {
  color: #0dcaf0 !important;
}

/* Active link effect */
.active-link {
  color: #0dcaf0 !important;
  font-weight: bold;
  text-shadow: 0 0 5px #0dcaf0;
}

/* Navbar toggle button (mobile) */
.navbar-toggler {
  border: none;
  outline: none;
}
.navbar-toggler:focus {
  box-shadow: none;
}

/* Mobile menu animation */
.collapse {
  transition: max-height 0.5s ease-in-out;
}
</style>
