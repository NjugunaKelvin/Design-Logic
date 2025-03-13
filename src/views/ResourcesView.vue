<template>
 <br>
 <br>
    <div class="container mt-5">
      <!-- Page Header -->
      <div class="text-center mb-5">
        <h2 class="fw-bold neon-text">📚 UI/UX Resources Hub</h2>
        <p class="sub-text text-white">Your one-stop collection of the best UI/UX resources.</p>
      </div>
  
      <!-- Search & Filter -->
      <div class="d-flex justify-content-center mb-4">
        <input
          type="text"
          v-model="searchQuery"
          class="form-control search-box"
          placeholder="🔍 Search resources..."
        />
      </div>
  
      <div class="d-flex justify-content-center mb-4">
        <button
          v-for="(category, index) in categories"
          :key="index"
          @click="filterByCategory(category)"
          :class="['filter-btn', { 'active': selectedCategory === category }]"
        >
          {{ category }}
        </button>
      </div>
  
      <!-- Featured Resource -->
      <div v-if="featuredResource" class="glass-card mb-5">
        <h4 class="neon-sub">🔥 Featured Resource</h4>
        <a :href="featuredResource.link" target="_blank" class="featured-link">
          <h5>{{ featuredResource.title }}</h5>
        </a>
        <p class="text-white">{{ featuredResource.description }}</p>
      </div>
  
      <!-- Resource Grid -->
      <div class="row">
        <div
          class="col-lg-4 col-md-6 col-sm-12 mb-4"
          v-for="(resource, index) in filteredResources"
          :key="index"
        >
          <div class="card resource-card h-100 shadow-sm">
            <img :src="resource.image" class="card-img-top" alt="Resource Image" />
            <div class="card-body d-flex flex-column bg-dark">
              <h5 class="card-title fw-bolder text-white">{{ resource.title }}</h5>
              <p class="card-text flex-grow-1 text-white">{{ resource.description }}</p>
              <a :href="resource.link" target="_blank" class="btn btn-glow">Access</a>
            </div>
          </div>
        </div>
      </div>
  
      <!-- No Resources Found -->
      <div v-if="filteredResources.length === 0" class="text-center w-100 mt-4">
        <p class="text-accent">No resources found.</p>
      </div>
    </div>
</template>
  
  <script>
  import figmaImage from "@/assets/figma.jpg";
  import colorTheoryImage from "@/assets/color-theory.jpeg";
  import typographyImage from "@/assets/typography.jpeg";
  import freebiesImage from "@/assets/freebies.jpeg";
  import uxLawsImage from "@/assets/ux-laws.jpeg";
  
  export default {
    data() {
      return {
        searchQuery: "",
        selectedCategory: "All",
        categories: ["All", "Tools", "Guides", "Freebies", "Courses"],
        resources: [
          {
            title: "Figma UI Kit",
            category: "Tools",
            description: "A free UI kit for Figma to speed up your design process.",
            image: figmaImage,
            link: "https://www.figma.com"
          },
          {
            title: "Understanding Color Theory",
            category: "Guides",
            description: "A detailed guide on using colors effectively in UI design.",
            image: colorTheoryImage,
            link: "https://color.adobe.com"
          },
          {
            title: "Typography Best Practices",
            category: "Guides",
            description: "Learn how to use typography to enhance readability and aesthetics.",
            image: typographyImage,
            link: "https://typography.com"
          },
          {
            title: "UI/UX Freebies",
            category: "Freebies",
            description: "Collection of free UI components and design resources.",
            image: freebiesImage,
            link: "https://www.uifreebies.com"
          },
          {
            title: "Laws of UX",
            category: "Courses",
            description: "A comprehensive course on UX laws and best practices.",
            image: uxLawsImage,
            link: "https://lawsofux.com"
          }
        ]
      };
    },
    computed: {
      filteredResources() {
        return this.resources.filter(resource => {
          const matchesSearch = resource.title.toLowerCase().includes(this.searchQuery.toLowerCase());
          const matchesCategory = this.selectedCategory === "All" || resource.category === this.selectedCategory;
          return matchesSearch && matchesCategory;
        });
      },
      featuredResource() {
        return this.resources.length > 0 ? this.resources[0] : null;
      }
    },
    methods: {
      filterByCategory(category) {
        this.selectedCategory = category;
      }
    }
  };
  </script>
  
<style scoped>
  /* Dark Theme */
  body {
    background-color: #111;
  }
  
  /* Glassmorphism Effect */
  .glass-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    padding: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease-in-out;
  }
  
  .glass-card:hover {
    transform: scale(1.02);
  }
  
  /* Neon Text */
  .neon-text {
    color: #ffcc00;
    text-shadow: 0px 0px 15px #ffcc00;
  }
  
  .neon-sub {
    color: #0ff;
    text-shadow: 0px 0px 10px #0ff;
  }
  
  /* Buttons */
  .btn-glow {
    background: linear-gradient(45deg, #ffcc00, #ff6600);
    color: #111;
    font-weight: bold;
    border-radius: 8px;
    padding: 8px 15px;
    transition: all 0.3s ease-in-out;
  }
  
  .btn-glow:hover {
    background: linear-gradient(45deg, #ff6600, #ffcc00);
    box-shadow: 0px 0px 15px rgba(255, 204, 0, 0.8);
  }
  
  /* Search Box */
  .search-box {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    width: 50%;
    padding: 10px;
    border-radius: 8px;
    text-align: center;
  }
  
  /* Filter Buttons */
  .filter-btn {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    padding: 8px 12px;
    border-radius: 8px;
    margin: 0 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  
  .filter-btn:hover,
  .filter-btn.active {
    background: #ffcc00;
    color: black;
  }
  
  /* Resource Cards */
  .resource-card {
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
  }
  
  .resource-card:hover {
    transform: scale(1.05);
  }
  
  .resource-card img {
    height: 200px;
    object-fit: cover;
  }
  
  /* Featured Resource */
  .featured-link {
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    color: #ffcc00;
    transition: color 0.3s ease-in-out;
  }
  
  .featured-link:hover {
    color: #ff6600;
  }
  </style>
  