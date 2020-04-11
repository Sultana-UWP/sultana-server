const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const addPerson = require('./addPerson');
const getAllPeople = require('./getAllPeople');
const searchFirst = require('./searchFirst');
const searchLast = require('./searchLast');
const searchCompany = require('./searchCompany');
const searchPrison = require('./searchPrison');
const searchState = require('./searchState');
const searchUnitNumber = require('./searchUnitNumber');

module.exports = {
    'addPerson': functions.https.onCall(addPerson),
    'getAllPeople': functions.https.onCall(getAllPeople),
    'searchFirst': functions.https.onCall(searchFirst),
    'searchLast': functions.https.onCall(searchLast),
    'searchCompany': functions.https.onCall(searchCompany),
    'searchPrison': functions.https.onCall(searchPrison),
    'searchState': functions.https.onCall(searchState),
    'searchUnitNumber': functions.https.onCall(searchUnitNumber)
}