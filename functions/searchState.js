const admin = require('firebase-admin');

module.exports = async (data, context) => {
    let peopleRef = admin.firestore().collection('people')
    return peopleRef.where('state', '==', data.state).get().then(querySnapshot => {
        return querySnapshot.docs.map(doc => doc.data())
    })
}
