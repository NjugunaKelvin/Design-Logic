<template>
    <div class="container mt-5">
      <h2 class="text-center text-info fw-bold">UI/UX Resources</h2>
      <p class="text-center">Expand your UI/UX knowledge with these carefully curated resources.</p>
  
      <div class="row mt-4">
        <div class="col-md-6 col-lg-4 mb-4" v-for="(resource, index) in resources" :key="index">
          <div class="card shadow-sm h-100">
            <img :src="resource.image" class="card-img-top" alt="Resource">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ resource.title }}</h5>
              <p class="card-text flex-grow-1">{{ resource.description }}</p>
              <a :href="resource.link" target="_blank" class="btn btn-outline-info btn-sm">View Resource</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
  import bookImage from '@/assets/book.jpeg';
  import toolImage from '@/assets/tool.jpeg';
  import inspirationImage from '@/assets/inspiration.jpeg';
  
  export default {
    data() {
      return {
        resources: [
          {
            title: "The Design of Everyday Things",
            description: "A must-read book on human-centered design by Don Norman.",
            link: "https://www.goodreads.com/book/show/840.The_Design_of_Everyday_Things",
            image: bookImage
          },
          {
            title: "Figma",
            description: "A powerful UI/UX design tool for prototyping and collaboration.",
            link: "https://www.figma.com/",
            image: toolImage
          },
          {
            title: "Dribbble",
            description: "A platform for discovering the best UI/UX inspirations.",
            link: "https://dribbble.com/",
            image: inspirationImage
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  h2 {
    text-shadow: 0px 0px 10px #0dcaf0;
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
  
  .btn-outline-info {
    transition: all 0.3s ease-in-out;
  }
  
  .btn-outline-info:hover {
    background-color: #0dcaf0;
    color: #111;
  }
  </style>
  