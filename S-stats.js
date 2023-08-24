// Function to remove the first word from each string in the array
function trimNames(selectedKinks) {
    return selectedKinks.map(kink => kink.split(' ').slice(1).join(' '));
}

// Function to get only the first word from each string in the array
function trimValues(selectedKinks) {
    return selectedKinks.map(kink => kink.split(' ')[0]);
}

// Function to load JSON data and get coordinates based on selected kink names
function Coords(kinkNames) {
    return fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const filteredEntries = data.filter(entry => kinkNames.includes(entry.Thing));
            const coordsArray = [];

            filteredEntries.forEach(entry => {
                coordsArray.push({ x: entry.tabooness, y: entry.popularity });
            });

            return coordsArray;
        })
        .catch(error => {
            console.error('Error loading JSON:', error);
            return [];
        });
}
