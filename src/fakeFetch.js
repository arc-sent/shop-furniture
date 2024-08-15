
export function FakeFetch(arr, price) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                request: [...arr],
                response: `Успешно обработан!`,
                price: price,
            });
        }, 2000);
    });
}