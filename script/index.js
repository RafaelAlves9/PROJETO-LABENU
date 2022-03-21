//reduzir codigo usado frequentemente
const queryS = (e) => document.querySelector(e);

//executando checagem com submit
queryS('form').addEventListener("submit", (e) => {
    //cancelando o envio do formulário
    e.preventDefault();

    validateEmail()
    validateMessenge()
    validateForm()
});

//verificando e validando todo o formulário
function validateForm(){
    if ( emailStatus && messengeStatus === true){
        queryS('.alert-sucess').classList.add('active')
        queryS('.alert-sucess').innerHTML = `Obrigado pelo contato, ${usuario}!`
    } else {
        queryS('.alert-sucess').classList.remove('active')
    }
}

//validando email
let emailStatus
function validateEmail(){
    
    const inputEmail = queryS('.email-form').value;
    usuario = inputEmail.substring(0, inputEmail.indexOf("@"));

    //condição de validez
    var regex = /\S+@\S+\.\S+/;

    const email = regex.test(inputEmail); //retorna true ou false
    console.log(email)
    if (email == true){
        emailStatus = true
        queryS('.email-error').classList.remove('active')
    } else{
        emailStatus = false
        queryS('.email-error').classList.add('active')
        queryS('.email-error').innerHTML = 'Erro no envio: Endereço de email inválido'
    }
}

//validando a mensagem
let messengeStatus
function validateMessenge(){
    if(queryS('.texto-form').value < 1){
        queryS('.text-error').classList.add('active')
        queryS('.text-error').innerHTML = 'Erro no envio: Insira uma mensagem'
        messengeStatus = false
    } else {
        queryS('.text-error').classList.remove('active')
        messengeStatus = true
    }
}