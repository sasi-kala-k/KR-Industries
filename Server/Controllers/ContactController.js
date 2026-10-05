import Contact from "../Models/Contact.js";
import { sendContactEmails } from "../Utils/Mailer.js";

// 1. CREATE
export const CreateContact = async (req, res) => {
  try {
    const { name, mobile, email, notes } = req.body;

    if (!name || !mobile || !email || !notes ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newContact = await Contact.create({  name, mobile, email, notes });


    try {
      // email here = whatever the customer typed in the form
      await sendContactEmails({  name, mobile, email, notes });
    } catch (mailErr) {
      console.log("Email failed to send:", mailErr.message);
    }   

    res.status(201).json({ message: "Contact created", data: newContact });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.status(200).json({ success: true, data: contacts })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, error: 'Failed to fetch contacts' })
  }
}
