import { useToast } from '@chakra-ui/react'

const TOKEN_NAME = 'authToken';
const API_URL = 'http://localhost:8080';

class AuthServiceImplementation {

    private storage: Storage;

    constructor() {
        this.storage = window.sessionStorage;
    }

    public async login(username: string, password: string): Promise<string> {
        const res = await fetch(`${API_URL}/authentication`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({
                username,
                password,
            })
        });





        if (res.status !== 200) {
            throw new Error("Invalid username or password");
        }

        const { authToken } = await res.json();
        this.authToken = authToken;
        return authToken;

    }

    public async registration(username: string, password: string, toast: ReturnType<typeof useToast>) {
        const res = await fetch(`${API_URL}/users/post`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({
                username,
                password,
            })
        });

        if (res.status === 201) {
            toast({
                title: 'Regisztráció',
                description: "Sikeres regisztráció!",
                status: 'success',
                position: 'top',
                duration: 5000,
                isClosable: true,
            });
        }
    }

    public get authToken(): string | null {
        return this.storage.getItem(TOKEN_NAME) ?? null;
    }

    public set authToken(token: string | null) {
        if (token) {
            this.storage.setItem(TOKEN_NAME, token);
        } else if (this.authToken) {
            this.storage.removeItem(TOKEN_NAME);
        }
    }

}

export const AuthService = new AuthServiceImplementation();