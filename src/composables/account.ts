import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, User } from "firebase/auth"
import { auth } from "../firebase"

const loginWithEmailAndPassword = (email: string, password: string): Promise<string | void> => {
  return new Promise<string | void>((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        resolve()
      })
      .catch((e) => {
        let errorMessage = ""
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
            errorMessage = "Dieser Benutzer wurde deaktiviert"
            break;
          default:
            errorMessage = "Etwas ist schief gelaufen!"
            console.log(e)
        }
        reject(errorMessage)
      })
  })
}

const loginWithGoogle = () => {
  return new Promise<string | void>((resolve, reject) => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then(() => {
        resolve()
      })
      .catch((e) => {
        console.log(e)
        reject("Etwas ist schief gelaufen!")
      })
  })
}

const isGoogleAccount = () => {
  const user = loggedInUser()
  if(user!.providerData[0].providerId === 'google.com') return true;
  return false;
}

const loggedInUser = (): User | null => {
  return auth.currentUser
}

const logoutUser = async (): Promise<void> => {
  await auth.signOut()
}

export {
  isGoogleAccount,
  logoutUser,
  loginWithGoogle,
  loggedInUser,
  loginWithEmailAndPassword
}