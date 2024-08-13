import HttpError from "../helpers/HttpError.js";
import {createContactSchema, updateContactSchema} from "../schemas/contactsSchemas.js";
import * as contactsService from "../services/contactsServices.js";

export const getAllContacts = async (_, res, next) => {
  try {
    const result = await contactsService.listContacts();

    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const getOneContact = async (req, res, next) => {
  const {id} = req.params;

  try {
    const result = await contactsService.getContactById(id);

    if (!result) {
      throw HttpError(404, `Contact with id=${id} not found`);
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const deleteContact = async (req, res, next) => {
  const {id} = req.params;
  try {
    const result = await contactsService.removeContact(id);

    if (!result) {
      throw HttpError(404, `Contact with id=${id} not found`);
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const createContact = async (req, res, next) => {
  try {
    const {error} = createContactSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }

    const {name, email, phone} = req.body;
    const result = await contactsService.addContact(name, email, phone);

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const updateContact = async (req, res, next) => {
  try {
    const {error} = updateContactSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }

    const {id} = req.params;

    const result = await contactsService.updContact(id, req.body);

    if (!result) {
      throw HttpError(404, `Contact with id=${id} not found`);
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};
