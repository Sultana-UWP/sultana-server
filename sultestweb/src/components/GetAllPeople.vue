<template>
    <v-card class="ml-2 mr-2">
        <v-card-title primary-title class="justify-center">
            Search All People
            <div class="flex-grow-1"></div>
            <v-text-field 
            v-model="search" 
            append-icon="search"
            v-on:keyup.enter="searchPeople" 
            label="Search" 
            single-line 
            hide-details
            ></v-text-field>
        </v-card-title>
        <v-data-table 
        :headers="headers" 
        :items="people" 
        :search="search" 
        :items-per-page="10"
        class="elevation-1"
        single-select
        :must-sort="true"
        sort-by="lastname"
        :loading="loading"
        loading-text="Loading... Please Wait"
        ></v-data-table>
    </v-card>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'ViewPerson',
    data: () => ({
        loading: false,
        search: '',
        people: [],
        headers: [
            {
                text: 'Number',
                align: 'left',
                sortable: true,
                value: 'entrynum'
            },
            {
                text: 'Fate',
                align: 'left',
                sortable: true,
                value: 'fate'
            },
            {
                text: 'Regiment',
                align: 'left',
                sortable: true,
                value: 'regiment'
            },
            {
                text: 'State',
                align: 'left',
                sortable: true,
                value: 'state'
            },
            {
                text: 'Company',
                align: 'left',
                sortable: true,
                value: 'company'
            },
            {
                text: 'Rank',
                align: 'left',
                sortable: true,
                value: 'rank'
            },
            {
                text: 'Last Name',
                align: 'left',
                sortable: true,
                value: 'lastname'
            },
            {
                text: 'First Name',
                align: 'left',
                sortable: true,
                value: 'firstname'
            },
            {
                text: 'Age',
                align: 'left',
                sortable: true,
                value: 'age'
            },
            {
                text: 'Prison',
                align: 'left',
                sortable: true,
                value: 'prison'
            },
            {
                text: 'Comments',
                align: 'left',
                sortable: true,
                value: 'comments'
            },
        ],
    }),

    methods: {
        searchPeople: function () {
            this.loading = true;

            var getAllPeople = firebase.functions().httpsCallable('getAllPeople');
            getAllPeople({
                entrynum: this.search,
            })
            .then(response => {
                response.data.forEach(doc => {
                    this.people.push(doc);
                });
                this.loading = false
            })
        }
    }
}
</script>
