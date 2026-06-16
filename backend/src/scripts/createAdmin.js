const bcrypt = require("bcryptjs");
const prisma = require("../database/prisma");

async function createAdmin() {
  const passwordHash = await bcrypt.hash(
    "123456",
    10
  );

  await prisma.admin.create({
    data: {
      name: "Caio",
      email: "admin@oticarealeza.com",
      password: passwordHash,
    },
  });

  console.log("Admin criado!");
}

createAdmin();