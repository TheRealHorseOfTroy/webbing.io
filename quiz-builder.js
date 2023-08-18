// Define the function to build the form
function buildQuiz() {
    const radioForm = document.createElement('form');
    radioForm.id = 'myForm'; // Set a unique ID for the form

    fetch('ex.txt')
        .then(response => response.text())
        .then(text => {
            const lines = text.split('\n');

            // Create radio buttons for each line
            lines.forEach(line => {
                if (line.trim() !== '') {
                    const label = document.createElement('label');
                    const radio = document.createElement('input');
                    radio.type = 'radio';
                    radio.name = 'question';
                    
                    label.appendChild(radio);
                    label.appendChild(document.createTextNode(line));

                    radioForm.appendChild(label);
                    radioForm.appendChild(document.createElement('br'));
                }
            });
        });

    return radioForm;
}