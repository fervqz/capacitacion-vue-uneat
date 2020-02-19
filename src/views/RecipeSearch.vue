<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <h1 class="headline">Búsqueda de recetas</h1>
        <v-text-field value="Burger" label="Buscar receta"  v-model="term" solo></v-text-field>
        <v-btn block color="primary" @click="search()">BUSCAR</v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="6">
        <v-card class="mb-5" v-for="recipe in recipes" v-bind:key="recipe.id">
          <v-img class="white--text align-end" height="200px" :src="recipe.image">
            <v-card-title>{{recipe.title}}</v-card-title>
          </v-img>
          <v-card-text>
            <p>Tiempo de preparación: {{recipe.readyInMinutes}} min.</p>
            <p>Porciones: {{recipe.servings}}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  name: "RecipeSearch",
  data() {
    return {
      term: "",
      recipes: []
    };
  },
  methods: {
    async search() {
      const url = `https://api.spoonacular.com/recipes/search?apiKey=424d860bb0ab4c0792e8d2575e6258c7&query=${this.term}&number=10`;
      this.recipes = await axios
        .get(url)
        .then(res => console.log(res.data.results) || res)
        .then(response => response.data.results)
      this.formatImagesUrl();
    },
    formatImagesUrl() {
      this.recipes = this.recipes.map(r => {
        const buff = { ...r };
        buff.image = `https://spoonacular.com/recipeImages/${r.image
          .split("-")
          .reverse()[0]
          .replace(".jpg", "")}-556x370.jpg`;
        return buff;
      });
    }
  }
};
</script>