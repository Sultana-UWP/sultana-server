const admin = require('firebase-admin');
const uuidv4 = require('uuid/v4');

module.exports = async (data, context) => {
    try {
        let uuid = uuidv4();
        console.log(uuid);
    
        return await admin.firestore().collection('people').doc(uuid).set({
            entrynum: data.entrynum,
            fate: data.fate,
            regiment: data.regiment,
            state: data.state,
            company: data.company,
            rank: data.rank,
            lastname: data.lastname,
            firstname: data.firstname,
            age: data.age,
            prison: data.prison,
            comments: data.comments
        })

        .then(response => {
            return response
        })
        .catch(function(error) {
            console.log('Error while adding document: ', error)
            return 400
        })
    } catch(err) {
        console.log('Error ocurrent while executing', err)
    }
}
