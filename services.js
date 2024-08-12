function register(){
    return console.log("register");
}
function init(){
    $("#registerBtn").on('click', register);

}
window.onload=init;