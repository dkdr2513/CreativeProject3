<template>
    <div class="heroBlock">
    <v-carousel hide-delimiters cycle>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
    <v-row
         class="fill-height title hidden-xs-only"
         align="center"
         justify="center"
       >
         <div>
           {{ item.title }}
         </div>
       </v-row></v-carousel-item>
  </v-carousel>
    </div>
</template>

<script>
  export default {
    name: 'Hero',

    data () {
      return {
        items: [
          {
            src: require("../assets/images/5.jpg"),
            title: "CS 260 Creative Project 3"
          },
          {
            src: require("../assets/images/mal2.jpg"),
            title: "CS 260"
          },
          {
            src: require("../assets/images/mal3.jpg"),
            title: "Creative Project 3"
          },
          {
            src: require("../assets/images/so1.jpg"),
            title: "So dae Jang"
          },
          {
            src: require("../assets/images/so2.jpg"),
            title: "Photo Book"
          },
        ],
      }
    },
  }
</script>
