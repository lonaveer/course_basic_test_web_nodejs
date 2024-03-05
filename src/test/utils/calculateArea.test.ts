import * as geometry from "../../app/utils/calculateArea"

describe('calculateArea function', () => {
  it('tracks call to calculateArea', () => {
    const spy = jest.spyOn(geometry, 'calculateArea');  // ทำการปลอมแปลง calculateArea() ด้วย Jest Spy
    geometry.calculateArea(5, 10);                      // เรียกใช้งาน calculateArea()

    expect(spy).toHaveBeenCalled();                     // ตรวจสอบว่า calculateArea() มีการถูกเรียกใช้ โดยถาม spy
    expect(spy).toHaveBeenCalledWith(5, 10);            // ให้ spy ช่วยส่งค่า 5 และ 10 ไปยัง calculateArea()
    expect(spy).toHaveReturnedWith(50);                 // ให้ spy ช่วยบอกผลลัพธ์ที่ได้จาก calculateArea()

    spy.mockRestore();                                  // เคลียร์ค่า spy เพื่อไม่ให้มีผลต่อการทดสอบอื่นๆ
  });
});


