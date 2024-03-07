// การทำการสร้างโทเค็นจำลอง
export const generateToken = async (userId: number): Promise<string> => {
    // ในสถานการณ์จริง คุณจะสร้าง JWT หรือโทเค็นที่คล้ายคลึงกัน
    return `token-${userId}`;
};