import { api, requestConfig } from '../utils/config';

const register = async (data) => {
    const config = requestConfig("POST", data);

    try {
        const response = await fetch(api + "/users/register", config);

        if (!response.ok) {
            throw new Error(`Erro ao registrar usuário: ${response.status}`);
        }

        const user = await response.json();
        localStorage.setItem("user", JSON.stringify(user));
        return user;
    } catch (error) {
        console.error("Erro durante o registro:", error);
        throw error; // Rejeitar o erro para que seja tratado no chamador da função
    }
};

const authService = {
    register,
};

export default authService;
