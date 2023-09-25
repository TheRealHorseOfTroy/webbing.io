// script.js

/*async function getFirstJsonValue() {
    try {
      const response = await fetch('data.json');
      const jsonData = await response.json();
      
      if (jsonData) {
        return jsonData;
      } else {
        throw new Error('JSON data is empty or invalid.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      return null;
    }
  }
  
  document.addEventListener('DOMContentLoaded', async () => {
    const resultDiv = document.getElementById('result');
  
    const jsonData = await getFirstJsonValue();
    if (jsonData !== null && jsonData.length > 0) {
      const firstThing = jsonData[0];
      const thingInfo = `Thing: ${firstThing.Thing}\nTabooness: ${firstThing.tabooness}\nPopularity: ${firstThing.popularity}\nGender Ratio: ${firstThing.genderratio}\nStandard Deviation: ${firstThing.std}\nMale: ${firstThing.male}\nFemale: ${firstThing.female}`;
      resultDiv.textContent = thingInfo;
    } else {
      resultDiv.textContent = 'An error occurred while loading JSON.';
    }
  });
  */
  document.addEventListener('DOMContentLoaded', function() {
    loadJson();
});
function loadJson() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => displayJson(data))
        .catch(error => console.error('Error loading JSON:', error));
}

function displayJson(jsonData) {
    const jsonContentDiv = document.getElementById('jsonContent');
    jsonContentDiv.innerHTML = JSON.stringify(jsonData, null, 2);
}
