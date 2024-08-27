import Contact from "../models/Contact.js";

export const listContacts = (filter, settings) =>
  Contact.find(filter, "-createdAt -updatedAt", settings).populate("owner", "email subscription");

export const getContactById = (contactId) => Contact.findById(contactId);

export const addContact = (name, email, phone, owner) =>
  Contact.create({name, email, phone, owner});

export const updContact = (contactId, dataContact) =>
  Contact.findByIdAndUpdate(contactId, dataContact);

export const removeContact = (contactId) => Contact.findByIdAndDelete(contactId);
