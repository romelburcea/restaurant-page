import pic from './Picture1.jpg'
const content = document.querySelector("#content")


function createHomepage(){
    const image = document.createElement('img')
    image.classList.add('pic')
    image.src = pic

    const header1 = document.createElement('h1')
    header1.textContent = "Romel's Restaurant of Oddities"

    content.appendChild(header1)
    content.appendChild(image)


    ////first part

    const first = document.createElement("div")
    first.classList.add("first")
    content.appendChild(first)

    const h4 = document.createElement("h4")
    h4.textContent = "Welcome"
    

    const para1 = document.createElement("p")
    para1.textContent = "Prepare for a wonderful time in our great restaurant, with dishes ranging from traditional foods mixed with yogurt, indian foods mixed with mashed potatoes and what not."
    para1.classList.add("para1")

    first.appendChild(h4)
    first.appendChild(para1)


    ////second part

    const second = document.createElement("div")
    second.classList.add("second")
    content.appendChild(second)

    const h4second = document.createElement('h4') 
    h4second.textContent = "Hours"
    second.appendChild(h4second)

    createHours(second)



    ////third part

    const third = document.createElement('div')
    third.classList.add("third")
    content.appendChild(third)

    const h4third = document.createElement('h4')
    h4third.textContent = "Location"

    const h5 = document.createElement('h5')
    h5.textContent = "President of Romania Office, Palaca of Parliament, Bucharest"

    third.appendChild(h4third)
    third.appendChild(h5)
}


function createHours(container){
    const hours = [
        "Sunday: 8am - 8pm",
        "Monday: 6am - 6pm",
        "Tuesday: 6am - 6pm",
        "Wednesday: 6am - 6pm",
        "Thursday: 6am - 10pm",
        "Friday: 6am - 10pm",
        "Saturday: 8am - 10pm"
    ]

    for (let i = 0 ; i < hours.length; i++){
        const p2 = document.createElement('p')
        p2.textContent = hours[i]
        container.appendChild(p2)
    }
}

export default createHomepage   