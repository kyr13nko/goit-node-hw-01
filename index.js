const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

// const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  try {
    switch (action) {
      case "list":
        const contacts = await listContacts();
        console.log("List of contacts:", contacts);
        break;

      case "get":
        const contactById = await getContactById(id);
        if (!contactById) throw new Error(`Contact with id: ${id} not found!`);
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

// invokeAction(argv);

// invokeAction({ action: "list"});
// invokeAction({ action: "get", id: "1DEXoP8AuCGYc1YgoQ6hw" });
// invokeAction({
//   action: "add",
//   name: "Hryhorii Kyriienko",
//   email: "hrhrkrnk@gmail.com",
//   phone: +380966100113,
// });
// invokeAction({ action: "remove", id: "5mL7ZSOjtODk-V2jS5vyb" });
