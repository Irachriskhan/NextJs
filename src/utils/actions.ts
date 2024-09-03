"use server";
import { readFile, writeFile } from "fs/promises";

type User = {
  id: string;
  firstName: string;
  lastName: string;
};

export const createUser = async (formData: FormData) => {
  "use server";
  const firstName = formData.get("firstname") as string;
  const lastName = formData.get("lastname") as string;
  //   const rawData = Object.fromEntries(formData);
  //   console.log(rawData);
  const newUser: User = {
    id: Date.now().toString(),
    firstName,
    lastName,
  };

  await saveUser(newUser);
};

export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile("users.json", { encoding: "utf-8" });
  const users = result ? JSON.parse(result) : [];
  return users;
};

const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  await writeFile("users.json", JSON.stringify(users));
};
