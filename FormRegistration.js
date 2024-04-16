let form = document.querySelector("form");
let nameInp = document.querySelector("#nameInp");
let phoneInp = document.querySelector("#phoneInp");
let dateInp = document.querySelector("#dateInp");
let ageInp = document.querySelector("#ageInp");
let addressInp = document.querySelector("#addressInp");
let districtInp = document.querySelector("#district");
let talukInp = document.querySelector("#taluk");
let villageInp = document.querySelector("#village");

// age 
dateInp.addEventListener("change", e => {
    let date = e.target.value;
    let splitValue = date.split("").splice(0, 4).join("");
    let convertTonum = Number(splitValue);
    const todayDate = new Date();
    let getAge = todayDate.getFullYear();
    let ageValue = getAge - convertTonum;
    ageInp.value = ageValue;
})

// district
districtInp.addEventListener("change", e => {
    let talukVillageMap = {
        "chennai": {
            "taluk": ["--select taluk--", "C1", "C2", "C3", "C4", "C5"],
            "village": {
                "C1": ["--select village--", "Moolakadai", "Vyasarpadi", "Madhvaram", "Kolathur", "Perambur"],
                "C2": ["--select village--", "Anna Nagar", "Shenoy Nagar", "Kilpauk", "Amijikari", "Thirumangalam"],
                "C3": ["--select village--", "Mogappair West", "Mogappair East", "Maduravoyal", "Koyembedu", "Collector Nagar"],
                "C4": ["--select village--", "Koyembedu", "Arumbakkam", "MMDA", "Vadapalani", "Virugambakkam"],
                "C5": ["--select village--", "Guindy", "CIPET", "S.R.P Tools", "Ekkututhangal", "Ashok Nagar"]
            }
        },
        "Salem": {
            "taluk": ["--select taluk--", "S1", "S2", "S3"],
            "village": {
                "S1": ["--select village--", "Chellapillaikuttai", "Muthunaichenpatti", "Saminayakkanpatti"],
                "S2": ["--select village--", "Chinnamadur", "Elavadi", "Kadugamarathur", "Kakkambadi"],
                "S3": ["--select village--", "Anaigoundampatti", "pagalpatti", "Alagusamudram"]
            }
        },
        "Coimbatore": {
            "taluk": ["--select taluk-- ", "Co1", "Co2", "Co3", "Co4"],
            "village": {
                "Co1": ["--select village--", "Gandhipuram", "Townhall", "Ram Nagar", "R.S Puram"],
                "Co2": ["--select village--", "Kalapatti", "Gudalur", "Thudiyalur", "Goundmpalayam"],
                "Co3": ["--select village--", "Kurichi", "Kuniyamuthur", "Madukkarai"],
                "Co4": ["--select village--", "Annur", "Mettupalayam", "Kinathukadav", "Sulur", "Valparai"]
            }
        }
    };

    let selectedDistrict = e.target.value;
    let talukOptions = talukVillageMap[selectedDistrict].taluk;
    let villageOptions = talukVillageMap[selectedDistrict].village;

    // Populating taluk options
    let talukSelect = document.getElementById("taluk");
    talukSelect.innerHTML = "";
    talukOptions.forEach(option => {
        talukSelect.innerHTML += `<option value="${option}">${option}</option>`;
    });

    // Populating village options based on taluk selection
    talukSelect.addEventListener('change', function () {
        let selectedTaluk = this.value;
        let villageSelect = document.getElementById("village");
        villageSelect.innerHTML = "";

        let villages = villageOptions[selectedTaluk];
        villages.forEach(village => {
            villageSelect.innerHTML += `<option value="${village}">${village}</option>`;
        });
    });
});

// marks
let sub1 = document.getElementById("sub1Val");
let sub2 = document.querySelector("#sub2Val");
let sub3 = document.querySelector("#sub3Val");
let sub4 = document.querySelector("#sub4Val");
let sub5 = document.querySelector("#sub5Val");

let totalValue = document.querySelector("#totalVal");
let averageVal = document.getElementById("averageVal");

sub1Val.addEventListener("change", e => {
    var storeSub1P = document.getElementById("storeSub1P");
    var storeSub1F = document.getElementById("storeSub1F");
    if (storeSub1P.innerHTML === "Pass" || storeSub1F.innerHTML === "Fail") {
        storeSub1P.innerHTML = "";
        storeSub1F.innerHTML = "";
    }
    if (e.target.value >= 0 && e.target.value <= 100) {
        if (e.target.value >= 35) {
            var storeSub1P = document.querySelector("#storeSub1P");
            storeSub1P.innerHTML = "Pass";
        } else {
            var storeSub1F = document.querySelector("#storeSub1F");
            storeSub1F.innerHTML = "Fail";
        }
    } else {
        markOpenPopup();
        e.target.value = "";
    }
});
sub2Val.addEventListener("change", e => {
    var storeSub2P = document.getElementById("storeSub2P");
    var storeSub2F = document.getElementById("storeSub2F");
    if (storeSub2P.innerHTML === "Pass" || storeSub2F.innerHTML === "Fail") {
        storeSub2P.innerHTML = "";
        storeSub2F.innerHTML = "";
    }
    if (e.target.value >= 0 && e.target.value <= 100) {
        if (e.target.value >= 35) {
            var storeSub2P = document.querySelector("#storeSub2P");
            storeSub2P.innerHTML = "Pass";
        } else {
            var storeSub2F = document.querySelector("#storeSub2F");
            storeSub2F.innerHTML = "Fail";
        }
    } else {
        markOpenPopup();
        e.target.value = "";
    }
});
sub3Val.addEventListener("change", e => {
    var storeSub3P = document.getElementById("storeSub3P");
    var storeSub3F = document.getElementById("storeSub3F");
    if (storeSub3P.innerHTML === "Pass" || storeSub3F.innerHTML === "Fail") {
        storeSub3P.innerHTML = "";
        storeSub3F.innerHTML = "";
    }
    if (e.target.value >= 0 && e.target.value <= 100) {
        if (e.target.value >= 35) {
            var storeSub3P = document.querySelector("#storeSub3P");
            storeSub3P.innerHTML = "Pass";
        } else {
            var storeSub3F = document.querySelector("#storeSub3F");
            storeSub3F.innerHTML = "Fail";
        }
    } else {
        markOpenPopup();
        e.target.value = "";
    }
});
sub4Val.addEventListener("change", e => {
    var storeSub4P = document.getElementById("storeSub4P");
    var storeSub4F = document.getElementById("storeSub4F");
    if (storeSub4P.innerHTML === "Pass" || storeSub4F.innerHTML === "Fail") {
        storeSub4P.innerHTML = "";
        storeSub4F.innerHTML = "";
    }
    if (e.target.value >= 0 && e.target.value <= 100) {
        if (e.target.value >= 35) {
            var storeSub4P = document.querySelector("#storeSub4P");
            storeSub4P.innerHTML = "Pass";
        } else {
            var storeSub4F = document.querySelector("#storeSub4F");
            storeSub4F.innerHTML = "Fail";
        }
    } else {
        markOpenPopup();
        e.target.value = "";
    }
});
sub5Val.addEventListener("change", e => {
    var storeSub5P = document.getElementById("storeSub5P");
    var storeSub5F = document.getElementById("storeSub5F");
    if (storeSub5P.innerHTML === "Pass" || storeSub5F.innerHTML === "Fail") {
        storeSub5P.innerHTML = "";
        storeSub5F.innerHTML = "";
    }
    if (e.target.value >= 0 && e.target.value <= 100) {
        if (e.target.value >= 35) {
            var storeSub5P = document.querySelector("#storeSub5P");
            storeSub5P.innerHTML = "Pass";
        } else {
            var storeSub5F = document.querySelector("#storeSub5F");
            storeSub5F.innerHTML = "Fail";
        }
    } else {
        markOpenPopup();
        e.target.value = "";
    }
});

function markOpenPopup() {
    const popupContent = `
        <span class="close" onclick="closePopup()">&times;</span>
        <p> Incorrect Mark</p>
    `;
    const popup = document.getElementById("popup");
    const popupContentDiv = popup.querySelector(".popup-content");
    popupContentDiv.innerHTML = popupContent;
    popup.style.display = "block";
    return;
}

let ackValue = document.getElementById("ackValue");

function formAlreadySubmittedPopup() {
    const popupContent = `
        <span class="close" onclick="closePopup()">&times;</span>
        <p>Form already submitted!</p>
    `;
    const popup = document.getElementById("popup");
    const popupContentDiv = popup.querySelector(".popup-content");
    popupContentDiv.innerHTML = popupContent;
    popup.style.display = "block";
}

let formSubmitted = false;

form.addEventListener("submit", e => {
    e.preventDefault();

    if (formSubmitted) {
        formAlreadySubmittedPopup();
        return;
    }

    formSubmitted = true;

    let name = nameInp.value;
    let mobile_no = phoneInp.value;
    let dob = dateInp.value;
    let age = ageInp.value;
    let address = addressInp.value;
    let district = districtInp.value;
    let taluk = talukInp.value;
    let village = villageInp.value;
    let s1_english = sub1.value;
    let s2_mathematics = sub2.value;
    let s3_physics = sub3.value;
    let s4_chemistry = sub4.value;
    let s5_computer_science = sub5.value;

    // acknowledgement
    let strSplit = name.split("").splice(0, 3).join("").toUpperCase();
    let randomSuffix = Math.round(Math.random() * 10000000).toString().padStart(7, '0');
    let acknowledgement_number = strSplit + randomSuffix;
    //    console.log(acknowledgeValue)
    // alert(`DATA SUBMITTED \n Acknowledgement Number is :  ${acknowledgement_number}`);
    ackValue.innerHTML = `Acknowledgement Value is :  ${acknowledgement_number}`;

    // totol value
    let total_marks = Number(s1_english) + Number(s2_mathematics) + Number(s3_physics) + Number(s4_chemistry) + Number(s5_computer_science);
    totalValue.innerHTML = `Total value is : ${total_marks}`;
    
    //average
    let average_mark = Math.round(total_marks / 5);
    averageVal.innerHTML = `Average value is : ${average_mark}%`;

    openPopup(acknowledgement_number);

    // //JSON
    // let formValues = { name, mobile_no, dob, age, address, district, taluk, village, s1_english, s2_mathematics, s3_physics, s4_chemistry, s5_computer_science, acknowledgement_number, total_marks, average_mark }
    // let formData = JSON.stringify(formValues);

    function openPopup(acknowledgement_number) {
        const popupContent = `
            <span class="close" onclick="closePopup()">&times;</span>
            <p>Acknowledgement Value is: ${acknowledgement_number}</p>
            <p> Data Submitted 🎉</p>
        `;
        const popup = document.getElementById("popup");
        const popupContentDiv = popup.querySelector(".popup-content");
        popupContentDiv.innerHTML = popupContent;
        popup.style.display = "block";
        return;
    }

    let formValues = {
        "name": name,
        "id": {       
            "mobile_no": mobile_no,
            "acknowledgement_number": acknowledgement_number
        },
        "dob": dob,
        "age": age,
        "address": address,
        "district": district,
        "taluk": taluk,
        "village": village,
        "s1_english": s1_english,
        "s2_mathematics": s2_mathematics,
        "s3_physics": s3_physics,
        "s4_chemistry": s4_chemistry,
        "s5_computer_science": s5_computer_science,
        "total_marks": total_marks,
        "average_mark": average_mark
    };

    let formData = JSON.stringify(formValues);

    // Send POST request to save data
    fetch("http://localhost:8081/save", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: formData
    })
        .then(response => {
            if (response.ok) {
                // Handle success
                console.log("Student details saved successfully");
            } else {
                // Handle error
                console.error("Failed to save student details");
            }
        })
        .catch(error => {
            console.error("Error saving student details:", error);
        });

    // function save() {
    //     const response = fetch("http://localhost:8081/save", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: formData
    //     });
    // }
    // save();
    // console.log("executing");

});

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

//NEW FORM BUTTON
regNewFormBtn.addEventListener('click', e =>{
    location.reload();
});