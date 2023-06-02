async function loadData(jsonFile) {
    const response = await fetch(jsonFile);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
}

export { loadData };
