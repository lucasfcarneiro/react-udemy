import { api, requestConfig } from '../utils/config';

//Register an user
const register = async (data) => {
    const config = requestConfig("POST", data);

    try {
        const response = await fetch(api + "/users/register", config)
            .then((response) => response.json())
            .catch((err) => err)

        if (response) {
            localStorage.setItem("user", JSON.stringify(response));
        }
        return response;

    } catch (error) {
        console.log(error)
    }
};

//Logout an user by removing the token 
const logout = () => {
    localStorage.removeItem("user")
};

const authService = {
    register,
    logout,
};

export default authService;
