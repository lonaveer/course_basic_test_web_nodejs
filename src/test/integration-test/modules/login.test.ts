import { login } from '../../../app/modules/login';

describe('Integration Test for Login Module', () => {
  test('should authenticate and return profile for valid credentials', async () => {
    const validUsername = 'testUser';
    const validPassword = 'testPassword';

    const result = await login(validUsername, validPassword);

    // ตรวจสอบผลลัพธ์ : การยืนยันตัวตนสำเร็จหรือไม่
    expect(result.isAuthenticated).toBe(true);

    // ตรวจสอบผลลัพธ์ : Token ถูกต้องหรือไม่
    expect(result.token).toBe(`token-${1}`); // สมมติว่า userId คือ 1

    // ตรวจสอบผลลัพธ์ : ข้อมุล profile ถูกต้องหรือไม่
    expect(result.profile).toEqual({
        userId: 1,
        name: 'Test User'
    });
  });

  test('should throw an error for invalid credentials', async () => {
    const invalidUsername = 'wrongUser';
    const invalidPassword = 'wrongPassword';

    // ตรวจสอบผลลัพธ์ : เมื่อ Login ไม่สำเร็จ จะต้องทำการ Throw Error ว่า 'Invalid Credentials'
    await expect(login(invalidUsername, invalidPassword)).rejects.toThrow('Invalid Credentials');
  });
});