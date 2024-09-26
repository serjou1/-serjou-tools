export const sleep = async (ms: number) => {
    return new Promise((resolve) => {
        setInterval(resolve, ms);
    });
};

export function onlyUnique(value: any, index: number, array: any[]) {
    return array.indexOf(value) === index;
}