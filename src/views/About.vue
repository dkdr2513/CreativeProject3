<template>
  <v-content>
  <div class="staticHero">
  <v-img
    :aspect-ratio="16/9"
    :width="width"
    :height="590"
    src="../assets/images/bg.png"
  >
    <v-row align="end" class="lightbox white--text pa-2 fill-height">
      <v-col>
        <v-container>
        <div class="headline">About Me</div></v-container>

      </v-col>
    </v-row>
  </v-img>
  </div>
  <div class="block">
<v-container>
<p>We will grade your projects based on:

you used Vue and the Vue CLI for the entire site
you have three pages
you have detailed mock data
how well you follow web design principles: spacing, typography, color, consistency, and responsive design.
TAs will assign scores in these ranges:

90-100: Excellent use of Vue, clearly follows web design principles
80-90: Uses Vue, good effort was made, but needs work to more clearly present the data or follow web design principles
70-80: Fulfills the minimum requirement of using Vue, but does not make a strong effort to use it well or follow web design principlesFor this lab, you will create a website that uses Vue for the front end and Node, Express, and Mongo for the back end. The front end should use an API to communicate with the back end, including creating, reading, updating, and deleting data stored on the back end. This website can be for anything you want, but should not be similar to the Vue apps we have already built so far. You must create your own original work. Your creative projects can build on each other.</p>
</v-container>
  </div>
  <div class="block">
  <v-container>
  <h2 class="text-center">My Selfies</h2>
  <v-row>
  <v-col cols="12" md="4" v-for="item in items" :key="item.id" >
  <v-card flat
    class="mx-auto"
  >
    <v-img
      class="white--text align-end"
      :src="item.src"
    >
    </v-img>

    <v-card-text class="text--primary text-center">
      <div class="title">{{item.name}}</div>
      <p>{{item.title}}</p>
    </v-card-text>

  </v-card>
  </v-col>
  </v-row>
  </v-container>
  </div>
  </v-content>
</template>

<script>
export default {
  name: 'About',

  data() {
    return {
      items: [
        {
          id: 1,
          src: require("../assets/images/1.jpg"),
          name: 'Durumi',
          title: 'HAHA'
        },
        {
          id: 1,
          src: require("../assets/images/2.jpeg"),
          name: '1997 09 13',
          title: 'Mountain Dew'
        },
        {
          id: 1,
          src: require("../assets/images/3.jpg"),
          name: 'KingRimi',
          title: 'HAHA'
        },
      ]
    };
  }
}
</script>
