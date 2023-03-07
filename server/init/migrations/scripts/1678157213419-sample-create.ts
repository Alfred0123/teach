import { MigrationInterface, QueryRunner } from "typeorm";

export class sampleCreate1678157213419 implements MigrationInterface {
    name = 'sampleCreate1678157213419'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sample_t" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "message" character varying, CONSTRAINT "PK_8fe6295438727c9cae5356b2efe" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "sample_t"`);
    }

}
