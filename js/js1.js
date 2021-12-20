const firstname = document.querySelector(".firstname");
const lastname = document.querySelector(".lastname");
const email = document.querySelector(".email");
const date_birth = document.querySelector(".dob");
const phone = document.querySelector(".phone-number");
const password = document.querySelector(".pwd");
const password2 = document.querySelector(".pwd2");
const head1 = document.querySelector("h1");
const myform = document.querySelector("form");
const msg = document.querySelector(".msg");
const msg1 = document.querySelector(".msg1");
const userlist = document.querySelector(".userlist");
const submitbtn = document.querySelector(".submit");

// const inputt = document.querySelector("input");
const dummy = "HERE !"

myform.addEventListener('mouseover', funct1);

function funct1(e) {
    //this was causing the goddam problem in the if statement :  submitbtn.style.display == "none"  
    if (firstname.value != "" && lastname.value != "" && email.value != "" && date_birth.value != "" && phone.value != "" && password.value != "" && password2.value != "") {
        submitbtn.style.display = "block"
    } else {
        submitbtn.style.display = "none"
    }
    // document.querySelector("body").style.backgroundColor = "grey"
    // head1.style.color = "blue";
    // head1.style.transform = "scale(1.2)"
    // head1.style.fontFamily = "Verdana"
    // head1.style.transition = "all 4s"

    // const h = document.createElement("h3");
    // const word = document.createTextNode("pleease!");
    // h.appendChild(word);

    // setTimeout(() => {
    //     //  reset values to previous state
    //     head1.style.color = "";
    //     head1.style.transform = "";
    //     head1.style.fontFamily = ""
    // }, 3000);
};

myform.addEventListener('mouseleave', funct7);

function funct7(e) {
    document.querySelector("body").style.backgroundColor = ""
    // myform.style.transform = "scale(.9)"

};


myform.addEventListener('submit', funct2);

function funct2(e1) {
    e1.preventDefault();

    if (firstname.value === "" || lastname.value === "" || email.value === "" || date_birth.value === "" || phone.value === "" || password.value === "") {
        msg.classList.add("error");
        msg.textContent = "please complete all the fields";
        setTimeout(() => msg.remove(), 4000);
    } else {
        console.log("success")
        const li_added = document.createElement("li");
        li_added.appendChild(document.createTextNode(
            `${firstname.value} - ${lastname.value} - ${email.value} - ${date_birth.value} - ${phone.value}- ${password.value}`));
        userlist.appendChild(li_added);

        setTimeout(() => {
            li_added.remove(); /* l3azzzzzzzzzzzzz*/
        }, 4000);

        //clear fields
        firstname.value = ""
        lastname.value = ""
        email.value = ""
        date_birth.value = ""
        phone.value = ""
        password.value = ""

        //not working!
        const msgg = document.createElement("span");
        msgg.appendChild(document.createTextNode(
            `Type the infos of another user`));
        span.appendChild(msgg);
        msgg.style.display = "block";
        setTimeout(() => msg1.remove(), 2000);
    }
}



document.querySelectorAll("input").forEach((inputt) => {
    inputt.addEventListener('click', funct3);
    inputt.addEventListener('mouseleave', funct4);
    // inputt.addEventListener('mouseenter', funct5);
    inputt.addEventListener('mouseover', funct6);


    function funct3(e2) {
        myform.style.backgroundColor = "lightgrey"
    };

    function funct4(e2) {
        myform.style.backgroundColor = "rgba(135, 206, 250)"
        myform.style.width = "755"
        myform.style.transition = "ease all 2s"
    };

    function funct5(e2) {
        myform.style.backgroundColor = "rgba(135, 206, 250, 0.281)"
    };

    function funct6(e2) {
        myform.style.backgroundColor = ""
        myform.style.width = "850px"
    };
});


/* DOM 3 */

let test = document.getElementById("test");

// Briefly make the list purple when the mouse moves off the
// <ul> element
test.addEventListener("mouseleave", function (event) {
    // highlight the mouseleave target
    event.target.style.color = "purple";

    // reset the color after a short delay
    setTimeout(function () {
        event.target.style.color = "";
    }, 1000);
}, false);

// Briefly make an <li> orange when the mouse moves off of it
test.addEventListener("mouseout", function (event) {
    // highlight the mouseout target
    event.target.style.color = "orange";

    // reset the color after a short delay
    setTimeout(function () {
        event.target.style.color = "";
    }, 500);
}, false);


function ShowMessage(firstNamee, lastNamee) {

    // console.log("Hello " + arguments[0] + " " + arguments[0]);
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

ShowMessage("Steve", "Jobs");
ShowMessage("Bill", "Gates");
// ShowMessage(100, 200);


//Example: Function Expression
var add = function sum(val1, val2) {
    return val1 + val2;
};

var result1 = add(10, 20);
console.log(result1)

// Nested Functions

function ShowMessageee(ff) {
    function SayHello() {
        console.log("Hello " + ff);
    }

    SayHello();
}

ShowMessageee("Steve");


// myform.addEventListener("mouseover", () => {

// })