const API_URL = process.env.API_URL || 'http://localhost:3030/api';

export const login = async (userName: string, password: string) => {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "username":userName,
            "password":password
        }),
    });

    if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || 'Error al iniciar sesión');
    }

    return await response.json();
}