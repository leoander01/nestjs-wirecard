import { MigrationInterface, QueryRunner } from 'typeorm'

export class createTablePayments1668187411271 implements MigrationInterface {
  name = 'createTablePayments1668187411271'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`payments\` (\`id\` varchar(36) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`amount\` decimal NOT NULL, \`type\` varchar(20) NOT NULL, \`card\` varchar(40) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`payments\``)
  }
}
