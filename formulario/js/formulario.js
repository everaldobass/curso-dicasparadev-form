const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation")


form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});


// Atribuir os valores dos imputs
function checkInputs() {

    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;


    // Validar o nome
    if(usernameValue === ""){
        setErrorFor(username, "Nome de usuário obrigatório.");
    }else{
        setSuccessFor(username);
    }




    // Validar E-mail
    if(emailValue === ""){
        setErrorFor(email, "E-mail é obrigatório.");

    }else if(!checkEmail(emailValue)){

        setErrorFor(email, "Inserir um email válido.");
    }else{

        setSuccessFor(email);
    }

    //Validar Senha
    if(passwordValue === ""){
        setErrorFor(password, "Senha obrigatória");
    } else if(passwordValue.length < 7){
        setErrorFor(password, "Senha no minimo 7 caracteres.");
    } else{

        setSuccessFor(password);
    }



    // Confimrar Senha
    if(passwordConfirmationValue === ""){

        setErrorFor(passwordConfirmation, "Confirmar a senha. ");

    }else if (passwordConfirmationValue !== passwordValue){

        setErrorFor(passwordConfirmation, "Senhas não confere. ");
    }else {
        setSuccessFor(passwordConfirmation);
    }
    



    // Selecionar formulario
    const formControls = form.querySelectorAll(".form-control"); 


    const formIsValid = [...formControls].every((formControl) => {

        return formControl.className === "form-control success";
    });


    if (formIsValid){
        console.log("Formulario está 100% válido");
    }

}


// Função de Sucesso
function setSuccessFor(input){
    const formControl = input.parentElement;

    //Adicionar a classe de sucesso
    formControl.className = "form-control success";
}


//Função de Error

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    //Adicionar mensagem de erro
    small.innerText = message;

    //Adicionar classe de erro
    formControl.className = "form-control error";
}




function checkEmail(email) {

    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );
}



