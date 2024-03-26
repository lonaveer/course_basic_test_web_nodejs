import { authenticateUser } from "../services/authService";
import { getMyProfile } from "../services/profileService";
import { generateToken } from "../services/tokenService";

export const login = async (username: string, password: string): Promise<any> => {
    const auth = await authenticateUser(username, password);
    if (auth.isAuthenticated) {
        const token = await generateToken(auth.data.id);
        const profile = await getMyProfile(token);
        return {
            isAuthenticated: true,
            token,
            profile
        }
    } else {
        throw new Error('Invalid Credentials');
    }
}