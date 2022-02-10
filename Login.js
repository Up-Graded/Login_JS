const submit = document.getElementById("submit")
const username = document.getElementById("name")
const password = document.getElementById("pass")
const loginerror = document.getElementById("loginerror")
const users = $.getJSON("users.json", function(json){return json})

submit.addEventListener("click", function(e){
    var error = validate(username, password)
    if (error == null){
    } else{
        console.log(error)
        loginerror.innerHTML = error
        
  }
})

function validate(username, password){
    let error = null
    if (username.value === '' || username.value === null || password.value === '' || password.value === null){
        error = "Username and password required"
      }else if (!(users.includes(username))){
        error = "Username or password incorrect"
      }
    return error
}