export const processData = (data: string, callback: (result: string) => void) => {
    console.log(`Processing ${data}...`);
    // สมมติว่าเรามีการประมวลผลข้อมูลที่นี่
    const result = `Processed ${data}`;
    callback(result);
};