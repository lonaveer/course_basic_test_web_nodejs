export const fetchData = async () => {
    const result = await fetch('https://dummyjson.com/products/1');
    return result.json();
};