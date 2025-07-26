/*
  Warnings:

  - You are about to drop the column `itemDesejado_id` on the `propostas` table. All the data in the column will be lost.
  - You are about to drop the column `itemOfertado_id` on the `propostas` table. All the data in the column will be lost.
  - You are about to drop the column `receptor_id` on the `propostas` table. All the data in the column will be lost.
  - You are about to drop the column `solicitante_id` on the `propostas` table. All the data in the column will be lost.
  - Added the required column `itemDesejadoId` to the `propostas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `itemOfertadoId` to the `propostas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receptorId` to the `propostas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `solicitanteId` to the `propostas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "mensagens" DROP CONSTRAINT "mensagens_propostaId_fkey";

-- DropForeignKey
ALTER TABLE "propostas" DROP CONSTRAINT "propostas_itemDesejado_id_fkey";

-- DropForeignKey
ALTER TABLE "propostas" DROP CONSTRAINT "propostas_itemOfertado_id_fkey";

-- DropForeignKey
ALTER TABLE "propostas" DROP CONSTRAINT "propostas_receptor_id_fkey";

-- DropForeignKey
ALTER TABLE "propostas" DROP CONSTRAINT "propostas_solicitante_id_fkey";

-- AlterTable
ALTER TABLE "propostas" DROP COLUMN "itemDesejado_id",
DROP COLUMN "itemOfertado_id",
DROP COLUMN "receptor_id",
DROP COLUMN "solicitante_id",
ADD COLUMN     "itemDesejadoId" INTEGER NOT NULL,
ADD COLUMN     "itemOfertadoId" INTEGER NOT NULL,
ADD COLUMN     "receptorId" INTEGER NOT NULL,
ADD COLUMN     "solicitanteId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "propostas" ADD CONSTRAINT "propostas_solicitanteId_fkey" FOREIGN KEY ("solicitanteId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "propostas" ADD CONSTRAINT "propostas_receptorId_fkey" FOREIGN KEY ("receptorId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "propostas" ADD CONSTRAINT "propostas_itemOfertadoId_fkey" FOREIGN KEY ("itemOfertadoId") REFERENCES "itens"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "propostas" ADD CONSTRAINT "propostas_itemDesejadoId_fkey" FOREIGN KEY ("itemDesejadoId") REFERENCES "itens"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mensagens" ADD CONSTRAINT "mensagens_propostaId_fkey" FOREIGN KEY ("propostaId") REFERENCES "propostas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
