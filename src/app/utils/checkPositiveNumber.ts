export const checkPositiveNumber = (valueNumber: number): boolean | Error => {
    if (valueNumber < 0) {
      throw new Error("Number is not positive");
    }
    return true;
}