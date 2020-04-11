<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Download/>
      <Upload/>
      <AddPerson/>
      <Search/>
      <GetAllPeople/>
    </v-content>
  </v-app>
</template>

<script>
import AddPerson from './components/AddPerson';
import GetAllPeople from './components/GetAllPeople';
import Search from './components/Search';
import Upload from './components/Upload';
import Download from './components/Download';

const firebase = require("firebase");
require("firebase/functions");
if(!firebase.apps.length){
    firebase.initializeApp({
    apiKey: 'AIzaSyAGrITGacZZagx9nXTYl7kLqWPpQ9AFYbM',
    authDomain: 'sultana-7f06a.firebaseapp.com',
    projectId: 'sultana-7f06a',
    databaseURL: 'https://sultana-7f06a.firebaseio.com',
    appId: '1:1005050625285:web:22295527eb8ab870ffcb6c',
    storageBucket: 'gs://sultana-7f06a.appspot.com'
  });
}

export default {
  name: 'App',

  components: {
    AddPerson,
    GetAllPeople,
    Search,
    Upload,
    Download
  },

  data: () => ({
    //
  }),
};
</script>