import express from "express";


import { CreateContact, getAllContacts } from '../Controllers/ContactController.js';

const router = express.Router();
router.post('/create', CreateContact)
router.get('/get', getAllContacts)

export default router;