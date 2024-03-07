// การทำการเข้าสู่ระบบจำลองของผู้ใช้
export const authenticateUser = async (username: string, password: string): Promise<boolean> => {
    // ในสถานการณ์จริง คุณควรตรวจสอบ username และ password กับฐานข้อมูล
    return username === 'testUser' && password === 'testPassword';
};