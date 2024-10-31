export const login = async (userName: string, password: string) => {
    const response = await fetch("https://ecommerce-backend-x2ay.onrender.com/api/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "username":userName,
            "password":password
        })
    });

    if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || 'Error al iniciar sesión');
    }

    return await response.json();
}