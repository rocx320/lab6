// function headAnimation(){
//     let h1 = document.getElementById('top-head');
//     h1.style.webkitBackgroundClip = "text";
//     h1.style.webkitTextFillColor = "transparent";
// }
//
// function headAnimationOff(){
//     let h1 = document.getElementById('top-head');
//     h1.style.removeProperty('-webkit-background-clip');
//     h1.style.removeProperty('-webkit-text-fill-color');
// }


function loadAnimations() {
    let nav = document.getElementById('top-head');
    nav.style.transform = "translateY(0%)";
    nav.style.opacity = "100%"
    let form = document.getElementById('first_expiry');
    form.style.transform = "translateY(0%)";
    form.style.opacity = "100%"
    let footer = document.getElementById('footer');
    footer.style.transform = "translateY(0%)";
    footer.style.opacity = "100%"
}

function validateForm() {
    let status = false;
    //Input Fields
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let age = document.getElementById('age').value;

    //Response Spans
    let nameResp = document.getElementById('nameResp');
    let phoneResp = document.getElementById('phoneResp');
    let emailResp = document.getElementById('emailResp');
    let ageResp = document.getElementById('ageResp');

    //Name Validation
    let nameReg = /^([a-zA-Z]){5,25}$/;
    let nameValid = nameReg.test(name);
    if (name.length === 0) {
        nameResp.classList.remove("text-success");
        nameResp.classList.add("text-danger");
        nameResp.innerText = "Enter a username!"
        status = false;
    } else if (!nameValid) {
        nameResp.classList.remove("text-success");
        nameResp.classList.add("text-danger");
        nameResp.innerText = "Username is invalid!"
        status = false;
    } else {
        nameResp.classList.remove("text-danger");
        nameResp.classList.add("text-success");
        nameResp.innerText = "Username is valid";
        status = true;
    }

    //Phone Validation
    let phoneReg = /^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/;
    let phoneValid = phoneReg.test(phone);
    if (phone.length === 0) {
        phoneResp.classList.remove("text-success");
        phoneResp.classList.add("text-danger");
        phoneResp.innerText = "Enter a phone number!"
        status = false;
    } else if (!phoneValid) {
        phoneResp.classList.remove("text-success");
        phoneResp.classList.add("text-danger");
        phoneResp.innerText = "Phone Number is invalid!"
        status = false;
    } else {
        phoneResp.classList.remove("text-danger");
        phoneResp.classList.add("text-success");
        phoneResp.innerText = "Phone Number is valid";
        status = true;
    }


    //Email Validation
    let emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let emailValid = emailReg.test(email);
    if (email.length === 0) {
        emailResp.classList.remove("text-success");
        emailResp.classList.add("text-danger");
        emailResp.innerText = "Enter a Email!"
        status = false;
    } else if (!emailValid) {
        emailResp.classList.remove("text-success");
        emailResp.classList.add("text-danger");
        emailResp.innerText = "Email is invalid!"
        status = false;
    } else {
        emailResp.classList.remove("text-danger");
        emailResp.classList.add("text-success");
        emailResp.innerText = "Email is valid";
        status = true;
    }

    //Age Validation
    let ageReg = /^(1[89]|[2-9]\d)$/;
    let ageValid = ageReg.test(age);
    if (age.length === 0) {
        ageResp.classList.remove("text-success");
        ageResp.classList.add("text-danger");
        ageResp.innerText = "Enter your age!"
        status = false;
    } else if (!ageValid) {
        ageResp.classList.remove("text-success");
        ageResp.classList.add("text-danger");
        ageResp.innerText = "Age is invalid!"
        status = false;
    } else {
        ageResp.classList.remove("text-danger");
        ageResp.classList.add("text-success");
        ageResp.innerText = "Age is valid";
        status = true;
    }

    return status;
}

let expiry; //global variable to store number of days for cookie expiry value

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function daysCheck() {
    let days = document.getElementById('expiry').value;
    let daysResp = document.getElementById('daysResp');
    let daysReg = /^[1-5]$/;
    if (!daysReg.test(days)) {
        document.getElementById('expiryBtn').setAttribute('disabled', 'disabled');
        daysResp.classList.remove('text-success');
        daysResp.classList.add('text-danger');
        daysResp.innerText = "Please enter a value between 1 & 5 days!";
    } else {
        document.getElementById('expiryBtn').removeAttribute('disabled');
        daysResp.classList.remove('text-danger');
        daysResp.classList.add('text-success');
        daysResp.innerText = "Valid Value! Continue ahead 😁!";
    }
}

function sectionOneOut() {
    expiry = document.getElementById('expiry').value;
    console.log(expiry);
    let sect1 = document.getElementById('first_expiry');
    sect1.style.transform = "translateX(-150%)";
    sect1.style.opacity = "0%";
    setTimeout(function () {
        sect1.classList.add('d-none');
        sectionTwoIn();
    }, 500);
}

function sectionTwoIn() {
    let sect2 = document.getElementById('second_data');
    sect2.classList.remove('d-none');
    setTimeout(function () {
        sect2.style.opacity = "100%"
        sect2.style.transform = "translateX(0%)";
    }, 200);
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function deleteCookie(value){
    document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    document.getElementById('cookieResp').classList.remove('d-none');
    document.getElementById('cookieResp').innerText = `Cookie Deleted: ${value}`;
}

function sectionTwoOut() {

    let status = validateForm();
    let btnResp = document.getElementById('btnResp');
    if (!status) {

        btnResp.classList.remove('text-success');
        btnResp.classList.add('text-danger');
        btnResp.innerText = "Please fill the form properly!";
    } else {

        btnResp.classList.remove('text-danger');
        btnResp.classList.add('text-success');
        btnResp.innerText = "Values: Valid";

        let name = document.getElementById('name');
        let email = document.getElementById('email');
        let age = document.getElementById('age');
        let phone = document.getElementById('phone');
        let color = document.getElementById('color').value;

        //Background and Session Storage
        document.getElementById('body').style.backgroundColor = color;
        sessionStorage.setItem('bg-color', color);

        //Cookie Storage
        setCookie(name.id, name.value, expiry);
        setCookie(email.id, email.value, expiry);
        setCookie(age.id, age.value, expiry);
        setCookie(phone.id, phone.value, expiry);
        let sect2 = document.getElementById('second_data');
        sect2.style.transform = "translateX(-150%)";
        sect2.style.opacity = "0%";
        setTimeout(function () {
            sect2.classList.add('d-none');
            sectionThreeIn();
        }, 200)
    }
}

let img = document.getElementById('img'); //getting image input tag [type: file]
img.onchange = evt => {
    const [file] = img.files; //storing uploaded file in an array/object
    if (file) { //if file exists
        document.getElementById('pImg').src = URL.createObjectURL(file); //URL returns the document object's location as string and createObjectURL creates a url pointing to the file/object passed as the parameter
    }
}


function sectionThreeIn() {
    let sect3 = document.getElementById('pic_section');
    sect3.classList.remove('d-none');
    setTimeout(function () {
        sect3.style.opacity = "100%"
        sect3.style.transform = "translateX(0%)";
    }, 200);

    let imgSrc = localStorage.getItem('fileData');
    let name = getCookie('name');
    document.getElementById('name-sect').innerHTML = `<h3 class="text-light">${name}</h3>`;


}