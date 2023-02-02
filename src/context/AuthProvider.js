import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import toast from 'react-hot-toast';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create User sing in --->
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }



    // lon in in user 
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // updateUserProfile 
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }


    // logOut 
    const lotOut = () => {
        setLoading(true)
        toast.success('Successfully Log Out. [Good Job]')
        return signOut(auth)
    }


    // google sing in 
    const googleSingIn = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    // signInWithRedirect(auth, provider); --->



    const githubSingIn = (gitProvider) => {
        setLoading(true)
        return signInWithPopup(auth, gitProvider)
    }



    // onAuthStateChanged [useffect modde use korte hobe----->]

    useEffect(() => {
        const unSubcribed = onAuthStateChanged(auth, currentUser => {
            console.log('OnAuthstateChanged uffect:', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubcribed()
        }
    }, []);


   





    const authInfo = {
        user,
        createUser,
        updateUserProfile,
        lotOut,
        logIn,
        googleSingIn,
        githubSingIn,
        theme,
        toggleTheme
    }





    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;