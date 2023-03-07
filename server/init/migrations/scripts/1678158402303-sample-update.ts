import { MigrationInterface, QueryRunner } from "typeorm";

export class sampleUpdate1678158402303 implements MigrationInterface {
    name = 'sampleUpdate1678158402303'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sample_t" ADD "age" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sample_t" DROP COLUMN "age"`);
    }

}
