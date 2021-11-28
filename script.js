// (1)

let contactList = [
    {
      name: "Barry Allen",
      phone: "+1 555 555-5555",
      address: "123 front st, Unit #1, Dakota City",
      email: "theflash@gmail.com",
    },
    {
      name: "Beverly Crusher",
      phone: "778-555-1234",
      address: "101 Main St, Anytown, USA",
      email: "chiefmedicalofficer@slack.example.com",
    }, 
    {
      name: "Diana Prince",
      phone: "123-867-5309",
      address: "Warner Brothers Animation Lot",
      email: "wonderwoman@doc.example.com",
    },
    {
      name: "Roberta Dobbs",
      phone: "778-555-1234",
      address: "101 Main St, Anytown, USA",
      email: "subgenius@slack.example.com",
    },
    {
      name: "Bugs Bunny",
      phone: "123-867-5309",
      address: "Warner Brothers Animation Lot",
      email: "whatsup@doc.example.com",
    },
]



// (2)

const divMain = document.querySelector(".main")

// Helper function to create element and set classname
function createElement(tag, className) {
    let element = document.createElement(tag)
    element.className = className
    return element
}

// Helper function to set multiple attributes
function setMultipleAttributes(element, attributes) {
    for (var attributeName in attributes) {
       element.setAttribute(attributeName, attributes[attributeName])
    }
 }

// Removes all of the DOM nodes in div.main
function cleanUpMain() {
    while (divMain.firstChild) {
        divMain.removeChild(divMain.firstChild)
    }
}

// Creates and outputs a DOM node that is a single index/contact card
function createSingleIndex(contact) {

    let elementA = document.createElement("a")
    elementA.setAttribute("href", "page3.html")

    let elementDiv = createElement("div", "contact")

    let elementP = document.createElement("p")
    elementP.textContent = `${contact["name"]}`
    
    elementDiv.appendChild(elementP)
    elementA.appendChild(elementDiv)
    
    return elementA
}

// Creates all of the DOM nodes that are unique to the index/Contacts page
function renderIndex(contacts) {

    for (let i = 0; i < contacts.length; i++) {
        
        let contact = contacts[i]

        divMain.appendChild(createSingleIndex(contact))
    }   
}

const linkContacts = document.querySelector("#contactshome")

linkContacts.addEventListener("click", (e) => {
    cleanUpMain()
    renderIndex(contactList)
    e.preventDefault()
})



