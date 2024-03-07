import { db } from '../../../app/config/db';
import axios from 'axios';

describe('CRUD Database and External API Integration Tests', () => {
  beforeAll(async () => {
    await db.connect(); // เชื่อมต่อฐานข้อมูล
  });
  afterAll(async () => {
    await db.disconnect(); // ตัดการเชื่อมต่อฐานข้อมูล
  });
  beforeEach(async () => {
    await db.truncate(); // ล้างข้อมูลทดสอบก่อนทำการทดสอบแต่ละครั้ง
  });

  // ทดสอบการเพิ่มผู้ใช้ใหม่
  test('should add a new user to the database', async () => {
    const newUser = { id: 1, name: 'John Doe' };
    const user = await db.addUser(newUser);
    expect(user).toEqual(newUser);
  });

  // ทดสอบการค้นหาผู้ใช้จาก ID
  test('should retrieve a user by ID from the database', async () => {
    const newUser = { id: 2, name: 'Jane Doe' };
    await db.addUser(newUser);
    const user = await db.getUser(2);
    expect(user).toEqual(newUser);
  });

  // ทดสอบการอัปเดตข้อมูลผู้ใช้
  test('should update a user\'s information in the database', async () => {
    const newUser = { id: 3, name: 'Jim Beam' };
    await db.addUser(newUser);
    const updatedUser = { name: 'Jimmy Beam' };
    const user = await db.updateUser(3, updatedUser);
    expect(user).toEqual({ ...newUser, ...updatedUser });
  });

  // ทดสอบการลบผู้ใช้จากฐานข้อมูล
  test('should delete a user from the database', async () => {
    const newUser = { id: 4, name: 'Jack Daniels' };
    await db.addUser(newUser);
    const result = await db.deleteUser(4);
    expect(result).toBe(true);
    const user = await db.getUser(4);
    expect(user).toBeUndefined(); // ต้องการให้ผู้ใช้ไม่พบหลังจากการลบ
  });

  // ทดสอบดึงข้อมูลจาก API ภายนอก
  test('should retrieve a user from the external API', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', 1);
  });
});
