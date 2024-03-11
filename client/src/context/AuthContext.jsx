// import { createContext, useReducer } from 'react'

// export const AuthContext = createContext()

// export const authReducer = (state, action) => {
//     switch (action.type) {
//         case 'LOGIN':
//             return {
//                 user: action.payload
//             }
//         case 'LOGOUT':
//             return { user: null }
//         default:
//             return state;
//     }
// }

// export const AuthContextProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(authReducer, {
//         user: null
//     })

//     console.log('AuthContext state:', state);

//     return (
//         <AuthContext.Provider value={{ ...state, dispatch }}>
//             {children}
//         </AuthContext.Provider>
//     )
// }


import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  // Initialize auth state from localStorage (if it exists)
  const [auth, setAuth] = useState(() => {
    const storedAuth = localStorage.getItem("auth");
    return storedAuth ? JSON.parse(storedAuth) : {};
  });

  // Store auth state in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

