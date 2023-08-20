function SingleCols() {
    const radioForm = document.createElement('form');
    radioForm.id = 'myForm'; // Set a unique ID for the form

    const colours = ['red','green','pink']

    // Create radio buttons for each animal
    colours.forEach(c => {
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'colour';
        radio.value = c; // Set the value attribute to the animal name

        label.appendChild(radio);
        label.appendChild(document.createTextNode(c));

        radioForm.appendChild(label);
        radioForm.appendChild(document.createElement('br'));
    });

    return radioForm;
}
function CoupleCols() {
    const radioForm = document.createElement('form');
    radioForm.id = 'myForm'; // Set a unique ID for the form

    const lines = ['red-blue','green-purple','pink-orange']

    // Create radio buttons for each animal
    lines.forEach(l => {
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'animal';
        radio.value = l; // Set the value attribute to the animal name

        label.appendChild(radio);
        label.appendChild(document.createTextNode(l));

        radioForm.appendChild(label);
        radioForm.appendChild(document.createElement('br'));
    });

    return radioForm;
}