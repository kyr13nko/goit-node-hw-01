const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

// const argv = require("yargs").argv;

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

async function invokeAction({ action, id, name, email, phone }) {
  try {
    switch (action) {
      case "list":
        const contacts = await listContacts();
        console.log("List of contacts:", contacts);
        break;

      case "get":
        const contactById = await getContactById(id);
        console.log("Contact by ID:", contactById);
        break;

      case "add":
        const newContact = await addContact(name, email, phone);
        console.log("Added contact:", newContact);
        break;

      case "remove":
        const removedContact = await removeContact(id);
        console.log("Removed contact:", removedContact);
        break;

      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
console.log(argv);
invokeAction(argv);
