async function saveToFarDistantDatabase(param: unknown) {
    return new Promise((resolve) => {
        setTimeout(() => {
            localStorage.setItem('our-item-key', JSON.stringify(param));
            resolve(null);
        }, 1000);
    });
}

async function fetchFromFarDistantDatabase() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = localStorage.getItem('our-item-key');
            if (data) {
                resolve(JSON.parse(data));
            } else {
                resolve([]);
            }
        }, 1000);
    });
}

export { saveToFarDistantDatabase, fetchFromFarDistantDatabase };
