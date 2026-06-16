const { z } = require("zod");

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Nome deve ter pelo menos 3 caracteres"),

  phone: z
    .string()
    .trim()
    .min(10, "Telefone inválido"),

  email: z
    .string()
    .trim()
    .email("E-mail inválido"),

  message: z
    .string()
    .trim()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

module.exports = {
  contactSchema,
};