<template>
  <div class="container-fluid about-page">
    <!-- Hero Section -->
    <div class="hero-section text-center text-white">
      <h1 class="fw-bold fade-in">About UI Insights</h1>
      <p class="fs-5">Empowering designers & developers with top-notch UI/UX knowledge.</p>
    </div>

    <!-- Our Mission Section -->
    <div class="container mt-5 text-center fade-in">
      <h2 class="text-primary fw-bold">Our Mission</h2>
      <p class="text-muted fs-5">
        We aim to provide the best UI/UX design principles, insights, and trends to help developers and designers create outstanding user experiences.
      </p>
    </div>

    <!-- Timeline Section -->
    <div class="container mt-5">
      <h2 class="text-info text-center fw-bold">Our Journey</h2>
      <div class="timeline">
        <div class="timeline-item fade-in" v-for="(milestone, index) in milestones" :key="index">
          <div class="timeline-date">{{ milestone.date }}</div>
          <div class="timeline-content">
            <h4>{{ milestone.title }}</h4>
            <p>{{ milestone.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonials Section -->
    <div class="container mt-5">
      <h2 class="text-center text-success fw-bold">What People Say</h2>
      <div class="row mt-4">
        <div class="col-md-4" v-for="(testimonial, index) in testimonials" :key="index">
          <div class="card p-3 shadow-sm fade-in">
            <p class="fw-bold">"{{ testimonial.quote }}"</p>
            <h5 class="text-primary mt-3">{{ testimonial.name }}</h5>
            <p class="text-muted">{{ testimonial.role }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Join Us Section -->
    <div class="container text-center mt-5 fade-in">
      <h2 class="fw-bold text-warning">Join Our Community</h2>
      <p class="fs-5 text-muted">Be part of a thriving community of designers & developers.</p>
      <button class="btn btn-primary btn-lg mt-3">Join Now</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      milestones: [
        { date: "2024", title: "UI Insights Launched", description: "Our journey began with a vision to improve UI/UX learning." },
        { date: "2025", title: "First 10,000 Users", description: "We hit our first major milestone, growing our community." },
        { date: "2026", title: "Expansion", description: "We expanded to offer premium content and mentorship." },
      ],
      testimonials: [
        { quote: "UI Insights transformed my design skills!", name: "Alex Doe", role: "UI Designer" },
        { quote: "An incredible resource for frontend developers!", name: "Sarah Smith", role: "Frontend Developer" },
        { quote: "The best UI/UX learning platform!", name: "Chris Johnson", role: "Product Manager" },
      ],
    };
  },
};
</script>

<style scoped>
/* Hero Section */
.hero-section {
  background: linear-gradient(to right, #1e3c72, #2a5298);
  padding: 100px 20px;
  border-radius: 10px;
  animation: slideIn 1s ease-in-out;
}

/* Timeline */
.timeline {
  position: relative;
  padding-left: 40px;
  border-left: 4px solid #007bff;
}

.timeline-item {
  position: relative;
  margin-bottom: 30px;
}

.timeline-date {
  font-weight: bold;
  color: #007bff;
}

.timeline-content {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

/* Animations */
.fade-in {
  animation: fadeIn 1s ease-in-out;
}

@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
