const dogArr = data
const headerList = document.querySelector(".dogs-list")
const mainSection = document.querySelector(".main__dog-section")
const addButton = document.querySelector(".dogs-list__button--add")
const labelData = {
        name: 
        {
            text:"Dog's name"
            },
        image:
        {   
            text:"Dog's picture"
            },
        bio:
        {
            text:"Dog's bio"
            } 
    }
const inputData = {
        name:
        {
            type:"text"
        },
        image:
        {
            type:"url"
        },
        submit:
        {
            type:"submit"
        }
    }
for (let i=0;i<data.length;i++){
    generateHeaderItem(i)
}

// WRITE YOUR CODE BELOW!
function generateHeaderItem(index){
    const newDog = document.createElement('li')
    newDog.innerText = dogArr[index].name
    newDog.className = 'dogs-list__button'
    newDog.addEventListener('click', function() {generateDogCard(dogArr[index])})
    headerList.appendChild(newDog)
}

addButton.addEventListener('click', generateForm)

function generateForm(){
    mainSection.innerHTML = ""
    mainSection.appendChild(generateHeader(2,"Add a new Dog"))
    const form = document.createElement('form')
    form.className = "form"
    form.appendChild(generateLabel(labelData.name))
    form.appendChild(generateInput(inputData.name))
    form.appendChild(generateLabel(labelData.image))
    form.appendChild(generateInput(inputData.image))
    form.appendChild(generateLabel(labelData.bio))
    form.appendChild(generateTextArea(5,'bio'))
    const submit = generateInput(inputData.submit)
    submit.setAttribute("value", "Let's add a dog!")
    submit.className = "form__button"
    form.appendChild(submit)
    mainSection.appendChild(form)
    form.addEventListener('submit', addNewDog)
}

function addNewDog(event){
    data.unshift(event)
    generateHeaderItem(0)
    event.preventDefault()
}

function generateLabel(key){
    const label = document.createElement('label')
    label.setAttribute('for', key)
    label.innerText = key.text
    return label
}

function generateInput(key){
    const input = document.createElement('input')
    input.setAttribute("type",key.type)
    input.setAttribute("id",key)
    input.setAttribute("name",key)
    return input
}

function generateTextArea(rows, key){
    const textarea = document.createElement('textarea')
    textarea.setAttribute("rows", rows)
    textarea.setAttribute("id", key)
    textarea.setAttribute("name", key)
    return textarea
}

function generateDogCard(dog){
    mainSection.innerHTML = ""
    mainSection.appendChild(generateHeader(2,dog.name))
    mainSection.appendChild(generateImg(dog.image))
    mainSection.appendChild(generateMain())
    mainSection.appendChild(generateButton())
}

function generateHeader(headerNo, name){
    const header = document.createElement(`h${headerNo}`)
    header.innerText = name
    return header
    
}

function generateImg(src){
    const img = document.createElement('img')
    img.setAttribute('src', src)
    img.setAttribute('alt',"")
    return img
}

function generateLorem(){
    const p = document.createElement('p')
    p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quod modi amet cumque ullam est, beatae ipsa quibusdam aliquam labore dicta officia suscipit nostrum vero! Amet suscipit ullam tenetur fuga?"
    return p
}

function generateButton(){
    const div = document.createElement('div')
    div.className = "main__dog-section__btn"
    const p = document.createElement('p')
    p.innerHTML = "<em>Is naughty?</em> yes!"
    div.appendChild(p)
    const button = document.createElement('button')
    button.innerText = "Good dog!"
    div.appendChild(button)
    console.log(div)
    return div
}

function generateMain(){
    const main = document.createElement('div')
    main.className = "main__dog-section__desc"
    main.appendChild(generateHeader(3,'Bio'))
    main.appendChild(generateLorem())
    return main
}