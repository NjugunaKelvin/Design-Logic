<template>
    <div class="container mt-5">
      <h2 class="text-info text-center fw-bolder">UI/UX Insights</h2>
      <p class="text-center fw-bold">Explore best practices, examples, and tips to improve your designs.</p>
  
      <!-- Search Bar -->
      <div class="mb-4 d-flex justify-content-center">
        <input
          type="text"
          v-model="searchQuery"
          class="form-control w-50"
          placeholder="Search insights..."
        />
      </div>
  
      <!-- Insights Grid (Bootstrap Responsive Layout) -->
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4" v-for="(insight, index) in filteredInsights" :key="index">
          <div class="card h-100 shadow-sm">
            <img :src="insight.image" class="card-img-top" alt="UI Insight">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ insight.title }}</h5>
              <p class="card-text flex-grow-1">{{ insight.description }}</p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- No Insights Found Message -->
      <div v-if="filteredInsights.length === 0" class="text-center w-100 mt-4">
        <p class="text-muted">No insights found.</p>
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
        insights: [
          { title: "Minimalist Design", description: "Focus on simplicity and readability for better UX.", image: minimalistImage },
          { title: "Effective Color Usage", description: "Use contrast to improve accessibility and visual appeal.", image: color },
          { title: "Responsive Layouts", description: "Ensure your design adapts well to all screen sizes.", image: responsive },
          { title: "Typography Matters", description: "Use clear and readable fonts for better UI.", image: typography },
          { title: "White Space is Key", description: "Don't clutter your UI. Proper spacing improves readability.", image: whitespace },
        ],
      };
    },
    computed: {
      filteredInsights() {
        return this.insights.filter(insight =>
          insight.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    }
  };
  </script>
  
  <style scoped>
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
  </style>
  