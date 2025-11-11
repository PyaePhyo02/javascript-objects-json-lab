//IIFE
(() => {
    //start
    const StaffTable = document.getElementById ("staffTable")
    fetch ("data/staff.json")
    .then ((response) => response.json)
    .then ((data) => {
        data.forEach ((item) => {
    const row = document.createElement ("tr");  // creating a row 
    const nameCell = document.createElement("td"); // creating a colum
    const emailCell = document.createElement ("td");
    nameCell.textContent = `${item.firstname} ${item.lastname}`; // adding data to the cell
    emailCell.textContent = item.email;
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    StaffTable.appendChild (row)

  // ...
});
})
.catch ((error) => {
    console.error ("Error loading JSON:", error);

})
//end
})();