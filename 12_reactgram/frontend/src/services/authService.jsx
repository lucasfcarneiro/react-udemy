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
        console.error("Erro durante o registro:", error);
        throw error; // Rejeitar o erro para que seja tratado no chamador da função
    }
};

const authService = {
    register,
};

export default authService;
