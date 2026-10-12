import {
  createUser,
  findUserByEmail,
} from "../repo/user.repo.js";

export async function signup(name, email, password) {
  const existing = await findUserByEmail(email);
  if (existing) throw new Error("Email already registered");

  await createUser(name, email, password);
  return { message: "Registered Successfully" };
}

export async function login(email, password) {
  const user = await findUserByEmail(email);
  if (!user) throw new Error("Invalid Email or Password");

  return { message: "Login Successful", user };
}