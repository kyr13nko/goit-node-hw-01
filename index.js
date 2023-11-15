const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");

const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  try {
    switch (action) {
      case "list":
        const contacts = await listContacts();
        console.table(contacts);
        break;

      case "get":
        const contactById = await getContactById(id);
        if (!contactById) throw new Error(`Contact with id: ${id} not found!`);
        console.table(contactById);
        break;

      case "add":
        const newContact = await addContact(name, email, phone);
        console.table(newContact);
        break;

      case "remove":
        const removedContact = await removeContact(id);
        console.table(removedContact);
        break;

      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

invokeAction(argv);
