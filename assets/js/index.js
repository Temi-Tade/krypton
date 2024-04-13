const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const uppercase = []
const numbers = []
const special = ["`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", "\\", "|", ";", ":", "\"", "'", "<", ">", "?", ",", ".", "/"]
let i = 0
let length = 0
let pass = []
const key_field = document.querySelector("input[type=password]")

lowercase.map(val => uppercase.push(val.toUpperCase()))


while (i < 10) {
    numbers.push(i)
    ++i
}

const getRand = (l) => {
    return Math.floor(Math.random() * l)
}

const CREATE_TOAST = (text) => {
    document.querySelector("#toast").style = "right: 10px"
    document.querySelector("#toast").innerHTML = text;
    setTimeout(()=>{
        document.querySelector("#toast").style = "right: -100px"
    },2000)
}

const TOGGLE_PWD = (t, el) => {
    if (el.type === "password") {
        el.type = "text"
        t.setAttribute("class", "fa-solid fa-eye-slash")
    } else {
        el.type = "password"
        t.setAttribute("class", "fa-solid fa-eye")
    }
}

const GENERATE_KEY = (e) => {
    pass = []
    length = 0
    e.preventDefault()
    this.generateLowerCase = () => {
        pass.push(lowercase[getRand(lowercase.length)])
    }
    this.generateUpperCase = () => {
        pass.push(uppercase[getRand(uppercase.length)])
    }
    this.generateNumbers = () => {
        pass.push(numbers[getRand(numbers.length)])
    }
    this.generateSpecials = () => {
        pass.push(special[getRand(special.length)])
    }
    while(length <= 2) {
        ++length
        generateLowerCase()
        generateUpperCase()
        generateNumbers()
        generateSpecials()
    }
    (() => {
        let arr =  pass.sort(() => {return 0.5 - Math.random()})
        key_field.value = arr.join("")
        document.querySelector("#copy").disabled = false
     })()
}

const COPY_KEY = (key) => {
    navigator.clipboard.writeText(key.value)
    CREATE_TOAST("<i class='fa-solid fa-check'></i> Copied")
}

// encryptor/decryptor
// algo for bruteforce
// save keys