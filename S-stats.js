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
        love: "#761010", // Stronger shade of red for love
        like: "#CE5353" // Lighter shade of red for like
    },
    blue: {
        love: "#004976", // Stronger shade of green for love
        like: "#5395BF" // Lighter shade of green for like
    },
    pink: {
        love: "#C74289", // Stronger shade of blue for love
        like: "#D981B0" // Lighter shade of blue for like
    },
    orange: {
        love: "#FFB133", // Stronger shade of red for love
        like: "#EBC700" // Lighter shade of red for like
    },
    green: {
        love: "#57961F", // Stronger shade of green for love
        like: "#98C272" // Lighter shade of green for like
    },
    purple: {
        love: "3D29C2", // Stronger shade of blue for love
        like: "8778E2" // Lighter shade of blue for like
    }
};
const duocolorPreferences = {
    R2Y: {
        1: "#C74289",
        2: "#CF6276",
        3: "#CF6276",
        4: "#DFA14F",
        5: "#E7C03B",
        6: "#EFE028",
        7: "#F7FF14"
    },
    P2P: {
        1: "#FF7DFF",
        2: "#D973EF",
        3: "#B36ADF",
        4: "#8E60CF",
        5: "#6856BE",
        6: "#424DAE",
        7: "#1C439E"
    },
    Y2B: {
        1: 'EBC700',
        2: 'C9B51A',
        3: 'A6A235',
        4: '84904F',
        5: '617E69',
        6: '3F6B84',
        7: '1C599E'
    },
    P2O: {
        1: '3D29C2',
        2: '5A3EB5',
        3: '7752A8',
        4: '94679B',
        5: 'B17C8D',
        6: 'CE9080',
        7: 'EBA573'
    }
    
};
function SgetCols(kinkValues, selectedColors){
    const colours = []

    for (const index in kinkValues) {
        const rgbaValue = singlecolorPreferences[selectedColors][kinkValues[0]];
 
       colours.push(rgbaValue);
    }
    return colours;

}