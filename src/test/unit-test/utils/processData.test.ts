import { processData } from '../../../app/utils/processData';

describe('processData function', () => {
  it('calls callback with processed data', () => {
    // สร้าง mock function ด้วย jest.fn()
    const mockCallback = jest.fn();

    // เรียกใช้งานฟังก์ชัน processData
    processData('input data', mockCallback);

    // ตรวจสอบว่า mock function (callback) ถูกเรียก
    expect(mockCallback).toHaveBeenCalled();

    // ตรวจสอบว่า callback ถูกเรียกด้วยค่าที่ถูกต้อง
    expect(mockCallback).toHaveBeenCalledWith('Processed input data');
  });
});
