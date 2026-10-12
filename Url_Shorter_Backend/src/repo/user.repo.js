import User from "../model/user.js";

export async function createUser(name, email, password) {
  return await User.create({ name, email, password });
}

export async function findUserByEmail(email) {
  return await User.findOne({ where: { email } });
}
