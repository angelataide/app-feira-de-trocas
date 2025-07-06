// Importo o PrismaClient para conectar com o banco de dados
import { PrismaClient } from '@prisma/client';

// Crio uma instância do Prisma para usar nas consultas
const prisma = new PrismaClient();

// Exporto o prisma para ser usado nos repositórios
export default prisma;
