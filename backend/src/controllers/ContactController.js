const prisma = require("../database/prisma");
const { contactSchema } = require("../validations/contact.validation");

class ContactController {

  async create(req, res) {
    try {

      const validatedData =
        contactSchema.parse(req.body);

      const contact =
        await prisma.contact.create({
          data: validatedData,
        });

      return res.status(201).json(contact);

    } catch (error) {

      if (error.name === "ZodError") {
        return res.status(400).json({
          errors: error.issues.map(issue => ({
            field: issue.path[0],
            message: issue.message,
          })),
        });
      }

      console.error(error);

      return res.status(500).json({
        error: "Erro ao criar contato",
      });
    }
  }

  async index(req, res) {
    try {

      const contacts =
        await prisma.contact.findMany({
          orderBy: {
            createdAt: "desc",
          },
        });

      return res.status(200).json(contacts);

    } catch (error) {

      console.error(error);

      return res.status(500).json({
        error: "Erro ao listar contatos",
      });
    }
  }

  async show(req, res) {
    try {

      const { id } = req.params;

      const contact =
        await prisma.contact.findUnique({
          where: {
            id,
          },
        });

      if (!contact) {
        return res.status(404).json({
          error: "Contato não encontrado",
        });
      }

      return res.status(200).json(contact);

    } catch (error) {

      console.error(error);

      return res.status(500).json({
        error: "Erro ao buscar contato",
      });
    }
  }

  async update(req, res) {
    try {

      const { id } = req.params;

      const validatedData =
        contactSchema.parse(req.body);

      const contact =
        await prisma.contact.update({
          where: {
            id,
          },
          data: validatedData,
        });

      return res.status(200).json(contact);

    } catch (error) {

      if (error.name === "ZodError") {
        return res.status(400).json({
          errors: error.issues.map(issue => ({
            field: issue.path[0],
            message: issue.message,
          })),
        });
      }

      console.error(error);

      return res.status(500).json({
        error: "Erro ao atualizar contato",
      });
    }
  }

  async delete(req, res) {
    try {

      const { id } = req.params;

      await prisma.contact.delete({
        where: {
          id,
        },
      });

      return res.status(204).send();

    } catch (error) {

      console.error(error);

      return res.status(500).json({
        error: "Erro ao excluir contato",
      });
    }
  }
}

module.exports = new ContactController();