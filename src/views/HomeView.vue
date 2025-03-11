<template>
  <div class="container mt-5">
    <!-- Hero Section -->
    <div class="text-center">
      <h1 class="text-primary fw-bold">Welcome to UI Insights</h1>
      <p class="text-muted fs-5">Your go-to hub for improving UI/UX design</p>
    </div>

    <!-- Featured UI/UX Designers -->
    <div class="mt-5">
      <h2 class="text-center text-info">Notable UI/UX Designers</h2>
      <div class="row mt-4">
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4" v-for="(designer, index) in designers" :key="index">
          <div class="card shadow-sm h-100">
            <img :src="designer.image" class="card-img-top" alt="Designer">
            <div class="card-body text-center">
              <h5 class="card-title">{{ designer.name }}</h5>
              <p class="text-muted">{{ designer.work }}</p>
              <a :href="designer.link" target="_blank" class="btn btn-outline-primary btn-sm">View Profile</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Trending Insights Preview -->
    <div class="mt-5">
      <h2 class="text-center text-info">Trending UI/UX Insights</h2>
      <div class="row mt-4">
        <div class="col-md-4 col-sm-6 mb-4" v-for="(insight, index) in trendingInsights" :key="index">
          <div class="card shadow-sm h-100">
            <img :src="insight.image" class="card-img-top" alt="Insight">
            <div class="card-body">
              <h5 class="card-title">{{ insight.title }}</h5>
              <p class="card-text">{{ insight.description }}</p>
              <button class="btn btn-info btn-sm">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import minimalistImage from '@/assets/minimalist.jpeg'
import color from '@/assets/color.jpeg'
import responsive from '@/assets/responsive.jpeg'

// Replace with actual UI/UX designer images
import designer1 from '@/assets/designer1.jpeg'
import designer2 from '@/assets/designer2.jpeg'
import designer3 from '@/assets/designer3.jpeg'
import designer4 from '@/assets/designer4.jpeg'

export default {
  name: 'HomeView',
  data() {
    return {
      designers: [
        { name: "Don Norman", work: "The Design of Everyday Things", image: designer1, link: "https://en.wikipedia.org/wiki/Don_Norman" },
        { name: "Jakob Nielsen", work: "Usability Heuristics", image: designer2, link: "https://www.nngroup.com/about/jakob-nielsen/" },
        { name: "Steve Krug", work: "Don't Make Me Think", image: designer3, link: "https://en.wikipedia.org/wiki/Steve_Krug" },
        { name: "Luke Wroblewski", work: "Mobile First UX", image: designer4, link: "https://www.lukew.com/" },
      ],
      trendingInsights: [
        { title: "Minimalist Design", description: "Focus on simplicity and readability for better UX.", image: minimalistImage },
        { title: "Effective Color Usage", description: "Use contrast to improve accessibility and visual appeal.", image: color },
        { title: "Responsive Layouts", description: "Ensure your design adapts well to all screen sizes.", image: responsive },
      ],
    };
  }
};
</script>

<style scoped>
.card {
  border-radius: 12px;
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}

.card img {
  height: 180px;
  object-fit: cover;
}
</style>
