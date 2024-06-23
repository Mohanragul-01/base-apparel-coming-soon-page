let form = document.querySelector("#form");
let email = document.querySelector("#email");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validate(email.value)) {
        form.classList.add("error");
    } else {
        form.classList.remove("error");
        email.value = "";
    }
});


function validate(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
