const content = document.querySelector("#content")

function createContact(){
    const contactInfo = document.createElement('div')
    contactInfo.classList.add('contactstuff')
    contactInfo.textContent = "Klaus Iohannis: No Way to Reach, He if Flying RN!!"

    content.appendChild(contactInfo)
}

export default createContact