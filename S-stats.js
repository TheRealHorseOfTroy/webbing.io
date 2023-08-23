document.addEventListener('DOMContentLoaded', function() {
    // This ensures that the code runs after the DOM is fully loaded
    const selectedKinksJSON = sessionStorage.getItem('selectedKinks');
    const selectedKinks = JSON.parse(selectedKinksJSON);

    // Process selected kinks to remove the first word from each item
    const processedKinks = selectedKinks.map(kink => kink.split(' ').slice(1).join(' '));

    displaySelectedKinks(processedKinks);
    loadJson(processedKinks);

    function displaySelectedKinks(selectedKinks) {
        const selectedKinksList = document.getElementById('selectedKinksList');

        if (selectedKinks && selectedKinks.length > 0) {
            selectedKinks.forEach(k => {
                const listItem = document.createElement('li');
                listItem.textContent = k;
                selectedKinksList.appendChild(listItem);
            });
        } else {
            const message = document.createElement('p');
            message.textContent = 'No kinks selected.';
            selectedKinksList.appendChild(message);
        }
    }

    function loadJson(selectedKinks) {
        fetch('data.json')
            .then(response => response.json())
            .then(data => filterAndDisplayJson(data, selectedKinks))
            .catch(error => console.error('Error loading JSON:', error));
    }

    function filterAndDisplayJson(jsonData, selectedKinks) {
        const filteredEntries = jsonData.filter(entry => selectedKinks.includes(entry.Thing));

        const jsonContentDiv = document.getElementById('jsonContent');
        if (filteredEntries.length > 0) {
            // Collect taboo and popularity values for selected entries
            const tabooValues = filteredEntries.map(entry => entry.tabooness);
            const popularityValues = filteredEntries.map(entry => entry.popularity);

            // Display taboo and popularity values
            const tabooList = document.createElement('ul');
            const popularityList = document.createElement('ul');

            tabooValues.forEach(value => {
                const listItem = document.createElement('li');
                listItem.textContent = value;
                tabooList.appendChild(listItem);
            });

            popularityValues.forEach(value => {
                const listItem = document.createElement('li');
                listItem.textContent = value;
                popularityList.appendChild(listItem);
            });

            jsonContentDiv.innerHTML = `
                <h2>Taboo Values</h2>
                ${tabooList.outerHTML}
                <h2>Popularity Values</h2>
                ${popularityList.outerHTML}
            `;
        } else {
            jsonContentDiv.textContent = 'No matching entries found.';
        }
    }
});
