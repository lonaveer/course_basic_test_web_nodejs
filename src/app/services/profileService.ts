// จำลองฟังก์ชันสำหรับการดึงข้อมูลโปรไฟล์ของผู้ใช้
export const getMyProfile = async (token: string): Promise<{ userId: number; name: string }> => {
    // ในโปรเจกต์จริง, คุณควรตรวจสอบ token และดึงข้อมูลโปรไฟล์จากฐานข้อมูล
    if (token.startsWith('token-')) {
      return { userId: 1, name: 'Test User' }; // ส่งค่ากลับเป็นข้อมูลโปรไฟล์จำลอง
    } else {
      throw new Error('Invalid token');
    }
};