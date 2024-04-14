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

// marks
let sub1 = document.getElementById("sub1Val");
let sub2 = document.querySelector("#sub2Val");
let sub3 = document.querySelector("#sub3Val");
let sub4 = document.querySelector("#sub4Val");
let sub5 = document.querySelector("#sub5Val");

let totalValue = document.querySelector("#totalVal");
let averageVal = document.getElementById("averageVal");

sub1.addEventListener("change", e => {
    if (e.target.value >= 0 && e.target.value <= 100) {
        if (e.target.value >= 35) {
            var storeSub1 = document.querySelector("#storeSub1");
            storeSub1.innerHTML = "Pass";
        } else {
            storeSub1.innerHTML = "Fail";
        }
    } else {
        markOpenPopup();
        e.target.value = "";
    }
});
sub2.addEventListener("change", e => {
    if (e.target.value >= 0 && e.target.value <= 100) {
        if (e.target.value >= 35) {
            var storeSub2 = document.querySelector("#storeSub2");
            storeSub2.innerHTML = "Pass";
        } else {
            storeSub2.innerHTML = "Fail";
        }
    } else {
        markOpenPopup();
        e.target.value = "";
    }
});
sub3.addEventListener("change", e => {
    if (e.target.value >= 0 && e.target.value <= 100) {
        if (e.target.value >= 35) {
            var storeSub3 = document.querySelector("#storeSub3");
            storeSub3.innerHTML = "Pass";
        } else {
            storeSub3.innerHTML = "Fail";
        }
    } else {
        markOpenPopup();
        e.target.value = "";
    }
})
sub4.addEventListener("change", e => {
    if (e.target.value >= 0 && e.target.value <= 100) {
        if (e.target.value >= 35) {
            var storeSub4 = document.querySelector("#storeSub4");
            storeSub4.innerHTML = "Pass";
        } else {
            storeSub4.innerHTML = "Fail";
        }
    } else {
        markOpenPopup();
        e.target.value = "";
    }
})
sub5.addEventListener("change", e => {
    if (e.target.value >= 0 && e.target.value <= 100) {
        if (e.target.value >= 35) {
            var storeSub5 = document.querySelector("#storeSub5");
            storeSub5.innerHTML = "Pass";
        } else {
            storeSub5.innerHTML = "Fail";
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

// !for taluk and village
districtInp.addEventListener("change", e => {
    // console.log(e.target.value);
    if (e.target.value == "chennai") {
        let taluk1 = ["C1", "C2", "C3", "C4", "C5"];
        let village1 = {
            "C1": ["Korattur", "Vyasarpadi", "Madhvaram", "Kolathur", "Perambur"],
            "C2": ["VillageC21", "VillageC22", "VillageC23", "VillageC24", "VillageC25"],
            "C3": ["VillageC31", "VillageC32", "VillageC33", "VillageC34", "VillageC35"],
            "C4": ["VillageC41", "VillageC42", "VillageC43", "VillageC44", "VillageC45"],
            "C5": ["VillageC51", "VillageC52", "VillageC53", "VillageC54", "VillageC55"]
        };

        let storeTaluk = document.getElementById("taluk");
        let storeVillage = document.getElementById("village");

        // Clear previous options
        storeTaluk.innerHTML = "";
        storeVillage.innerHTML = "";

        for (let i = 0; i < taluk1.length; i++) {
            storeTaluk.innerHTML += `<option value="${taluk1[i]}">${taluk1[i]}</option>`;
        };

        // Populate village options based on selected taluk
        storeTaluk.addEventListener('change', function () {
            let selectedTaluk = this.value;
            let villages = village1[selectedTaluk];

            // Clear previous village options
            storeVillage.innerHTML = "";

            // Populate village options
            for (let i = 0; i < villages.length; i++) {
                storeVillage.innerHTML += `<option value="${villages[i]}">${villages[i]}</option>`;
            }
        });
    }
    else if (e.target.value == "Salem") {
        let taluk2 = ["S1", "S2", "S3"];
        let village2 = {
            "S1": ["Rangapuram", "Kandhampatty", "Ramavra"],
            "S2": ["VillageS21", "VillageS22", "VillageS23", "VillageS24"],
            "S3": ["VillageS31", "VillageS32", "VillageS33"]
        };
    
        let storeTaluk = document.getElementById("taluk");
        let storeVillage = document.getElementById("village");
    
        // Clear previous options
        storeTaluk.innerHTML = "";
        storeVillage.innerHTML = "";
    
        for (let i = 0; i < taluk2.length; i++) {
            storeTaluk.innerHTML += `<option value="${taluk2[i]}">${taluk2[i]}</option>`;
        };
    
        // Populate village options based on selected taluk
        storeTaluk.addEventListener('change', function() {
            let selectedTaluk = this.value;
            let villages = village2[selectedTaluk];
    
            // Clear previous village options
            storeVillage.innerHTML = "";
    
            // Populate village options
            for (let i = 0; i < villages.length; i++) {
                storeVillage.innerHTML += `<option value="${villages[i]}">${villages[i]}</option>`;
            }
        });
    }
    
    else if (e.target.value == "Coimbatore") {
        let taluk3 = ["Co1", "Co2", "Co3", "Co4"];
        let village3 = {
            "Co1": ["Gandhipuram", "Townhall", "Ram Nagar", "R.S Puram"],
            "Co2": ["VillageCo21", "VillageCo22", "VillageCo23", "VillageCo24"],
            "Co3": ["VillageCo31", "VillageCo32", "VillageCo33"],
            "Co4": ["VillageCo41", "VillageCo42", "VillageCo43", "VillageCo44", "VillageCo45"]
        };
    
        let storeTaluk = document.getElementById("taluk");
        let storeVillage = document.getElementById("village");
    
        // Clear previous options
        storeTaluk.innerHTML = "";
        storeVillage.innerHTML = "";
    
        for (let i = 0; i < taluk3.length; i++) {
            storeTaluk.innerHTML += `<option value="${taluk3[i]}">${taluk3[i]}</option>`;
        };
    
        // Populate village options based on selected taluk
        storeTaluk.addEventListener('change', function() {
            let selectedTaluk = this.value;
            let villages = village3[selectedTaluk];
    
            // Clear previous village options
            storeVillage.innerHTML = "";
    
            // Populate village options
            for (let i = 0; i < villages.length; i++) {
                storeVillage.innerHTML += `<option value="${villages[i]}">${villages[i]}</option>`;
            }
        });
    }
    
})

let ackValue = document.getElementById("ackValue");

form.addEventListener("submit", e => {
    e.preventDefault();
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
    let acknowledgement_number = strSplit + Math.round(Math.random() * 1000000000);
    //    console.log(acknowledgeValue)
    // alert(`DATA SUBMITTED \n Acknowledgement Number is :  ${acknowledgement_number}`);
    ackValue.innerHTML = `Acknowledgement Value is :  ${acknowledgement_number}`;

    // totol value
    let total_marks = Number(s1_english) + Number(s2_mathematics) + Number(s3_physics) + Number(s4_chemistry) + Number(s5_computer_science);
    totalValue.innerHTML = `Total value is : ${total_marks}`;

    //average
    let average_mark = Math.round(total_marks / 5);
    averageVal.innerHTML += `Average value is : ${average_mark}%`;
    openPopup(acknowledgement_number);

    //JSON
    let formValues = { name, mobile_no, dob, age, address, district, taluk, village, s1_english, s2_mathematics, s3_physics, s4_chemistry, s5_computer_science, acknowledgement_number, total_marks, average_mark }
    let formData = JSON.stringify(formValues);

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


    function save() {
        const response = fetch("http://localhost:8081/save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: formData
        });
    }
    save();
    console.log("executing");

});



function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}
