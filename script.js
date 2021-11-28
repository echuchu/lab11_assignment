const elementDivMain = document.querySelector(".main")
const linkContacts = document.querySelector("#contactshome")
const linkCreate = document.querySelector("#newcontact")


// ***** Code from Assignment Part B, some of it is modified

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
    while (elementDivMain.firstChild) {
        elementDivMain.removeChild(elementDivMain.firstChild)
    }
}

// Creates all of the DOM nodes that are unique to the index/Contacts page
function renderIndex(contacts) {
    for (let i = 0; i < contacts.length; i++) {
        let contact = contacts[i]
        elementDivMain.appendChild(createSingleIndex(contact))
    }   
}



// ***** New code for Lab 11 Assignment

// (1) Create global contact list

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



// (2) #contacthome Event Listener 

linkContacts.addEventListener("click", (e) => {
    cleanUpMain()
    renderIndex(contactList)
    e.preventDefault()
})



// 3 #newcontact Event Listener

linkCreate.addEventListener("click", (e) => {
    cleanUpMain()
    renderCreate()
    e.preventDefault()
})



// (4) edit createSingleIndex() for click handler

// Creates a DOM node that represents a single index card for the Index page
function createSingleIndex(contact) {

    let elementA = document.createElement("a")
    elementA.setAttribute("href", "page3.html")

    let elementDiv = createElement("div", "contact")

    let elementP = document.createElement("p")
    elementP.textContent = `${contact["name"]}`
    
    elementDiv.appendChild(elementP)
    elementA.appendChild(elementDiv)
    
    elementA.addEventListener("click", function (e) {
        for (let i = 0; i < contactList.length; i++) {
            if (contactList[i]["name"] == this.firstChild.firstChild.textContent) {
                cleanUpMain()
                renderView(contactList[i])
                e.preventDefault()
            }
        }
    })
    return elementA
}



// (5) add event listener to close button in renderView
// (6) ensure clicking on 'edit' does nothing (did not see bonus?)

function renderView(contact) {
    
    let elementDivContactInfo = createElement("div", "contactinfo")

    let elementDivContactName = createElement("div", "contactname")
    elementDivContactName.textContent = ` ${contact.name} `

    let elementImg = document.createElement("img")
    setMultipleAttributes(elementImg, {
        "src": "./img/profile.jpg",
        "class": "profilepic",
        "alt": "Profile picture"
    })

    elementDivContactName.appendChild(elementImg)

    let elementDivContactEmail = createElement("div", "contactemail")
    elementDivContactEmail.textContent = `email: ${contact.email}`

    let elementDivContactPhone = createElement("div", "contactphone")
    elementDivContactPhone.textContent = `cell: ${contact.phone}`

    let elementDivContactAddress = createElement("div", "contactaddress")
    elementDivContactAddress.textContent = `address: ${contact.address}`

    let elementDivButtons = createElement("div", "buttons")

    let elementButtonEdit = createElement("button", "button edit")
    elementButtonEdit.value = "Edit"
    elementButtonEdit.textContent = "Edit"
    elementButtonEdit.addEventListener("click", function (e) {
        e.preventDefault()
    })

    let elementButtonClose = createElement("button", "button close")
    elementButtonClose.value = "Close"
    elementButtonClose.textContent = "Close"
    elementButtonClose.addEventListener("click", function (e) {
        cleanUpMain()
        renderIndex(contactList)
        e.preventDefault()
    })

    elementDivButtons.append(elementButtonEdit, elementButtonClose)

    elementDivContactInfo.append(elementDivContactName, elementDivContactEmail, elementDivContactPhone, elementDivContactAddress, elementDivButtons)
    
    elementDivMain.appendChild(elementDivContactInfo)
}



// (7) event listener for cancel in renderCreate
// (8) event listener for save in renderCreate
// (9) create new contact object from Create contact into contactList

function renderCreate() {
    // Creates all of the DOM nodes that are unique to the Create page
    // Removed parameter so form does not auto-populate

    //Top divs of main
    let elementDivContactEdit = createElement("div", "contactedit")

    let elementDivContactImg = createElement("div", "contactimg")

    let elementImgProfilePic = document.createElement("img")
    setMultipleAttributes(elementImgProfilePic, {
        "src": "./img/profile.jpg",
        "class": "profilepic",
        "alt": "Profile picture"
    })

    //Append top divs in main
    elementDivContactImg.append(elementImgProfilePic)
    elementDivContactEdit.append(elementDivContactImg)

    //Bottom divs of main
    let elementDivForm = createElement("div", "form")

    let elementForm = document.createElement("form")

    // Contact Name

    let elementInputContactName = document.createElement("input")
    setMultipleAttributes(elementInputContactName, {
        "type": "text",
        "id": "contactname",
        "name": "contactname",
        "placeholder": "Contact Name"
    })

    let elementButtonExtraNameField = document.createElement("button")
    setMultipleAttributes(elementButtonExtraNameField, {
        "class": "extrafield",
        "id": "extranamefield",
        "name": "extranamefield"
    })
    elementButtonExtraNameField.textContent = "+"

    // Contact Phone

    let elementInputContactPhone = document.createElement("input")
    setMultipleAttributes(elementInputContactPhone, {
        "type": "tel",
        "id": "contactphone",
        "name": "contactphone",
        "placeholder": "Contact Phone"
    })
    
    let elementButtonExtraPhoneField = document.createElement("button")
    setMultipleAttributes(elementButtonExtraPhoneField, {
        "class": "extrafield",
        "id": "extraphonefield",
        "name": "extraphonefield"
    })
    elementButtonExtraPhoneField.textContent = "+"

    // Contact Address

    let elementInputContactAddress = document.createElement("input")
    setMultipleAttributes(elementInputContactAddress, {
        "type": "tel",
        "id": "contactaddress",
        "name": "contactaddress",
        "placeholder": "Contact Address"
    })
    
    let elementButtonExtraAddressField = document.createElement("button")
    setMultipleAttributes(elementButtonExtraAddressField, {
        "class": "extrafield",
        "id": "extraaddressfield",
        "name": "extraaddressfield"
    })
    elementButtonExtraAddressField.textContent = "+"

    // Contact Email

    let elementInputContactEmail = document.createElement("input")
    setMultipleAttributes(elementInputContactEmail, {
        "type": "tel",
        "id": "contactemail",
        "name": "contactemail",
        "placeholder": "Contact Email"
    })
    
    let elementButtonExtraEmailField = document.createElement("button")
    setMultipleAttributes(elementButtonExtraEmailField, {
        "class": "extrafield",
        "id": "extraemailfield",
        "name": "extraemailfield"
    })
    elementButtonExtraEmailField.textContent = "+"

    // End of Form Buttons

    let elementDivButtons = createElement("div", "buttons")

    // Save Contact Button

    let elementButtonSaveContact = document.createElement("button")
    setMultipleAttributes(elementButtonSaveContact, {
        "type": "submit",
        "class": "button save",
        "id": "savecontact",
        "name": "savecontact"
    })
    elementButtonSaveContact.textContent = "Save Contact"
    elementButtonSaveContact.addEventListener("click", function (e) {
        let newContact = {
            "name": elementInputContactName.value,
            "email": elementInputContactEmail.value,
            "phone": elementInputContactPhone.value,
            "address": elementInputContactAddress.value,
        }
        contactList.push(newContact)
        cleanUpMain()
        renderView(newContact)
        e.preventDefault()
    })

    // Cancel Button

    let elementButtonCancel = document.createElement("button")
    setMultipleAttributes(elementButtonCancel, {
        "type": "reset",
        "class": "button cancel",
        "id": "cancel",
        "name": "cancel"
    })
    elementButtonCancel.textContent = "Cancel"
    elementButtonCancel.addEventListener("click", function (e) {
        cleanUpMain()
        renderIndex(contactList)
        e.preventDefault()
    })

    //Append buttons
    elementDivButtons.append(elementButtonSaveContact, elementButtonCancel)

    //Arrays of elements
    let inputs = [elementInputContactName, elementInputContactPhone, elementInputContactAddress, elementInputContactEmail]
    
    let inputbuttons = [elementButtonExtraNameField, elementButtonExtraPhoneField, elementButtonExtraAddressField, elementButtonExtraEmailField]
    
    //Loop to build Input Container divs and append its children
    for (let i = 0; i <=3 ; i++) {
        let elementDivInputContainer = document.createElement("div")
        elementDivInputContainer.className = "inputcontainer"
        elementDivInputContainer.append(inputs[i], inputbuttons[i])
        elementForm.append(elementDivInputContainer)
    }

    // Finish Appending
    elementForm.append(elementDivButtons)
    elementDivForm.append(elementForm)
    elementDivContactEdit.append(elementDivForm)
    elementDivMain.append(elementDivContactEdit)
}



// 10 populate index on page load
window.addEventListener("load", function (e) {
    renderIndex(contactList)
})