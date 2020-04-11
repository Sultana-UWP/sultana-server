const admin = require('firebase-admin');
const uuidv4 = require('uuid/v4');

module.exports = async (data, context) => {
    let peopleRef = admin.firestore().collection('people')
    return peopleRef.get().then(querySnapshot => {
        return querySnapshot.docs.map(doc => doc.data())
    })
}
