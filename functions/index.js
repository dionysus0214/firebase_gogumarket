const functions = require("firebase-functions");
var admin = require('firebase-admin');
var serviceAccount = require('./gogumarket.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

exports.hello = functions.region('asia-northeast3').https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("안녕하세요");
});

exports.createAlert = functions.region('asia-northeast3')
.firestore.document('chatroom/{docid}').onCreate((snapshot)=>{
  var who = snapshot.data().who;
  
  db.collection('user').doc(who[0]).update({ alert: '상대방이 채팅을 희망합니다.' })
  db.collection('user').doc(who[1]).update({ alert : '상대방이 채팅을 희망합니다.' })
}); 