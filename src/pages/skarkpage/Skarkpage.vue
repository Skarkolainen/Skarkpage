<template>
  <v-container class="skarkpage">
    <h1 class="heading secondary--text">Welcome to Skarkpage</h1>

    <v-container class="my-5">


<v-layout row class="mb-3">

  <v-btn small text color="grey mx-1" @click="sortBy('title')" >
    <v-icon left small>mdi-folder</v-icon>
    <span class="caption text-lowercase">By projectname</span>
  </v-btn>

  <v-btn small text color="grey" @click="sortBy('person')">
    <v-icon left small>mdi-account</v-icon>
    <span class="caption text-lowercase">By person</span>
  </v-btn>
  
</v-layout>



      <v-card
        text
        class="pa-3"
        v-for="project in projects"
        :key="project.title"
      >
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div text>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div text>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div text>{{ project.due }}</div>
          </v-flex>
          <v-flex xs4 sm4 md2>
            <div class="float-right">
              <v-chip small :class="`${project.status} white--text caption my-2`"> {{project.status}} </v-chip>
            </div>
          </v-flex>
        </v-layout>

      </v-card>

      <div v-if="false">
        <v-layout row wrap class="py-1">
          <v-flex xs12 md6>
            <v-btn outlined block>1</v-btn>
          </v-flex>
          <v-flex xs4 md2>
            <v-btn outlined block>2</v-btn>
          </v-flex>
          <v-flex xs4 md2>
            <v-btn outlined block>3</v-btn>
          </v-flex>
          <v-flex xs4 md2>
            <v-btn outlined block>4</v-btn>
          </v-flex>
        </v-layout>

        <v-layout row wrap justify-space-between class="py-1">
          <v-flex xs4 md3>
            <v-btn outlined block>1</v-btn>
          </v-flex>
          <v-flex xs4 md3>
            <v-btn outlined block>2</v-btn>
          </v-flex>
        </v-layout>
      </div>
    </v-container>

    <div v-if="false">
      <p class="red white--text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam,
        voluptatum modi debitis rem consequatur illo ratione earum. Suscipit rem
        voluptatem dignissimos tempora cumque doloribus obcaecati qui fuga,
        corrupti, laudantium culpa?
      </p>
      <p class="pink lighten-4 text--darken-4 red--text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati
        accusamus incidunt deserunt quaerat. Est quo hic, laudantium enim
        quibusdam eum dignissimos ullam? Vel quibusdam ut, repellat fugit libero
        maiores.
      </p>
      <h1 class="display-4">Massive display</h1>
      <h4 class="display-1">small display</h4>
      <p class="headline">This is a headline</p>
      <p class="subheading">This is a subheading</p>
      <p class="caption">this is a caption</p>

      <v-btn class="pink white--text">button</v-btn>
      <br />
      <br />
      <v-btn depressed dark color="pink">Click me</v-btn>
      <br />
      <br />
      <v-btn text color="pink">click</v-btn>

      <br />
      <br />
      <v-btn depressed large class="pink white--text">
        <v-icon left large>mdi-email</v-icon>
        <span> email me</span>
      </v-btn>
    </div>


    <br />
    <dato-tid v-if="false"></dato-tid>
  </v-container>
</template>

<script>
import DatoTid from "../../components/content/DatoTid.vue";


export default {
  data() {
    return {
      links: [
        "https://ssense.github.io/vue-carousel/examples/",
        "https://madewithvuejs.com/blog/top-vue-js-slider-components",
        "https://github.com/gs-shop/vue-slick-carousel",
      ],
      projects: [
        {
          title: "Design a new website",
          person: "The Net Ninja",
          due: "1st Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Code up the homepage",
          person: "Chun Li",
          due: "10th Jan 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Design video thumbnails",
          person: "Ryu",
          due: "20th Dec 2018",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Create a community forum",
          person: "Gouken",
          due: "20th Oct 2018",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
      ],
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  },
  components: {
    DatoTid,
  
  },
};
</script>

<style >
.project.complete {
  border-left: 6px solid forestgreen;
}

.project.ongoing {
  border-left: 6px solid orange;
}

.project.overdue {
  border-left: 6px solid tomato;
}

.v-chip.complete {
  background-color: forestgreen !important;;
}

.v-chip.ongoing {
  background: orange !important;
}

.v-chip.overdue {
  background:  tomato !important;;
}



</style>
