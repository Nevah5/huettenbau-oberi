import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { app } from "../firebase"

const auth = getAuth(app);

const loginWithEmailAndPassword = (email: string, password: string): Promise<string | void> => {
  return new Promise<string | void>((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        console.log(data);
        resolve()
      })
      .catch((e) => {
        let errorMessage = "";
        switch(e.code){
          case "auth/invalid-email":
            errorMessage = "Ungültige Email Adresse"
            break;
          case "auth/user-not-found":
            errorMessage = "Benutzer nicht gefunden"
            break;
          case "auth/wrong-password":
            errorMessage = "Passwort inkorrekt"
            break;
          case "auth/user-disabled":
            errorMessage = "Dieser Benutzer wurde ausgeschaltet"
            break;
          default:
            errorMessage = "Etwas ist schief gelaufen!"
            console.log(e);
        }
        reject(errorMessage);
      })
  })
}

const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
  .then((data) => {
    console.log(data);
    
  })
  .catch((e) => {
    console.log(e);
    
  })
}

export {
  loginWithGoogle,
  loginWithEmailAndPassword
}