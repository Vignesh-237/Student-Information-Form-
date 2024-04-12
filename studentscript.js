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
    if (e.target.value >= 35) {
        var storeSub1 = document.querySelector("#storeSub1");
        storeSub1.innerHTML = "Pass";
    } else {
        storeSub1.innerHTML = "Fail";
    }
});
sub2.addEventListener("change", e => {
    if (e.target.value >= 35) {
        let storeSub2 = document.querySelector("#storeSub2");
        storeSub2.innerHTML = "Pass"
    } else {
        storeSub2.innerHTML = "Fail"
    }
})
sub3.addEventListener("change", e => {
    if (e.target.value >= 35) {
        let storeSub3 = document.querySelector("#storeSub3");
        storeSub3.innerHTML = "Pass"
    } else {
        storeSub3.innerHTML = "Fail"
    }
})
sub4.addEventListener("change", e => {
    if (e.target.value >= 35) {
        let storeSub4 = document.querySelector("#storeSub4");
        storeSub4.innerHTML = "Pass"
    } else {
        storeSub4.innerHTML = "Fail"
    }
})
sub5.addEventListener("change", e => {
    if (e.target.value >= 35) {
        let storeSub5 = document.querySelector("#storeSub5");
        storeSub5.innerHTML = "Pass"
    } else {
        storeSub5.innerHTML = "Fail"
    }
})

// !for taluk and village
districtInp.addEventListener("change", e => {
    // console.log(e.target.value);
    if (e.target.value == "chennai") {
        let taluk1 = ["C1", "C2", "C3", "C4", "C5"];
        let village1 = ["Korattur", "Vyasarpadi", "Madhvaram", "Kolathur", "Perambur"];

        let storeTaluk = document.getElementById("taluk");
        let storeVillage = document.getElementById("village");

        for (let i = 0; i < taluk1.length; i++) {
            // storeTaluk.push(taluk[i])
            storeTaluk.innerHTML += `<option value=${taluk1[i]}>${taluk1[i]}</option>`
        };
        for (let i = 0; i < village1.length; i++) {
            storeVillage.innerHTML += `<option value=${village1[i]}>${village1[i]}</option>`
        }
    }
    else if (e.target.value == "Salem") {
        let taluk2 = ["S1", "S2", "S3", "S4"];
        let village2 = ["Rangapuram", "Kandhampatty", "Ramavra"];

        let storeTaluk = document.getElementById("taluk");
        let storeVillage = document.getElementById("village");

        for (let i = 0; i < taluk2.length; i++) {
            // storeTaluk.push(taluk[i])
            storeTaluk.innerHTML += `<option value=${taluk2[i]}>${taluk2[i]}</option>`
        };
        for (let i = 0; i < village2.length; i++) {
            storeVillage.innerHTML += `<option value=${village2[i]}>${village2[i]}</option>`
        }
    }
    else if (e.target.value == "Coimbatore") {
        let taluk3 = ["Co1", "Co2", "Co3", "Co4"];
        let village3 = ["Gandhipuram", "Townhall", "Ram Nagar", "R.S Puram"];

        let storeTaluk = document.getElementById("taluk");
        let storeVillage = document.getElementById("village");

        for (let i = 0; i < taluk3.length; i++) {
            // storeTaluk.push(taluk[i])
            storeTaluk.innerHTML += `<option value=${taluk3[i]}>${taluk3[i]}</option>`
        };
        for (let i = 0; i < village3.length; i++) {
            storeVillage.innerHTML += `<option value=${village3[i]}>${village3[i]}</option>`
        }
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
    let acknowledgement_number = strSplit + Math.round(Math.random() * 10000);
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
    // localStorage.setItem("formData", formData);

    function openPopup(acknowledgement_number) {
        const popupContent = `
            <span class="close" onclick="closePopup()">&times;</span>
            <p>Acknowledgement Value is: ${acknowledgement_number}</p>
            <p>Kindly, Register the form</p>
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
    
})
function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}