<template>
  <br><br>
  <div class="container-fluid mt-5">
    <div class="row">
      <!-- Sidebar (Collapsible on Small Screens) -->
      <div class="col-lg-3 col-md-4 col-sm-12">
        <button class="btn btn-info w-100 d-md-none mb-3" @click="toggleFilters">
          {{ showFilters ? 'Hide Filters' : 'Show Filters' }}
        </button>
        
        <div :class="['bg-dark', 'text-white', 'p-3', 'rounded', showFilters ? 'd-block' : 'd-none d-md-block']">
          <h4 class="fw-bold">Filters</h4>
          <ul class="list-group">
            <li 
              v-for="(category, index) in categories" 
              :key="index" 
              @click="filterByCategory(category)"
              :class="['list-group-item', 'text-white', 'bg-transparent', {'active': selectedCategory === category}]"
            >
              {{ category }}
            </li>
            <li 
              @click="resetFilter" 
              class="list-group-item text-danger bg-transparent"
            >
              Reset Filters
            </li>
          </ul>
        </div>
      </div>

      <!-- Insights Grid -->
      <div class="col-lg-9 col-md-8 col-sm-12">
        <h2 class="text-info text-center fw-bolder">UI/UX Insights</h2>
        <p class="text-center fw-bold text-white">Explore best practices, examples, and tips to improve your designs.</p>

        <!-- Search Bar -->
        <div class="mb-4 d-flex justify-content-center">
          <input
            type="text"
            v-model="searchQuery"
            class="form-control w-50"
            placeholder="Search insights..."
          />
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12 mb-4" v-for="(insight, index) in filteredInsights" :key="index">
            <div class="card h-100 shadow-sm">
              <img :src="insight.image" class="card-img-top" alt="UI Insight">
              <div class="card-body d-flex flex-column bg-black">
                <h5 class="card-title text-primary">{{ insight.title }}</h5>
                <p class="card-text flex-grow-1 text-white">{{ insight.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- No Insights Found -->
        <div v-if="filteredInsights.length === 0" class="text-center w-100 mt-4">
          <p class="text-white">No insights found.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import minimalistImage from '@/assets/minimalist.jpeg'
import color from '@/assets/color.jpeg'
import responsive from '@/assets/responsive.jpeg'
import typography from '@/assets/typography.jpeg'
import whitespace from '@/assets/whitespace.jpeg'

export default {
  data() {
    return {
      searchQuery: "",
      selectedCategory: null,
      showFilters: false,
      categories: ["All", "Minimalism", "Color Theory", "Responsiveness", "Typography", "Whitespace"],
      insights: [
        { title: "Minimalist Design", category: "Minimalism", description: "Focus on simplicity and readability for better UX.", image: minimalistImage },
        { title: "Effective Color Usage", category: "Color Theory", description: "Use contrast to improve accessibility and visual appeal.", image: color },
        { title: "Responsive Layouts", category: "Responsiveness", description: "Ensure your design adapts well to all screen sizes.", image: responsive },
        { title: "Typography Matters", category: "Typography", description: "Use clear and readable fonts for better UI.", image: typography },
        { title: "White Space is Key", category: "Whitespace", description: "Don't clutter your UI. Proper spacing improves readability.", image: whitespace },
      ],
    };
  },
  computed: {
    filteredInsights() {
      return this.insights.filter(insight => {
        const matchesSearch = insight.title.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesCategory = this.selectedCategory === null || this.selectedCategory === "All" || insight.category === this.selectedCategory;
        return matchesSearch && matchesCategory;
      });
    }
  },
  methods: {
    filterByCategory(category) {
      this.selectedCategory = category;
      this.showFilters = false; // Close filter menu after selection
    },
    resetFilter() {
      this.selectedCategory = "All";
      this.showFilters = false;
    },
    toggleFilters() {
      this.showFilters = !this.showFilters;
    }
  }
};
</script>

<style scoped>
body {
  background-color: black;
}
.card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}

.card img {
  height: 200px;
  object-fit: cover;
}

input {
  border-radius: 8px;
  padding: 8px;
  outline: none;
  border: 1px solid #ccc;
}

input:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.list-group-item {
  cursor: pointer;
}

.list-group-item:hover {
  background-color: #007bff;
  color: white;
}

.active {
  background-color: #007bff !important;
  color: white !important;
}

/* Responsive Sidebar */
@media (max-width: 768px) {
  .d-md-none {
    display: block !important;
  }
  
  .d-md-block {
    display: none !important;
  }
}
</style>
