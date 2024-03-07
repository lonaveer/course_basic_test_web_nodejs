interface User {
    id: number;
    name: string;
}

class Database {
    private users: User[] = [];

    // เชื่อมต่อกับฐานข้อมูล
    async connect(): Promise<void> {
      console.log('Database connected');
    }

    // ตัดการเชื่อมต่อกับฐานข้อมูล
    async disconnect(): Promise<void> {
      console.log('Database disconnected');
    }

    // เพิ่มผู้ใช้ใหม่เข้าสู่ฐานข้อมูล
    async addUser(user: User): Promise<User> {
      this.users.push(user);
      return user;
    }

    // ค้นหาผู้ใช้จาก ID
    async getUser(id: number): Promise<User | undefined> {
      return this.users.find(user => user.id === id);
    }

    // อัปเดตข้อมูลผู้ใช้
    async updateUser(id: number, newUser: Partial<User>): Promise<User | null> {
      const index = this.users.findIndex(user => user.id === id);
      if (index !== -1) {
        this.users[index] = { ...this.users[index], ...newUser };
        return this.users[index];
      }
      return null;
    }

    // ลบผู้ใช้จากฐานข้อมูล
    async deleteUser(id: number): Promise<boolean> {
      const index = this.users.findIndex(user => user.id === id);
      if (index !== -1) {
        this.users.splice(index, 1);
        return true;
      }
      return false;
    }

    // ล้างข้อมูลผู้ใช้ทั้งหมดในฐานข้อมูล
    async truncate(): Promise<void> {
      this.users = [];
    }
}
export const db = new Database();