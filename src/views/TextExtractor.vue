<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <v-row>
          <v-col>
            <h1 class="headline mb-3">Extractor de ingredientes en texto</h1>
            <v-textarea v-model="text" solo name="input-7-4" label="Solo textarea" ></v-textarea>
            <v-btn block color="primary" @click="search()">Analizar</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-chip
              v-for="result in results"
              class="ma-2"
              color="primary"
              v-bind:key="result.annotation"
            >{{result.annotation}}</v-chip>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  name: "TextExtractor",
  data() {
    return {
      text: "",
      results: []
    };
  },
  watch: {
    text(){
      console.log(this.text);
    }
  },
  methods: {
    async search() {
      const url = `https://api.spoonacular.com/food/detect?apiKey=424d860bb0ab4c0792e8d2575e6258c7`;
      this.resutls = await axios
        .post(url, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: {
            value: this.text
          }
        })
        .then(res => console.log(res.data.annotations) || res.data.annotations)
        .then(res => res)
        .catch(err => console.log(err));
    }
  }
};
</script>