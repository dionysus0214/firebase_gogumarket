const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.hello = functions.region('asia-northeast3').https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("안녕하세요");
});

exports.createAlert = functions.region('asia-northeast3')
.firestore.document('chatroom/{docid}').onCreate((snapshot, context)=>{
  var product = snapshot.data().product;
  var who= snapshot.data().who;
  
  db.collection('user').doc(who[0]).update({ alert: '어떤놈이 채팅검' })
  db.collection('user').doc(who[1]).update({ alert : '어떤놈이 채팅검' })
}); 