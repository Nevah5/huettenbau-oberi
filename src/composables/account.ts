import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  User,
  updateProfile,
  updateEmail,
  updatePassword,
  linkWithPopup,
  unlink,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../firebase";

interface Userdata {
  displayName: string;
}

/**
 * Logs into an account.
 * @param email string
 * @param password string
 * @returns Error Message when error, else void
 */
const loginWithEmailAndPassword = (
  email: string,
  password: string
): Promise<string | void> => {
  return new Promise<string | void>((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        resolve();
      })
      .catch((e) => {
        let errorMessage = "";
        switch (e.code) {
          case "auth/invalid-email":
            errorMessage = "Ungültige Email Adresse";
            break;
          case "auth/user-not-found":
            errorMessage = "Benutzer nicht gefunden";
            break;
          case "auth/wrong-password":
            errorMessage = "Passwort inkorrekt";
            break;
          case "auth/user-disabled":
            errorMessage = "Dieser Benutzer wurde deaktiviert";
            break;
          default:
            errorMessage = "Etwas ist schief gelaufen!";
            console.log(e);
        }
        reject(errorMessage);
      });
  });
};

/**
 * Opens popup to authenticate with google login.
 * @returns Error Message when error, else void
 */
const loginWithGoogle = () => {
  return new Promise<string | void>((resolve, reject) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        updateUserdataFirestore().then(() => resolve());
      })
      .catch((e) => {
        console.log(e);
        reject("Etwas ist schief gelaufen!");
      });
  });
};

/**
 * Checks if the account has Password login.
 * @returns boolean
 */
const hasPasswordLogin = (): boolean => {
  const user = loggedInUser();
  if (user!.providerData.find((obj) => obj.providerId === "password"))
    return true;
  return false;
};

/**
 * Gives the current logged in user back.
 * @returns User
 */
const loggedInUser = (): User | null => {
  return auth.currentUser;
};

/**
 * Signs out of firebase auth.
 */
const logoutUser = async (): Promise<void> => {
  await auth.signOut();
};

/**
 * Changes the displayname of the account.
 * @param newDisplayName string
 * @returns Promise
 */
const changeDisplayName = (newDisplayName: string): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    updateProfile(auth.currentUser!, {
      displayName: newDisplayName,
    })
      .then(() => {
        updateUserdataFirestore().then(() => {
          resolve();
        });
      })
      .catch((e) => {
        console.log(e);
        reject();
      });
  });
};

/**
 * Changes the email of a account, automatically sends mail to old email that email was changed.
 * @param newEmail string
 * @returns Error message if error, else void
 */
const changeEmail = (newEmail: string): Promise<void | string> => {
  return new Promise<void | string>((resolve, reject) => {
    updateEmail(auth.currentUser!, newEmail)
      .then(() => {
        resolve();
      })
      .catch((e) => {
        switch (e.code) {
          case "auth/requires-recent-login":
            reject("Logge dich erneut ein und versuche es dann nochmals.");
            break;
          default:
            console.log(e);
            reject("Etwas ist schief gelaufen!");
        }
      });
  });
};

/**
 * Changes the password of a emailAndPassword user.
 * @param currentPassword
 * @param newPassword
 * @returns
 */
const changePassword = (
  currentPassword: string,
  newPassword: string
): Promise<void | string> => {
  return new Promise<void | string>((resolve, reject) => {
    loginWithEmailAndPassword(auth.currentUser!.email!, currentPassword)
      .then(() => {
        updatePassword(auth.currentUser!, newPassword)
          .then(() => {
            resolve();
          })
          .catch((e) => {
            switch (e.code) {
              case "auth/weak-password":
                reject("Das Passwort muss mindestens 6 Zeichen lang sein.");
                break;
              default:
                console.log(e);
                reject("Etwas ist schief gelaufen");
            }
          });
      })
      .catch((errMsg) => {
        reject(errMsg);
      });
  });
};

/**
 * Adds the emailAndPassword provider to a users account.
 * @param newPassword string
 * @returns error message when error, else void
 */
const addPassword = (newPassword: string): Promise<void | string> => {
  return new Promise<void | string>((resolve, reject) => {
    updatePassword(auth.currentUser!, newPassword)
      .then(() => {
        resolve();
      })
      .catch((e) => {
        switch (e.code) {
          case "auth/requires-recent-login":
            reject("Logge dich erneut ein und versuche es dann nochmals.");
            break;
          case "auth/weak-password":
            reject("Das Passwort muss mindestens 6 Zeichen lang sein.");
            break;
          default:
            console.log(e);
            reject("Etwas ist schief gelaufen!");
        }
      });
  });
};

/**
 * Links google account to currentUser auth.
 * @returns error message when error, else void
 */
const linkGoogleAccount = (): Promise<void | string> => {
  return new Promise<void | string>((resolve, reject) => {
    const provider = new GoogleAuthProvider();
    linkWithPopup(auth.currentUser!, provider)
      .then(() => {
        resolve();
      })
      .catch((e) => {
        switch (e.code) {
          case "auth/credential-already-in-use":
            reject("Dieser Account wird bereits benutzt.");
            break;
          default:
            console.log(e);
            reject("Etwas ist schief gelaufen.");
        }
      });
  });
};

/**
 * Unlinks the googleaccount from currentUser auth.
 * @returns error message when error, else void
 */
const unlinkGoogleAccount = (): Promise<void | string> => {
  return new Promise<void | string>((resolve, reject) => {
    unlink(auth.currentUser!, "google.com")
      .then(() => {
        resolve();
      })
      .catch((e) => {
        console.log(e);
        reject("Etwas ist schief gelaufen.");
      });
  });
};

/**
 * Sets the users data in the cloud firestore for the frontend to fetch other user's data.
 * This function is private.
 * @returns void
 */
const updateUserdataFirestore = (): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    const user = auth.currentUser;
    if (!user) {
      console.error("User not logged in.");
      reject();
    }
    setDoc(doc(firestore, `/users/${user?.uid}`), {
      displayName: user?.displayName,
    })
      .then(() => resolve())
      .catch((e) => {
        console.log(e);
        reject();
      });
  });
};

const getUserdata = (userId: string): Promise<void | Userdata> => {
  return new Promise<void | Userdata>((resolve, reject) => {
    getDoc(doc(firestore, `users/${userId}`))
      .then((data) => {
        const userdata: Userdata = data.data() as Userdata;
        resolve(userdata);
      })
      .catch((e) => {
        console.log(e);
        reject();
      });
  });
};

export {
  unlinkGoogleAccount,
  linkGoogleAccount,
  addPassword,
  changePassword,
  changeDisplayName,
  changeEmail,
  hasPasswordLogin,
  logoutUser,
  loginWithGoogle,
  loggedInUser,
  loginWithEmailAndPassword,
  getUserdata,
  Userdata,
};
