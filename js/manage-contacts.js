var contacts = [];
var contactsVisible = false; 
function addContact() {
  event.preventDefault();
  
  var newContact = getContact();
  contacts.push(newContact);
  updateContactTable();
  resetForm();
}

function getContact() {
  return { name: $('#name').val(),
           phone: $('#phone').val()
         };
}

function resetForm() {
  $('#name').val("");
  $('#phone').val("");
}

function updateContactTable() {
  for (var i=0; i<contacts.length; i++) {
    console.log(contacts[i].name);
    console.log(contacts[i].phone);
  }
}

function togglePageVisibility() {
  if (contactsVisible) {
    // hide contacts, show form
  }
  else {
    // show contacts, hide form
  }
  contactsVisible = !contactsVisible;
}
