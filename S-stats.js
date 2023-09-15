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
            return filteredEntries.map(entry => ({ x: entry.tabooness, y: entry.popularity }));
        })
        .catch(error => {
            console.error('Error loading JSON:', error);
            return [];
        });
}

const singlecolorPreferences = {
    red: {
        love: "rgba(255, 0, 0, 1.0)", // Stronger shade of red for love
        like: "rgba(255, 0, 0, 0.5)" // Lighter shade of red for like
    },
    green: {
        love: "rgba(0, 255, 0, 1.0)", // Stronger shade of green for love
        like: "rgba(0, 255, 0, 0.5)" // Lighter shade of green for like
    },
    blue: {
        love: "rgba(0, 0, 255, 1.0)", // Stronger shade of blue for love
        like: "rgba(0, 0, 255, 0.5)" // Lighter shade of blue for like
    }
};
function SgetCols(kinkValues, selectedColors){
    const colours = []

    for (const index in kinkValues) {
        const rgbaValue = singlecolorPreferences[selectedColors[index]][kinkValues[index]];
 
        colours.push(rgbaValue);
    }
    return colours;

}