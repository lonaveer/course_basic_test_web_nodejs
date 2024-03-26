// การทำการเข้าสู่ระบบจำลองของผู้ใช้
export const authenticateUser = async (username: string, password: string): Promise<any> => {
    // ในสถานการณ์จริง คุณควรตรวจสอบ username และ password กับฐานข้อมูล
    if (username === 'testUser' && password === 'testPassword') {
        return {
            isAuthenticated: true,
            data : {
                id: 1,
                name: 'Test User',
            }
        };
    } else {
        return {
            isAuthenticated: false,
            data : null
        };
    }
};