export class apiUtils {
    public static POST(url: string, headers: HeadersInit, body: any): Promise<any> {
        console.log("POST Request to:", url);
        console.log("With body:", body);
        return fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        }).then(response => {
            if (!response.ok) {
                console.log("Response received:", response);
                throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
            }
            return response.json();
        });
    }

    public static GET(url: string, headers: HeadersInit): Promise<any> {
        console.log("GET Request to:", url);
        return fetch(url, {
            method: 'GET',
            headers: headers
        }).then(response => {
            if (!response.ok) {
                console.log("Response received:", response);
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        });
    }
}