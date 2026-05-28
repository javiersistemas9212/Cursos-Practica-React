



import React, { createContext, useState, useContext, useEffect } from 'react';
import { COURSES_USERS } from '../data/courseUsers';

const AuthContext = createContext(null);


export function AuthProvider({ children }){

    const [ user, setUser ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    
    useEffect(() =>{
        const savedUser = localStorage.getItem('course_user');

        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
    },[])

    const login = (email,pass) => {

        if(email && pass){
        
            const userData = COURSES_USERS.find(x => x.email == email && x.pass == pass);

            if(!userData){
                 return false;
            }

            setUser(userData);
            localStorage.setItem('course_user', JSON.stringify(userData));
            return true;
        }
        return false;
    };

     const logout = () => {
       setUser(null);
       localStorage.removeItem('course_user');    
    };

    return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
    );

}

export function useAuth() {
  return useContext(AuthContext);
}
