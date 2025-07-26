/*
  Warnings:

  - You are about to drop the column `nome_item` on the `itens` table. All the data in the column will be lost.
  - The primary key for the `propostas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_prop` on the `propostas` table. All the data in the column will be lost.
  - Added the required column `condicao` to the `itens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titulo` to the `itens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receptor_id` to the `propostas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "itens" DROP COLUMN "nome_item",
ADD COLUMN     "condicao" TEXT NOT NULL,
ADD COLUMN     "imagem_url" TEXT,
ADD COLUMN     "observacoes" TEXT,
ADD COLUMN     "titulo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "propostas" DROP CONSTRAINT "propostas_pkey",
DROP COLUMN "id_prop",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "mensagem_inicial" TEXT,
ADD COLUMN     "receptor_id" INTEGER NOT NULL,
ADD CONSTRAINT "propostas_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "usuarios" ADD COLUMN     "bairro" TEXT;

-- CreateTable
CREATE TABLE "mensagens" (
    "id" SERIAL NOT NULL,
    "conteudo" TEXT NOT NULL,
    "propostaId" INTEGER NOT NULL,
    "autorId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mensagens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "propostas" ADD CONSTRAINT "propostas_receptor_id_fkey" FOREIGN KEY ("receptor_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mensagens" ADD CONSTRAINT "mensagens_propostaId_fkey" FOREIGN KEY ("propostaId") REFERENCES "propostas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mensagens" ADD CONSTRAINT "mensagens_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
