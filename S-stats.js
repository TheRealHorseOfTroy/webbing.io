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
        fetch('c.json')
            .then(response => response.json())
            .then(data => filterAndDisplayJson(data, selectedKinks))
            .catch(error => console.error('Error loading JSON:', error));
    }

    function filterAndDisplayJson(jsonData, selectedKinks) {
        const filteredEntries = jsonData.filter(entry => selectedKinks.includes(entry.Thing));

        const jsonContentDiv = document.getElementById('jsonContent');
        if (filteredEntries.length > 0) {
            jsonContentDiv.innerHTML = JSON.stringify(filteredEntries, null, 2);
        } else {
            jsonContentDiv.textContent = 'No matching entries found.';
        }
    }
});
