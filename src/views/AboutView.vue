<template>
  <div class="container-fluid about-page">
    <!-- Hero Section -->
    <div class="hero-section text-center">
      <h1 class="fw-bold fade-in neon-text">About UI Insights</h1>
      <p class="fs-5">Empowering designers & developers with top-notch UI/UX knowledge.</p>
    </div>

    <!-- Our Mission Section -->
    <div class="container mt-5 text-center fade-in">
      <h2 class="text-accent fw-bold">Our Mission</h2>
      <p class="fs-5">
        We aim to provide the best UI/UX design principles, insights, and trends to help developers and designers craft seamless experiences.
      </p>
    </div>

    <!-- Statistics Section -->
    <div class="container mt-5">
      <h2 class="text-glow text-center fw-bold">Our Impact</h2>
      <div class="row text-center">
        <div class="col-md-4 fade-in">
          <h2 class="stat-number" v-if="showStats">{{ users }}+</h2>
          <p class="fs-5">Active Users</p>
        </div>
        <div class="col-md-4 fade-in">
          <h2 class="stat-number" v-if="showStats">{{ insights }}+</h2>
          <p class="fs-5">Curated Insights</p>
        </div>
        <div class="col-md-4 fade-in">
          <h2 class="stat-number" v-if="showStats">{{ mentors }}+</h2>
          <p class="fs-5">Expert Mentors</p>
        </div>
      </div>
    </div>

    <!-- Timeline Section -->
    <div class="container mt-5">
      <h2 class="text-accent text-center fw-bold">Our Journey</h2>
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
      <h2 class="text-center text-glow fw-bold">What People Say</h2>
      <div class="row mt-4">
        <div class="col-md-4" v-for="(testimonial, index) in testimonials" :key="index">
          <div class="card testimonial-card p-3 shadow-sm fade-in">
            <p class="fw-bold text-white">"{{ testimonial.quote }}"</p>
            <h5 class="text-accent mt-3">{{ testimonial.name }}</h5>
            <p class="fs-6">{{ testimonial.role }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="container text-center mt-5 fade-in">
      <h2 class="fw-bold text-glow">Join Our Community</h2>
      <p class="fs-5">Be part of a thriving community of designers & developers.</p>
      <button class="btn btn-accent btn-lg mt-3">Join Now</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showStats: false,
      users: 0,
      insights: 0,
      mentors: 0,
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
  mounted() {
    setTimeout(() => {
      this.showStats = true;
      this.animateStats();
    }, 500);
  },
  methods: {
    animateStats() {
      let countUsers = 0, countInsights = 0, countMentors = 0;
      const interval = setInterval(() => {
        if (countUsers < 15000) countUsers += 500;
        if (countInsights < 300) countInsights += 10;
        if (countMentors < 50) countMentors += 2;

        this.users = countUsers;
        this.insights = countInsights;
        this.mentors = countMentors;

        if (countUsers >= 15000 && countInsights >= 300 && countMentors >= 50) {
          clearInterval(interval);
        }
      }, 50);
    },
  }
};
</script>

<style scoped>
/* Dark Theme */
.about-page {
  background-color: #121212;
  color: #f1f1f1;
  padding-bottom: 50px;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(to right, #1a1a1a, #333);
  padding: 100px 20px;
  border-radius: 10px;
  animation: fadeIn 1s ease-in-out;
}

.text-accent {
  color: #00eaff;
}
.neon-text {
    color: #ffcc00;
    text-shadow: 0px 0px 15px #ffcc00;
  }

.text-glow {
  color: #00eaff;
  text-shadow: 0 0 10px #00eaff;
}

/* Timeline */
.timeline {
  position: relative;
  padding-left: 40px;
  border-left: 3px solid #00eaff;
}

.timeline-item {
  position: relative;
  margin-bottom: 30px;
}

.timeline-date {
  font-weight: bold;
  color: #00eaff;
}

.timeline-content {
  background: rgba(255, 255, 255, 0.05);
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 234, 255, 0.2);
}

/* Testimonials */
.testimonial-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 234, 255, 0.3);
  transition: transform 0.3s ease-in-out;
}

.testimonial-card:hover {
  transform: scale(1.05);
}

/* Animated Numbers */
.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: #00eaff;
}

/* Button */
.btn-accent {
  background-color: #00eaff;
  color: #121212;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
}

.btn-accent:hover {
  background-color: #0088a9;
  color: white;
}

/* Animations */
.fade-in {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
