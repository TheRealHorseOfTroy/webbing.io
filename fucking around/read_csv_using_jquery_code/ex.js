document.addEventListener("DOMContentLoaded", function() {
  const numRows = 5; // Number of rows in the CSV
  const numColumns = 3; // Number of columns in the CSV
  const randomCSV = generateRandomCSV(numRows, numColumns);

  // Display the generated CSV content in the <pre> element
  document.getElementById("csvContent").textContent = randomCSV;
});

function generateRandomCSV(numRows, numColumns) {
  let csvContent = "Header1,Header2,Header3\n"; // CSV header

  for (let i = 0; i < numRows; i++) {
    const row = [];

    for (let j = 0; j < numColumns; j++) {
      row.push(Math.floor(Math.random() * 100)); // Generate random numbers
    }

    csvContent += row.join(",") + "\n";
  }

  return csvContent;
}
