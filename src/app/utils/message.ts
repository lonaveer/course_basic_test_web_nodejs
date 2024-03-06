export const logMessage = (message: string): void => {
    /* istanbul ignore next */
    console.log(message);
}

export const sendMessage = (message: string): string => {
    logMessage(message);
    return `Message sent: ${message}`;
}