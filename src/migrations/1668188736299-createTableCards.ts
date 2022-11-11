import { MigrationInterface, QueryRunner } from 'typeorm'

export class createTableCards1668188736299 implements MigrationInterface {
  name = 'createTableCards1668188736299'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`cards\` (\`id\` varchar(36) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`holder_name\` varchar(30) NOT NULL, \`number_card\` varchar(12) NOT NULL, \`number_behind_card\` varchar(3) NOT NULL, \`expiration_date\` date NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`cards\``)
  }
}
