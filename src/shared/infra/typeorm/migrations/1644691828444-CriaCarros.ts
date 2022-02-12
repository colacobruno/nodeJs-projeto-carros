/* eslint-disable prettier/prettier */
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CriaCarros1644691828444 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "carros",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true,
            },
            {
              name: "nome",
              type: "varchar",
            },
            {
              name: "descricao",
              type: "varchar",
            },
            {
              name: "valor_diaria",
              type: "numeric",
            },
            {
              name: "disponivel",
              type: "boolean",
              default: true,
            },
            {
              name: "placa",
              type: "varchar",
            },
            {
              name: "multa",
              type: "numeric",
            },
            {
              name: "marca",
              type: "varchar",
            },
            {
              name: "categoria_id",
              type: "uuid",
              isNullable: true,
            },
            {
              name: "criado_em",
              type: "timestamp",
              default: "now()",
            },
          ],
          foreignKeys: [
            {
              name: "FK_CATEGORIA_CARRO",
              referencedTableName: "categorias",
              referencedColumnNames: ["id"],
              columnNames: ["categoria_id"],
              onDelete: "SET NULL",
              onUpdate: "SET NULL",
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("carros");
    }
}
