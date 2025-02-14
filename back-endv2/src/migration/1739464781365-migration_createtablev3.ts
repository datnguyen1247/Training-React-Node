import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationCreatetablev31739464781365 implements MigrationInterface {
    name = 'MigrationCreatetablev31739464781365'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`translation\` (\`id\` int NOT NULL AUTO_INCREMENT, \`locale\` varchar(255) NOT NULL, \`translate\` json NOT NULL, \`shopify_domain\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`shop\` (\`shopify_domain\` varchar(255) NOT NULL, \`shop_owner\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`shopify_domain\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`customization\` (\`id\` int NOT NULL AUTO_INCREMENT, \`input_width\` int NOT NULL, \`input_height\` int NOT NULL, \`input_border\` enum ('dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'none', 'hidden') NOT NULL, \`input_border_radius\` int NOT NULL, \`input_background_color\` varchar(255) NOT NULL, \`button_variant\` enum ('plain', 'primary', 'secondary', 'tertiary', 'monochromePlain') NOT NULL, \`border_width\` int NOT NULL, \`border_color\` varchar(255) NOT NULL, \`button_width\` int NOT NULL, \`button_height\` int NOT NULL, \`button_border\` enum ('dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'none', 'hidden') NOT NULL, \`button_background_color\` varchar(255) NOT NULL, \`button_text_color\` varchar(255) NOT NULL, \`direction\` enum ('vertical', 'horizontal') NOT NULL, \`css\` text NOT NULL, \`shopify_domain\` varchar(255) NULL, UNIQUE INDEX \`REL_e1d28b05685d80060d9096af7b\` (\`shopify_domain\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`translation\` ADD CONSTRAINT \`FK_86e6313f7438bd6c94bf9e64118\` FOREIGN KEY (\`shopify_domain\`) REFERENCES \`shop\`(\`shopify_domain\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`customization\` ADD CONSTRAINT \`FK_e1d28b05685d80060d9096af7b5\` FOREIGN KEY (\`shopify_domain\`) REFERENCES \`shop\`(\`shopify_domain\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`customization\` DROP FOREIGN KEY \`FK_e1d28b05685d80060d9096af7b5\``);
        await queryRunner.query(`ALTER TABLE \`translation\` DROP FOREIGN KEY \`FK_86e6313f7438bd6c94bf9e64118\``);
        await queryRunner.query(`DROP INDEX \`REL_e1d28b05685d80060d9096af7b\` ON \`customization\``);
        await queryRunner.query(`DROP TABLE \`customization\``);
        await queryRunner.query(`DROP TABLE \`shop\``);
        await queryRunner.query(`DROP TABLE \`translation\``);
    }

}
