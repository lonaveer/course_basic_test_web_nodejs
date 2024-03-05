import { minus } from '../../app/utils/minus';

describe('Minus function tests', () => {
  let baseValue: number;

  beforeAll(() => {
    console.log('Starting all minus tests.'); // สามารถใช้เพื่อ "ตั้งค่าเริ่มต้น" สำหรับการทดสอบ "ทั้งหมด"
  });
  beforeEach(() => {
    baseValue = 10; // สามารถใช้เพื่อ "ตั้งค่าเริ่มต้น" สำหรับการทดสอบ "ในแต่ละครั้ง"
    console.log(`Before test: baseValue is set to ${baseValue}`);
  });
  afterEach(() => {
    console.log(`After test: baseValue was ${baseValue}`); // สามารถใช้เพื่อ "เคลียร์ค่า" หลังการทดสอบ "ในแต่ละครั้ง"
  });
  afterAll(() => {
    console.log('All minus tests are done.'); // สามารถใช้เพื่อ "เคลียร์ค่า" หลังการทดสอบ "ทั้งหมด"
  });

  test('minus 5 from baseValue equals 5', () => expect(minus(baseValue, 5)).toBe(5));
  test('minus 10 from baseValue equals 0', () => expect(minus(baseValue, 10)).toBe(0));
  test('minus 0 from baseValue equals baseValue', () => expect(minus(baseValue, 0)).toBe(baseValue));
});
