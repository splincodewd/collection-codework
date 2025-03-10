import 'whatwg-fetch';

export default async () => {
    const response = await fetch('/src/products.json');
    return response.json();
};
