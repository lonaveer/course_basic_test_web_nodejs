export async function getUserById(userId: number) {
    // สมมติว่านี่คือการดึงข้อมูลผู้ใช้จากฐานข้อมูล และได้ผลลัพธ์ดังนี้
    return { id: userId, name: "John Doe" };
}