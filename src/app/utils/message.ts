export const logMessage = (message: string): void => {
    console.log(message);
}

export const sendMessage = (message: string): string => {
    logMessage(message);
    return `Message sent: ${message}`;
}