import bcrypt from 'bcryptjs';

const users = [
  {
    name: "Mohith",
    email: "this.is.mohith4124@gmail.com",
    password: bcrypt.hashSync("Mohith@4124", 10),
    isAdmin: true,
  },
];

export default users;