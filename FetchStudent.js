function getData() {
    var studentInp = document.getElementById('studentInp').value.trim();
    console.log(studentInp);
    // let inp = typeof(studentInp.value);
    // console.log(inp);

    if (!studentInp) {
        alert("Please enter a valid mobile number or acknowledgement number");
        return;
    }

    fetch(`http://localhost:8081/students/${studentInp}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log("Fetching data...");
            return response.json();
        })
        .then(data => {
            // Open a new window
            let newWindow = window.open("", "_self");
            // Write HTML content to the new window
            newWindow.document.write("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Student Profile</title><link rel='stylesheet' href='./style.css'></link></head><body id='outFormBody' class='student outForm'></body></html>");
            // Call the displayData function in the new window
            displayDataInNewWindow(newWindow, data);
        })
        .catch(error => {
            console.error("Error occurred:", error);
            if (!isNaN(studentInp) && studentInp.length === 10) {
                userAckPopup();
            } else {
                outErrorPopUp();
            }
        });
}

function displayDataInNewWindow(newWindow, data) {
    // Create logout button
    let logoutButton = newWindow.document.createElement('button');
    logoutButton.setAttribute('id', 'outLogOutButton');
    let logoutLink = newWindow.document.createElement('a');
    logoutLink.setAttribute('href', './FetchStudent.html');
    logoutLink.setAttribute('id', 'outA');
    logoutLink.textContent = 'Logout';
    logoutButton.appendChild(logoutLink);
    newWindow.document.body.appendChild(logoutButton);



    let MainForm = newWindow.document.createElement('main');
    MainForm.setAttribute('id', 'outMainForm');

    // Create main heading
    let mainHeading = newWindow.document.createElement('h1');
    mainHeading.setAttribute('id', 'outH1');
    mainHeading.textContent = 'STUDENT REGISTERED PROFILE';
    MainForm.appendChild(mainHeading);

    let studentInfo = document.createElement('div');
    studentInfo.setAttribute('id', 'outStudentForm');

    // Create and append each element with its value
    let name = newWindow.document.createElement('h3');
    name.textContent = `Name : ${data.name}`;
    name.setAttribute('id', 'outName'); // Set ID for name
    studentInfo.appendChild(name); // append name

    // Repeat the same for other data elements

    // Acknowledgement Number
    let ackNumber = newWindow.document.createElement('h3');
    ackNumber.textContent = `Acknowledgement Number : ${data.id.acknowledgement_number}`;
    ackNumber.setAttribute('id', 'outAckNumber');
    studentInfo.appendChild(ackNumber);

    // Mobile Number
    let mobileNumber = newWindow.document.createElement('h3');
    mobileNumber.textContent = `Mobile Number : ${data.id.mobile_no}`;
    mobileNumber.setAttribute('id', 'outPhone');
    studentInfo.appendChild(mobileNumber);


    // DOB
    let dob = newWindow.document.createElement('h3');
    dob.textContent = `Date of Birth : ${data.dob}`;
    dob.setAttribute('id', 'outDob');
    studentInfo.appendChild(dob);

    // Age
    let age = newWindow.document.createElement('h3');
    age.textContent = `Age : ${data.age} years`;
    age.setAttribute('id', 'outAge');
    studentInfo.appendChild(age);

    // Address
    let address = newWindow.document.createElement('h3');
    address.textContent = `Address : ${data.address}`;
    address.setAttribute('id', 'outAddress');
    studentInfo.appendChild(address);

    // District
    let district = newWindow.document.createElement('h3');
    district.textContent = `District : ${data.district}`;
    district.setAttribute('id', 'outDistrict');
    studentInfo.appendChild(district);

    // Taluk
    let taluk = newWindow.document.createElement('h3');
    taluk.textContent = `Taluk : ${data.taluk}`;
    taluk.setAttribute('id', 'outTaluk');
    studentInfo.appendChild(taluk);

    // Village
    let village = newWindow.document.createElement('h3');
    village.textContent = `Village : ${data.village}`;
    village.setAttribute('id', 'outVillage');
    studentInfo.appendChild(village);

    //marks
    let table = newWindow.document.createElement('table');
    table.setAttribute('border', '1');
    table.setAttribute('id', 'outTable'); // Set ID for table tag

    let tableHead = newWindow.document.createElement('thead');
    tableHead.setAttribute('id', 'outTableHead'); // Set ID for thead tag
    let headRow = newWindow.document.createElement('tr');
    headRow.setAttribute('id', 'outTableHeadRow'); // Set ID for tr tag
    let headCell1 = newWindow.document.createElement('th');
    headCell1.textContent = 'SUBJECTS';
    headCell1.setAttribute('id', 'outTableHeadCell1'); // Set ID for th 1 tag
    let headCell2 = newWindow.document.createElement('th');
    headCell2.textContent = 'MARKS';
    headCell2.setAttribute('id', 'outTableHeadCell2'); // Set ID for th 2 tag
    headRow.appendChild(headCell1); // append th 1
    headRow.appendChild(headCell2); // append th 2
    tableHead.appendChild(headRow); // append tr head
    table.appendChild(tableHead); // append thead toble

    let tableBody = newWindow.document.createElement('tbody');
    tableBody.setAttribute('id', 'outTableBody'); // Set ID for the table body
    let subjects = ['ENGLISH', 'MATHEMATICS', 'PHYSICS', 'CHEMISTRY', 'COMPUTER SCIENCE'];
    let marks = [data.s1_english, data.s2_mathematics, data.s3_physics, data.s4_chemistry, data.s5_computer_science];
    for (let i = 0; i < subjects.length; i++) {
        let bodyRow = newWindow.document.createElement('tr');
        // bodyRow.setAttribute('id', 'outTableBodyRow'); // Set ID for the table body row
        let bodyCell1 = newWindow.document.createElement('td');
        bodyCell1.textContent = subjects[i];
        // bodyCell1.setAttribute('id', 'outTableBodyCell1'); // Set ID for the first table data cell
        let bodyCell2 = newWindow.document.createElement('td');
        bodyCell2.textContent = marks[i];
        // bodyCell2.setAttribute('id', 'outTableBodyCell2'); // Set ID for the second table data cell

        bodyRow.appendChild(bodyCell1); // append td 1
        bodyRow.appendChild(bodyCell2); // append td 1
        tableBody.appendChild(bodyRow); // append tr body
    }

    // Total Marks
    let totalMarkRow = newWindow.document.createElement('tr');
    let totalMarkCell1 = newWindow.document.createElement('th');
    totalMarkCell1.textContent = 'TOTAL MARK';
    totalMarkCell1.setAttribute('id', 'outTotalMarkHead') // Set ID for the total mark head cell
    let totalMarkCell2 = newWindow.document.createElement('td');
    totalMarkCell2.textContent = data.total_marks;
    totalMarkCell2.setAttribute('id', 'outTotalMarkBody') // Set ID for the total mark body cell
    totalMarkRow.appendChild(totalMarkCell1); // append th to tr
    totalMarkRow.appendChild(totalMarkCell2); // append td to tr
    tableBody.appendChild(totalMarkRow); // append tr to tbody

    table.appendChild(tableBody);
    studentInfo.appendChild(table);

    // Average Marks
    let average = newWindow.document.createElement('h3');
    average.textContent = `Average : ${data.average_mark}%`;
    average.setAttribute('id', 'outAverage') // Set ID for the average
    studentInfo.appendChild(average); // append average 

    MainForm.appendChild(studentInfo);

    // Append MainForm to the body of the new window
    newWindow.document.body.appendChild(MainForm);
}


function userAckPopup() {
    // document.getElementById("popup").style.display = "block";
    const popupContent = `
            <span class="close" onclick="closePopup()">&times;</span>
            <p> Kindly use your Acknowledgement Number</p>            
        `; //<p> ${studentInp.value} </p>
    const popup = document.getElementById("popup");
    const popupContentDiv = popup.querySelector(".popup-content");
    popupContentDiv.innerHTML = popupContent;
    popup.style.display = "block";
    return;
}
function outErrorPopUp() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}


// const lastVisitedPage = sessionStorage.getItem('lastVisitedPage');
// console.log("Last visited page:", lastVisitedPage);
// if (lastVisitedPage === 'FormRegistration') {
//     // Redirect to FetchStudent page
//     window.location.href = 'FetchStudent.html';
// }


// function checkLastVisitedPage() {
//     const lastVisitedPage = sessionStorage.getItem('lastVisitedPage');
//     console.log("Last visited page:", lastVisitedPage);
//     if (lastVisitedPage === 'FormRegistration') {
//         // Redirect to FetchStudent page
//         window.location.href = 'FetchStudent.html';
//     }
// }

// // Call the function when the page loads
// window.onload = checkLastVisitedPage;