<template>
  <br><br>
    <div class="container mt-5">
      <!-- Hero Section -->
      <div class="text-center mb-5">
        <h2 class="fw-bold neon-text">🚀 UI/UX Community Hub</h2>
        <p class="sub-text">Connect, Learn, and Grow with UI/UX Enthusiasts!</p>
      </div>
  
      <div class="row">
        <!-- Featured Discussions -->
        <div class="col-md-6">
          <div class="glass-card">
            <h4 class="neon-sub">🔥 Trending Discussions</h4>
            <ul class="list-group">
              <li v-for="(discussion, index) in discussions" :key="index" class="list-group-item">
                <strong>{{ discussion.topic }}</strong> <br />
                <small class="text-muted">💬 {{ discussion.comments }} comments</small>
              </li>
            </ul>
          </div>
        </div>
  
        <!-- Live Events -->
        <div class="col-md-6">
          <div class="glass-card">
            <h4 class="neon-sub">🎤 Live Events & Webinars</h4>
            <ul class="list-group">
              <li v-for="(event, index) in events" :key="index" class="list-group-item">
                <strong>{{ event.name }}</strong> - <span class="text-accent">{{ event.date }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
  
      <!-- Poll Section -->
      <div class="mt-4 glass-card">
        <h4 class="neon-sub">📊 UI/UX Poll</h4>
        <p class="sub-text">Which UI design principle is the most important?</p>
        <div v-for="(option, index) in pollOptions" :key="index" class="form-check">
          <input type="radio" class="form-check-input" :id="'poll' + index" name="poll" />
          <label class="form-check-label" :for="'poll' + index">{{ option }}</label>
        </div>
        <button class="btn btn-glow mt-3">Vote</button>
      </div>
  
      <!-- Comment Section -->
      <div class="mt-4 glass-card">
        <h4 class="neon-sub">💬 Community Thoughts</h4>
        <textarea v-model="newComment" class="form-control mb-2 comment-box" placeholder="Share your thoughts..."></textarea>
        <button class="btn btn-glow" @click="addComment">Post</button>
        <ul class="mt-3 list-group">
          <li v-for="(comment, index) in comments" :key="index" class="list-group-item">
            {{ comment }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        discussions: [
          { topic: "Dark Mode vs Light Mode?", comments: 34 },
          { topic: "Best typography for readability?", comments: 19 },
          { topic: "How to balance UI aesthetics and functionality?", comments: 27 }
        ],
        events: [
          { name: "UX Design Webinar", date: "March 20, 2025" },
          { name: "Google UI/UX Summit", date: "April 5, 2025" },
          { name: "Figma Design Jam", date: "April 18, 2025" }
        ],
        pollOptions: ["Minimalism", "Typography", "Accessibility", "Consistency"],
        newComment: "",
        comments: ["🔥 Love this community!", "Super insightful!", "Excited for the events!"]
      };
    },
    methods: {
      addComment() {
        if (this.newComment.trim()) {
          this.comments.push(this.newComment);
          this.newComment = "";
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Dark theme */
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
  
  /* Neon Effects */
  .neon-text {
    color: #ffcc00;
    text-shadow: 0px 0px 15px #ffcc00;
  }
  
  .neon-sub {
    color: #0ff;
    text-shadow: 0px 0px 10px #0ff;
  }
  
  .text-accent {
    color: #ff6600;
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
  
  /* Comment Box */
  .comment-box {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
  }
  
  /* List items */
  .list-group-item {
    background: transparent;
    color: #fff;
    border: none;
    padding: 10px;
    transition: all 0.3s ease-in-out;
  }
  
  .list-group-item:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  </style>
  