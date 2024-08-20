import Contact from "../models/Contact.js";

export const listContacts = () => Contact.find();

export const getContactById = (contactId) => Contact.findById(contactId);

export const addContact = (name, email, phone) => Contact.create({name, email, phone});

export const updContact = (contactId, dataContact) =>
  Contact.findByIdAndUpdate(contactId, dataContact);

export const removeContact = (contactId) => Contact.findByIdAndDelete(contactId);
