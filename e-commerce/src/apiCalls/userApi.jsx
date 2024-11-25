import { API } from "../config";

export const register = async (user) => {
    // user:{username, email, password}
    try {
        const response = await fetch(`${API}/api/register`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        return await response.json();
    } catch (error) {
        return console.log(error);
    }
}


//verifyuser
export const verifyUser = async (token) => {
    try {
        const response = await fetch(`${API}/api/verifyuser/${token}`);
        return await response.json();
    } catch (error) {
        return console.log(error);
    }
 }

 //login
export const login = async (user) => {
    try {
        const response = await fetch(`${API}/api/login`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        return await response.json();
    } catch (error) {
        return console.log(error);
    }
}