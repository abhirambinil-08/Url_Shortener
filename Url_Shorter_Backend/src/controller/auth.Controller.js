import { signup, login } from "../services/auth.service.js";

export async function signupUser(req, res) {
  try {
    const { name, email, password } = req.body;
    const result = await signup(name, email, password);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const result = await login(email );
    res.json(result);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}