const prisma = require("../database/prisma");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class SessionController {
  async create(req, res) {
    const { email, password } = req.body;

    const admin =
      await prisma.admin.findUnique({
        where: { email },
      });

    if (!admin) {
      return res.status(401).json({
        error: "Credenciais inválidas",
      });
    }

    const passwordMatched =
      await bcrypt.compare(
        password,
        admin.password
      );

    if (!passwordMatched) {
      return res.status(401).json({
        error: "Credenciais inválidas",
      });
    }

    const token = jwt.sign(
      { id: admin.id },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    return res.json({
      admin: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
      },
      token,
    });
  }
}

module.exports = new SessionController();