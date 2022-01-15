/* eslint-disable prettier/prettier */
import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class DeletaUsernameUsuario1642213304835 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn("usuarios", "username");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn("usuarios",
      new TableColumn({
        name: "username",
        type: "varchar",
      })
      );
    }

}
