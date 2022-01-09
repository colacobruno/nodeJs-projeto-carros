/* eslint-disable prettier/prettier */
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CriaEspecificacoes1641752250185 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table(
          {
            name:"especificacoes",
            columns: [
              {
                name: "id",
                type: "uuid",
                isPrimary: true
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
                name: "criado_em",
                type: "timestamp",
                default: "now()",
              },
            ],
          }
        )
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("especificacoes");
    }

}
