import { getAuth, signInWithEmailAndPassword, UserCredential } from "firebase/auth"
import { app } from "../firebase"

const loginWithEmailAndPassword = (email: string, password: string) => {
  return new Promise<UserCredential>((resolve, reject) => {
    try {
      const auth = getAuth(app)
      const user = signInWithEmailAndPassword(auth, email, password)
      resolve(user)
    }catch(e){
      reject(e)
    }
  })
}

export {
  loginWithEmailAndPassword
}