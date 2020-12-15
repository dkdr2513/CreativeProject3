<template>


    <div class="block latestPostBlock">
      <v-container>
    <h2 class="text-center">Latest Post</h2>
    <v-row>
    <v-col cols="12" md="4" v-for="item in items" :key="item.id">
    <v-card outlined
    class="mx-auto"

  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="item.src"
    >
      <v-card-title>{{item.title}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      {{item.subtitle}}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{item.description}}</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn text
        More
      >
        Share
      </v-btn>

    </v-card-actions>
  </v-card>
  </v-col>
  </v-row>
    </v-container>
</div>

</template>

<script>
  export default {
    name: 'LatestPost',

    data () {
      return {
        items: [
        {
     id: 1,
     title: "Top western road trips",
     subtitle: "1,000 miles of wonder",
     description: "His ubique laboramus ne. Expetenda assueverit sed ad. Id nec malis lucilius delicatissimi. Nec assum sonet suscipit ex, diam deterruisset ut usu, ad dicat fabellas aliquando eam.",
     src: require("../assets/images/iu.jpg")
   },
   {
     id: 2,
     title: "Christmas tales to read",
     subtitle: "2,000 miles of wonder",
     description: "Sea ad habemus assueverit, omnes platonem convenire sit et, at integre pericula quo. Facete adolescens definitionem cu qui, in putant aliquid fierent ius.",
     src: require("../assets/images/2.jpeg")
   },
   {
     id: 3,
     title: "20 movies not to miss in 2020",
     subtitle: "3,000 miles of wonder",
     description: "Aliquam albucius mei ei, debitis torquatos et pro, eos natum scribentur no. Putant verear constituto te qui. Adolescens persequeris vim ei. Vel nullam reprimique te.",
     src: require("../assets/images/view1.jpg")
   },
        ],
      }
    },
  }
</script>
