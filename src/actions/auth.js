import  { firebase,googleAuthProvider  } from "../firebase/firebase"


export const login=(uid)=>{
    return {
        type:"LOGIN",
        uid
    }
}
export const logout=()=>{
    return {
        type:"LOGOUT"
    }
}
export const startLogin=()=>{
    return ()=>{
        console.log("start login",firebase.auth())
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}
export const startLogout=()=>{
    return ()=>{
        return firebase.auth().signOut();
    }
}