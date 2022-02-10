const dogArr = JSON.parse(JSON.stringify(data))
console.log(dogArr)
const headerList = document.querySelector(".dogs-list")
const mainSection = document.querySelector(".main__dog-section")
const addButton = document.querySelector(".dogs-list__button--add")

function renderHeader(){
    headerList.innerHTML = ""
    headerList.appendChild(createAdd())
    for (let i=0;i<dogArr.length;i++){
        generateHeaderItem(i)
        }
console.log(dogArr)
}

function createAdd(){
    const add = document.createElement('li')
    add.className = "dogs-list__button dogs-list__button--add"
    add.innerText = '+'
    add.addEventListener('click', generateForm)
    return add
}

renderHeader()

// WRITE YOUR CODE BELOW!
function generateHeaderItem(index){
    const newDog = document.createElement('li')
    newDog.innerText = dogArr[index].name
    newDog.className = 'dogs-list__button'
    newDog.addEventListener('click', function() {generateDogCard(dogArr[index])})
    headerList.appendChild(newDog)
}

function generateForm(){
    mainSection.innerHTML = ""
    mainSection.appendChild(generateHeader(2,"Add a new Dog"))
    const form = document.createElement('form')
    form.className = "form"
    form.appendChild(generateLabel('name'))
    form.appendChild(generateInput('name'))
    form.appendChild(generateLabel('image'))
    form.appendChild(generateInput('image'))
    form.appendChild(generateLabel('bio'))
    form.appendChild(generateTextArea(5,'bio'))
    const submit = generateInput('submit')
    submit.setAttribute("value", "Let's add a dog!")
    submit.className = "form__button"
    form.appendChild(submit)
    mainSection.appendChild(form)
    form.addEventListener('submit', addNewDog)
}

function addNewDog(event){
    const newDog = {
        id: dogArr.length+1,
        name: document.getElementById('name').value,
        image: document.getElementById('image').value,
        bio: document.getElementById('bio').value
    }
    dogArr.push(newDog)
    console.log(dogArr)
    renderHeader()
    event.preventDefault()
}

function generateLabel(key){
    const label = document.createElement('label')
    label.setAttribute('for', key)
    label.innerText = labelData[key].text
    return label
}

function generateInput(key){
    const input = document.createElement('input')
    input.setAttribute("type",inputData[key].type)
    input.setAttribute("id", key)
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
    mainSection.appendChild(generateMain(dog.bio))
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

function generateBio(bio){
    const p = document.createElement('p')
    p.innerText = bio
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

function generateMain(bio){
    const main = document.createElement('div')
    main.className = "main__dog-section__desc"
    main.appendChild(generateHeader(3,'Bio'))
    main.appendChild(generateBio(bio))
    return main
}