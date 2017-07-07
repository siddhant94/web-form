//Fetch div to add form element
var x = document.getElementById("form_sample");

//Create New form element
var createForm = document.createElement('form');

//setting action attribute
createForm.setAttribute("action", "");

//setting method attribute
createForm.setAttribute("method", "post");

//Append the element to DOM
x.appendChild(createForm);

//Create Heading for form
var heading = document.createElement('h2');
heading.innerHTML = "Contact Us Form";
createForm.appendChild(heading);

//Giving horizontal row after heading
var line = document.createElement('hr');
createForm.appendChild(line);

//Giving line break
var lineBreak = document.createElement('br');

//Craete label name for name-field
var labelName = document.createElement('label');
//Setting field's label content
labelName.innerHTML = "Your Name";

//Append it to form element
createForm.appendChild(labelName);


 // Create Input Field for Name
var inputelement = document.createElement('input');
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dname");

createForm.appendChild(inputelement);

var linebreak = document.createElement('br');
createForm.appendChild(linebreak);

// Create Label for E-mail Field
var emaillabel = document.createElement('label'); 
emaillabel.innerHTML = "Your Email : ";
createForm.appendChild(emaillabel);

// Create Input Field for E-mail
var emailelement = document.createElement('input'); 
emailelement.setAttribute("type", "text");
emailelement.setAttribute("name", "demail");
createForm.appendChild(emailelement);

var emailbreak = document.createElement('br');
createForm.appendChild(emailbreak);

// Append Textarea
var messagelabel = document.createElement('label'); 
messagelabel.innerHTML = "Your Message : ";
createForm.appendChild(messagelabel);

var texareaelement = document.createElement('textarea');
texareaelement.setAttribute("name", "dmessage");
createForm.appendChild(texareaelement);

var messagebreak = document.createElement('br');
createForm.appendChild(messagebreak);


var submitelement = document.createElement('input'); // Append Submit Button
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Submit");
createForm.appendChild(submitelement);