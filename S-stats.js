// Function to remove the first word from each string in the array
function trimNames(selectedKinks) {
    return selectedKinks.map(kink => kink.split(' ').slice(1).join(' '));
}

// Function to get only the first word from each string in the array
function trimValues(selectedKinks) {
    if (Array.isArray(selectedKinks)) {
        return selectedKinks.map(kink => kink.split(' ')[0]);
    } else {
        // Handle the case when selectedKinks is not an array
        console.error("selectedKinks is not an array.");
        return [];
    }
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
    redyellow: {
        1: "#C74289",
        2: "#CF6276",
        3: "##D96D6D",
        4: "#F7C3A1",
        5 :"#F09456",
        6: "#E7C03B",
        7: "#EFE028",
        8: "#F7FF14"

    },
    pinkpurple: {
        1: "#FF7DFF",
        2: "#D973EF",
        3: "#B36ADF",
        4: "#9A6FD8",
        5: "#7526E3",
        6: "#6856BE",
        7: "#424DAE",
        8: "#1C439E"
    },
    yellowblue: {
        1: 'EBC700',
        2: 'C9B51A',
        3: 'A6A235',
        4: '#B3C468',
        5: "#829339",
        6: '617E69',
        7: '3F6B84',
        8: '1C599E'
    },
    pinkorange: {
        1: '3D29C2',
        2: '5A3EB5',
        3: '7752A8',
        4: '#AE7BB6',
        5: "#A55CB0",
        6: 'B17C8D',
        7: 'CE9080',
        8: 'EBA573'
    }
    
};
function SgetCols(kinkValues, selectedColors){
    const colours = []

    for (const index in kinkValues) {
        const rgbaValue = singlecolorPreferences[selectedColors][kinkValues[index]];
 
       colours.push(rgbaValue);
    }
    return colours;

}
function CgetCols(kinkValues, selectedColors){
    const colours = []

    for (const index in kinkValues) {
        const rgbaValue = duocolorPreferences[selectedColors][kinkValues[Number(index)]];
 
       colours.push(rgbaValue);
    }
    
    return colours;

}
