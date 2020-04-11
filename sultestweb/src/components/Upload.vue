<template>
  <v-container fluid>
    <v-flex>
        <v-card>
            <v-card-text primary-title class="justify-center">
            <v-layout justify-center align-center column>
                <v-layout row class="justify-center ml-3 mr-3">
                    <div>
                        <p>Upload an image to Firebase:</p>
                        <input type="file" accept="image/*">
                    </div>
                </v-layout>
                <v-btn rounded color="primary" dark v-on:click="onUpload">Press to Upload Image</v-btn>
            </v-layout>
            </v-card-text>
        </v-card>
    </v-flex>
  </v-container>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'Upload',
    data() {
        return {
            imageData: null
        }
    },
    methods: {
        onUpload() {
            var file = null;
            var storageRef = firebase.storage().ref();
            var peopleRef = storageRef.child('People/' + this.imageData.name)
            file = this.imageData;

            peopleRef.put(file)
            .then(function(snapshot) {
                console.log('File uploaded', snapshot);
            })
        }
    }
}
</script>
