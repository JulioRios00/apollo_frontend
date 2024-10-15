import axios from "axios";

const API_URL = "https://julioaraujo00.pythonanywhere.com/api/token/";

interface AuthResponse {
    access: string;
    refresh: string;
}

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post<AuthResponse>(API_URL, {
      username,
      password,
    });

    const { access, refresh } = response.data;

    localStorage.setItem("access_token", access);
    localStorage.setItem("refresh_token", refresh);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

interface Product {
    id: number;
    name: string;
    description: string;
    color: string;
    category: string;
    price: number;
    promotional_price: number;
}

export const getProducts = async () => {
    const token = localStorage.getItem("access_token");

    if (!token) {
        throw new Error("Access token not found");
    }
    try {
        const response = await axios.get<Product[]>("https://julioaraujo00.pythonanywhere.com/api/products/", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}