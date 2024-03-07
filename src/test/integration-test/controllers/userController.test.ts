import { getUserById } from '../../../app/controllers/userController';

describe('Integration Test for User Controller', () => {
  it('should return a user object for a given user id', async () => {
    const userId = 1; // สมมติว่ามีผู้ใช้ที่มี ID นี้อยู่ในฐานข้อมูล
    const user = await getUserById(userId);

    expect(user).toBeDefined();
    expect(user.id).toBe(userId);
    expect(user.name).toBeDefined();
  });
});