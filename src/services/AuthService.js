import { AUTHORIZATION } from '../consts/enum';
import api from '../http/axios';

class AuthService {
    api = null;

    constructor(api) {
        this.api = api;
    }

    async signIn({ email, password }) {
        try {
            const { data } = await this.api.post('/auth/sign-in', { email, password });
            this.saveToken(AUTHORIZATION.ACCESS_TOKEN, data.token);
        } catch (error) {
            throw error.response.data;
        }
    }

    async signUp({ email, password }) {
        try {
            const { data } = await this.api.post('/auth/sign-up', { email, password });
            this.saveToken(AUTHORIZATION.ACCESS_TOKEN, data.token);
        } catch (error) {
            throw error.response.data;
        }
    }

    saveToken(name, value) {
        localStorage.setItem(name, value);
    }
}

export default new AuthService(api);
