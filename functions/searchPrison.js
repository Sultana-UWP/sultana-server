const admin = require('firebase-admin');

module.exports = async (data, context) => {
    let peopleRef = admin.firestore().collection('people')
    return peopleRef.where('prison', '==', data.prison).get().then(querySnapshot => {
        return querySnapshot.docs.map(doc => doc.data())
    })
}
