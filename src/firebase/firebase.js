// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "expensify-b7171.firebaseapp.com",
  databaseURL: "https://expensify-b7171-default-rtdb.firebaseio.com",
  projectId: "expensify-b7171",
  storageBucket: "expensify-b7171.appspot.com",
  messagingSenderId: "684944952542",
  appId: "1:684944952542:web:61e01daca8b341dd21064f"  
};


const app = firebase.initializeApp(firebaseConfig);
const database=firebase.database();
const googleAuthProvider=new firebase.auth.GoogleAuthProvider()
export {firebase,googleAuthProvider, database as default};
database.ref("expenses").on("child_changed",(snapshot)=>{
    console.log(snapshot.key,snapshot.val())
})

/*database.ref("expenses").on("value",(snapshot)=>{
    const expenses=[];
    snapshot.forEach((expense)=>{
        expenses.push({
            id:expense.key,
            ...expense.val()
        })
    })
    console.log(expenses);
}
)*/
/*database.ref("expenses").push({
    description:"d1",
    note:"",
    amount:500
})*/

/*database.ref().on("value",(snapshot)=>{
    const data=snapshot.val();
    console.log(data.name +"is a "+data.job.title+" at "+data.location.city)
},(e)=>{
    console.log("Error in Fetching data")
})*/
/*database.ref().set({
    name:"Faizan Saleem",
    age:21,
    stresssLevel: 6,
    job:{
        title:"Software Developer",
        company: "Google"
    },
    location:{
        city:"Lahore",
        country:"Pakistan"
    }
}).then(()=>{
    console.log("Values Set")
}).catch((e)=>{
    console.log("i Failed");
})*/
/*database.ref("attributes").set({
    height:"6.1 ft",
    weight:"90"
}).then(()=>{
    console.log("Values Set")
}).catch((e)=>{
    console.log("i Failed");
});
*/
database.ref().update({
    stresssLevel:9,
    "job/company":"Amazon",
    "location/city":"Karachi"
})