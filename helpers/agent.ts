import axios from "axios";

interface JWTData {
    token: string;
}

export const baseURL = process.env.NEXT_PUBLIC_API_URL;
export const jwt_string:string|undefined = process.env.NEXT_PUBLIC_JWT;

const agent = axios.create({baseURL});

agent.interceptors.request.use(async (config) => {
    let token;
    try {
        const jwt_data: JWTData = await JSON.parse(
            localStorage.getItem(jwt_string!)!
        )
        token = jwt_data.token;
        if (token) config.headers!.Authorization = token;
    } catch (error) {
        console.log(error);
    }
    return config;
});

export default agent;