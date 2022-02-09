const submit = document.getElementById("submit")
const username = document.getElementById("name")
const password = document.getElementById("pass")
const nameerror = document.getElementById("nameerror")
const passerror = document.getElementById("passerror")

submit.addEventListener("click", function(e){
    var errors = validate(username, password)
    if (errors.pass == null && errors.name == null){
    } else{
        console.log(errors)
        e.preventDefault()
        submit.style.borderColor = "#FF0000"
        if (errors.pass != null){
            passerror.innerHTML = errors.pass
            password.style.borderColor = "#FF0000"
        }
        if (errors.name != null){
            nameerror.innerHTML = errors.name
            username.style.borderColor = "#FF0000"
        }
        
  }
})

function validate(username, password){
    let errors = {name: null, pass: null}
    if (username.value === '' || username.value == null){
        errors.name = "Name cannot be blank."
      }else if (username.value.length <3 ){
        errors.name = "Name must be 3 characters or longer."
      }else if (username.value.includes(' ') || username.value.includes('"')|| username.value.includes("'")|| username.value.includes('#')|| username.value.includes('!')|| username.value.includes('£')|| username.value.includes('$')|| username.value.includes('%')|| username.value.includes('%')|| username.value.includes('^')|| username.value.includes('&')|| username.value.includes('*')|| username.value.includes('(')|| username.value.includes(')')|| username.value.includes('{')|| username.value.includes('}')|| username.value.includes('@')|| username.value.includes(';')|| username.value.includes(':')|| username.value.includes('/')|| username.value.includes('?')|| username.value.includes('.')|| username.value.includes(',')|| username.value.includes('>')|| username.value.includes('<')|| username.value.includes('\\')|| username.value.includes('|')|| username.value.includes('~')){
        errors.name = "Name cannot contain spaces or special characters "
      }
    if (password.value === '' || password.value === null) {
        errors.pass = "Cannot leave password blank."
      }
    return errors
}