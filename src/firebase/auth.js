import { signInWithEmailAndPassword } from 'firebase/auth';
// eslint-disable-next-line import/named
import { auth } from './config';

const loginApi = async (email, password) => {
  let userData;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const { user } = userCredential;
      userData = user.uid;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  return userData;
};

// eslint-disable-next-line import/prefer-default-export
export { loginApi };
