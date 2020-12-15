<template>


    <div class="block galleryBlock">
      <v-container>
    <h2 class="text-center">Gallery</h2>
    <v-row>
  <v-col
    v-for="item in items"
    :key="item.id"
    class="d-flex child-flex"
    cols="12" sm="4"
  >
    <v-img
      :src="item.src"
      aspect-ratio="1"
      class="grey lighten-2"
    >
      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </v-col>
</v-row>
  </v-container>
</div>

</template>

<script>
  export default {
    name: 'Gallery',

    data () {
      return {
        items: [
          {
            id: 1,
            src: require("../assets/images/1.jpg"),
          },
          {
            id: 2,
            src: require("../assets/images/2.jpeg"),

          },
          {
            id: 3,
            src: require("../assets/images/3.jpg"),
          },
          {
            id: 4,
            src: require("../assets/images/4.jpg"),

          },
          {
            id: 5,
            src: require("../assets/images/5.jpg"),
          },
          {
            id: 6,
            src: require("../assets/images/6.jpg"),
          },
          {
            id: 7,
            src: require("../assets/images/review1.jpg"),
          },
          {
            id: 8,
            src: require("../assets/images/review2.jpg"),
          },
          {
            id: 9,
            src: require("../assets/images/so2.jpg"),
          },
        ],
      }
    },
  }
</script>
