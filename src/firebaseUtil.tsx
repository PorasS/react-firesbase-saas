import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {
    //  add configuration here
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const createUserProfileDocument = async (userCredential: any, state: any) => {
    if (!userCredential) {
        return;
    }

    const userRef = firestore.doc(`users/${userCredential.uid}`);

    const userSnapshot = await userRef.get();

    if (!userSnapshot.exists) {
        const { email } = userCredential;
        const createdAt: Date = new Date();

        try {
            const { firstName, lastName, email, organization, phone, role } = state;
            await userRef.set({
                firstName,
                lastName,
                email,
                organization,
                role,
                phone
            });
        } catch (error) {
            console.error("issue in storing the user details:");
        }

    }
    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();