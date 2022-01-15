/* eslint-disable prettier/prettier */
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CriaUsuarios1642201397096 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "usuarios",
          columns:[
            {
              name: "id",
              type: "uuid",
            },
            {
              name: "nome",
              type: "varchar"
            },
            {
              name: "email",
              type: "varchar"
            },
            {
              name: "username",
              type: "varchar"
            },
            {
              name: "cnh",
              type: "varchar",
            },
            {
              name: "senha",
              type: "varchar"
            },
            {
              name: "admin",
              type: "boolean",
              default: false
            },
            {
              name: "criado_em",
              type: "timestamp",
              default: "now()",
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("usuarios");
    }

}
