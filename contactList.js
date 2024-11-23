// contactList.js

// Initialize the contact list with three users
let contactList = [
  { name: "John Doe", phone: "1234 567 890", email: "john.doe@example.com" },
  {
    name: "Jane Smith",
    phone: "2345 678 901",
    email: "jane.smith@example.com",
  },
  {
    name: "Bob Johnson",
    phone: "3456 789 012",
    email: "bob.johnson@example.com",
  },
];

// Function to display the contact list
function displayContacts(contacts) {
  console.log("Contact List:");
  contacts.forEach((contact, index) => {
    console.log(
      `${index + 1}. Name: ${contact.name}, Phone: ${contact.phone}, Email: ${
        contact.email
      }`
    );
  });
}

// Function to add a new contact
function addContact(name, phone, email) {
  contactList.push({ name, phone, email });
  console.log(`\nNew contact added: ${name}`);
}

// Function to show the first and last contacts
function showFirstAndLastContacts(contacts) {
  if (contacts.length === 0) {
    console.log("No contacts in the list.");
    return;
  }
  console.log("\nFirst Contact:");
  console.log(
    `Name: ${contacts[0].name}, Phone: ${contacts[0].phone}, Email: ${contacts[0].email}`
  );
  console.log("\nLast Contact:");
  console.log(
    `Name: ${contacts[contacts.length - 1].name}, Phone: ${
      contacts[contacts.length - 1].phone
    }, Email: ${contacts[contacts.length - 1].email}`
  );
}

// Execute application steps
console.log("Initial Contact List:");
displayContacts(contactList);

addContact("Maisie Haley", "0913 531 3030", "risus.Quisque@urna.ca");

console.log("\nUpdated Contact List:");
displayContacts(contactList);

showFirstAndLastContacts(contactList);
