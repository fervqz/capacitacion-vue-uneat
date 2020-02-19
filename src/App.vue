<template>
  <v-app>
    <v-app-bar color="primary" dark>
      <v-toolbar-title>Recetas</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/recipe-search">
        <v-btn text>Búsqueda</v-btn>
      </router-link>
      <router-link to="/advanced-recipe-search">
        <v-btn text>Búsqueda Avanzada</v-btn>
      </router-link>
      <router-link to="/text-extractor">
        <v-btn text>Extractor</v-btn>
      </router-link>
    </v-app-bar>
    <v-app>
      <router-view></router-view>
    </v-app>
  </v-app>
</template>