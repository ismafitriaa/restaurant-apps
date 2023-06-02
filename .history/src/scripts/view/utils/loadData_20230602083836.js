async function loadData(jsonFile) {
    const response = await import(jsonFile);
    return response.default;
}

export { loadData };
