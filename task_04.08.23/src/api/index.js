export const fetchData = async () => {

    const res = await fetch('./data.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    const fetchedData = await res.json();
    return fetchedData;

}