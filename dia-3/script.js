let button = document.getElementById("button")
let nombre = document.getElementById("text-name")
let lastname = document.getElementById("text-lastname")
let newUser = document.createElement("list")

button.addEventListener("click", function () {
    
    if(nombre.value != "" && lastname.value != ""){
        nombre.classList.add("is-valid");
        nombre.classList.remove("is-invalid")
        lastname.classList.add("is-valid");
        lastname.classList.remove("is-invalid")
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        });
        nombre.value = ""
        lastname.value = ""
        newUser.innerHTML =


    }else{
        nombre.classList.add("is-invalid");
        nombre.classList.remove("is-valid")
        lastname.classList.add("is-invalid");
        lastname.classList.remove("is-valid")
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
        });
    }

})