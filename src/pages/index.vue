<template>
  <main>
    <div class="bg-blue-50 h-screen w-full p-10">
      <h1>Home Page</h1>
      <p>Welcome to {{ author.name }}'s new site</p>
      <!-- video grid container -->

      <!-- Footer -->
    </div>

  </main>
</template>

<script>
  import {onMounted, ref} from 'vue';
  
  // sanity
  import sanityClient from "../../sanity/sanity-config";
  import imageUrlBuilder from "@sanity/image-url";
  
  const imageBuilder = imageUrlBuilder(sanityClient);
  
  export default {
    name: "Author",
    setup() {
      onMounted(() => {
        fetchAuthor();
      })
      // const groqQuery = `*[ _type=='video']{
      //                 "video": video->name,
      //                 _id,
      //                 cover,
      //                 producedYear,
      //                 }`;
      const groqQuery = `*[_type == "author"]`
  
      let author = ref([])
  
      const imageUrlFor = (source) => {
        return imageBuilder.image(source);
      }
  
      function fetchAuthor() {
        sanityClient.fetch(groqQuery).then(
            results => {
              author.value = results[0];
            },
            error => {
              this.error = error;
            }
        );
          }
  
      return {
        author,
        imageUrlFor,
      }
    }
  
  }
  </script>