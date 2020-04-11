<template>
  <v-container fluid>
    <v-flex>
        <v-card>
            <v-card-text primary-title class="justify-center">
                <v-layout justify-center align-center column>
                    <img id="URLtext"/>
                    <v-btn rounded color="primary" dark v-on:click="onDownload">Press to Download Image</v-btn>
                </v-layout>
            </v-card-text>
        </v-card>
    </v-flex>
  </v-container>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'Download',
    data() {
        return {
            
        }
    },
    methods: {
        onDownload() {
            var storage = firebase.storage();
            var gsReference = storage.refFromURL('gs://sultana-7f06a.appspot.com');

            gsReference.child('People/weenie.jpg').getDownloadURL()
            .then(function(url) {
                document.getElementById('URLtext').src = url;
            })
        }
    }
}
</script>
