<template>
    <div class="container mt-5">
      <h2 class="text-center text-info fw-bold">Join the UI/UX Community</h2>
      <p class="text-center">Connect with designers, share ideas, and grow together.</p>
  
      <div class="row mt-4">
        <div class="col-md-6 col-lg-4 mb-4" v-for="(community, index) in communities" :key="index">
          <div class="card shadow-sm h-100">
            <img :src="community.image" class="card-img-top" alt="Community">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ community.name }}</h5>
              <p class="card-text flex-grow-1">{{ community.description }}</p>
              <a :href="community.link" target="_blank" class="btn btn-outline-warning btn-sm">Join Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
  <script>
  import discordImage from '@/assets/discord.jpeg';
  import redditImage from '@/assets/reddit.jpeg';
  import slackImage from '@/assets/slack.png';
  
  export default {
    data() {
      return {
        communities: [
          {
            name: "UI/UX Discord",
            description: "Join thousands of designers discussing UI/UX daily.",
            link: "https://discord.gg/uiux",
            image: discordImage
          },
          {
            name: "UI/UX Reddit",
            description: "Explore insights, questions, and discussions on Reddit.",
            link: "https://www.reddit.com/r/userexperience/",
            image: redditImage
          },
          {
            name: "Slack UI/UX Group",
            description: "Network and collaborate with designers via Slack.",
            link: "https://uxdesign.slack.com/",
            image: slackImage
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  h2 {
    text-shadow: 0px 0px 10px #ffc107;
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
  
  .btn-outline-warning {
    transition: all 0.3s ease-in-out;
  }
  
  .btn-outline-warning:hover {
    background-color: #ffc107;
    color: #111;
  }
  </style>
  