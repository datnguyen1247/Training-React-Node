import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1739421290708 implements MigrationInterface {
    name = 'CreateTables1739421290708'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`customization\` (\`id\` int NOT NULL AUTO_INCREMENT, \`input_width\` int NOT NULL, \`input_height\` int NOT NULL, \`input_border\` enum ('dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'none', 'hidden') NOT NULL, \`input_border_radius\` int NOT NULL, \`input_background_color\` varchar(255) NOT NULL, \`button_variant\` enum ('plain', 'primary', 'secondary', 'tertiary', 'monochromePlain') NOT NULL, \`border_width\` int NOT NULL, \`border_color\` varchar(255) NOT NULL, \`button_width\` int NOT NULL, \`button_height\` int NOT NULL, \`button_border\` enum ('dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'none', 'hidden') NOT NULL, \`button_background_color\` varchar(255) NOT NULL, \`button_text_color\` varchar(255) NOT NULL, \`direction\` enum ('vertical', 'horizontal') NOT NULL, \`css\` text NOT NULL, \`shopId\` int NULL, UNIQUE INDEX \`REL_a29505107a2248e4d72ba464e4\` (\`shopId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`translation\` (\`id\` int NOT NULL AUTO_INCREMENT, \`locale\` varchar(255) NOT NULL, \`translate\` json NOT NULL, \`shopId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`shop\` (\`id\` int NOT NULL AUTO_INCREMENT, \`shopify_domain\` varchar(255) NOT NULL, \`shop_owner\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_83c655020eca9aabdd6248be42\` (\`shopify_domain\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`customization\` ADD CONSTRAINT \`FK_a29505107a2248e4d72ba464e44\` FOREIGN KEY (\`shopId\`) REFERENCES \`shop\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`translation\` ADD CONSTRAINT \`FK_642ad2d4e49f9267c8e3e34cb3c\` FOREIGN KEY (\`shopId\`) REFERENCES \`shop\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`translation\` DROP FOREIGN KEY \`FK_642ad2d4e49f9267c8e3e34cb3c\``);
        await queryRunner.query(`ALTER TABLE \`customization\` DROP FOREIGN KEY \`FK_a29505107a2248e4d72ba464e44\``);
        await queryRunner.query(`DROP INDEX \`IDX_83c655020eca9aabdd6248be42\` ON \`shop\``);
        await queryRunner.query(`DROP TABLE \`shop\``);
        await queryRunner.query(`DROP TABLE \`translation\``);
        await queryRunner.query(`DROP INDEX \`REL_a29505107a2248e4d72ba464e4\` ON \`customization\``);
        await queryRunner.query(`DROP TABLE \`customization\``);
    }

}
