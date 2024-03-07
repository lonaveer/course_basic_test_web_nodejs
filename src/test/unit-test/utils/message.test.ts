import * as messageModule from "../../../app/utils/message";

describe('sendMessage', () => {
  it('calls logMessage with the correct message', () => {
    // ทำการปลอมแปลง logMessage() ด้วย Jest Spy
    // เมื่อมีการเรียกใช้งาน logMessage() , ค่า Argument ที่ถูกส่งเข้ามายัง logMessage() จะถูกส่งต่อไปยังตัวแปร logMessageSpy
    const logMessageSpy = jest.spyOn(messageModule, 'logMessage').mockImplementation(() => {});

    // ทำการส่งข้อความด้วย sendMessage()
    const testMessage = 'Hello World';
    messageModule.sendMessage(testMessage);

    // ตรวจสอบว่า logMessage() ถูกเรียกด้วยข้อความที่ถูกต้องหรือไม่ , โดยทดสอบจากข้อความจริง เทียบกับ ข้อความที่ได้รับจาก Spy
    expect(logMessageSpy).toHaveBeenCalledWith(testMessage);

    // ทำการเคลียร์ค่าหลังการทดสอบ
    logMessageSpy.mockRestore();
  });
});

