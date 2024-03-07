import { authenticateUser } from '../../../app/services/authService';
import { generateToken } from '../../../app/services/tokenService';
import { getMyProfile } from '../../../app/services/profileService';

describe('Integration Test for the Login System and MyProfile access', () => {
  it('should authenticate the user, generate a token, and access the MyProfile page', async () => {
    const username = 'testUser';
    const password = 'testPassword';

    // ทดสอบการตรวจสอบข้อมูลผู้ใช้
    const isAuthenticated = await authenticateUser(username, password);
    expect(isAuthenticated).toBe(true);

    // ทดสอบการสร้าง token
    const token = await generateToken(1); // สมมติว่า ID ผู้ใช้คือ 1
    expect(token).toBeDefined();

    // ทดสอบการใช้ token เพื่อเข้าถึงหน้าโปรไฟล์
    const profile = await getMyProfile(token);
    expect(profile).toBeDefined();
    expect(profile.name).toBe('Test User'); // ตรวจสอบว่าได้ข้อมูลโปรไฟล์ที่ถูกต้อง
  });

  it('should throw an error when using an invalid token to access the MyProfile page', async () => {
    const invalidToken = 'invalid-token';
    // ทดสอบการใช้ token ที่ไม่ถูกต้อง
    await expect(getMyProfile(invalidToken)).rejects.toThrow('Invalid token');
  });
});