export default class Services {
    static post(url, headers = {}, payload = {}) {
        if (!url) return new Error('URL is required')
        return new Promise((resolve, reject) => {
            fetch(
                url,
                {
                    headers: headers,
                })
                .then(response => {
                    if (response.status !== 200) {
                        reject(response);
                    }
                    return response.json();
                })
                .then((res) => {
                    resolve(res);
                })
        });
    }
}