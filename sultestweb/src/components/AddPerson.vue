<template>
  <v-container fluid>
    <v-flex>
      <v-card>
        <v-card-text primary-title class="justify-center">
          <v-layout justify-center align-center column>
            <v-layout row class="justify-center ml-3 mr-3">
              <v-text-field v-model="entrynum" placeholder="Number in datasheet"/>
              <v-text-field v-model="fate" placeholder="Fate"/>
              <v-text-field v-model="regiment" placeholder="Regiment"/>
              <v-select v-model="state" :items="stateSelect" placeholder="State"/>
              <v-select v-model="company" :items="companySelect" placeholder="Company"/>
              <v-text-field v-model="rank" placeholder="Rank"/>
              <v-text-field v-model="lastname" placeholder="Last Name"/>
              <v-text-field v-model="firstname" placeholder="First Name"/>
              <v-text-field v-model="age" placeholder="Age"/>
              <v-select v-model="prison" :items="prisonSelect" placeholder="Prison"/>
              <v-text-field v-model="comments" placeholder="Comments"/>
            </v-layout>
            <v-btn rounded color="primary" dark v-on:click="click">Press to add to server</v-btn>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
import firebase from 'firebase';

  export default {
    name: 'AddPerson',

    data: () => ({
      stateSelect: [
        "Passenger",
        "Crew",
        "Guard - 58th Ohio Infantry",
        "Iowa Cavalry",
        "Illinois Infantry",
        "Indiana Artillery Battery",
        "Indiana Cavalry",
        "Indiana Infantry",
        "Kentucky Cavalry",
        "Kentucky Infantry",
        "Kentucky Light Artillery",
        "Kentucky Mounted Infantry",
        "Michigan Cavalry",
        "Michigan Engineers & Mechanics",
        "Michigan Infantry",
        "Michigan Light Artillery",
        "Michigan Sharpshooters",
        "New York Infantry",
        "Ohio Cavalry (McLaughlin)",
        "Ohio Cavalry",
        "Ohio Infantry",
        "Ohio Light Artillery",
        "Pennsylvania Cavalry",
        "Tennessee Cavalry",
        "Tennessee Infantry",
        "Tennessee Mounted Infantry",
        "United States Colored Troops",
        "Virginia (Louden County Virginia Rangers)",
        "West Virginia Cavalry",
        "West Virginia Infantry",
        "West Virginia Light Artillery"
      ],

      companySelect: [
        "F & S (Field and Staff)",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M"
      ],
      prisonSelect: [
        "Andersonville, GA",
        "Cahaba. AL",
        "City Jail, Eutaw, AL",
        "Macon, GA",
        "Marion, AL",
        "Meridian, MS",
        "Millen, GA",
        "Unknown",
        "N/A"
      ],
      entrynum: "",
      fate: "",
      regiment: "",
      state: "",
      company: "",
      rank: "",
      lastname: "",
      firstname: "",
      age: "",
      prison: "",
      comments: ""
    }),

    methods: {
      click: function () {

        var addPerson = firebase.functions().httpsCallable('addPerson');

        addPerson({
          entrynum: this.entrynum,
          fate: this.fate,
          regiment: this.regiment,
          state: this.state,
          company: this.company,
          rank: this.rank,
          lastname: this.lastname,
          firstname: this.firstname,
          age: this.age,
          prison: this.prison,
          comments: this.comments
        }).then(function(result) {
          var sanitizedMessage = result.data.text;
          alert(sanitizedMessage)
        });
      }
    }
  }
</script>
