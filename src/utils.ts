export const sleep = async (ms: number) => {
    return new Promise((resolve) => {
        setInterval(resolve, ms);
    });
};