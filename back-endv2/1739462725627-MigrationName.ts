import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationName1739462725627 implements MigrationInterface {
    name = 'MigrationName1739462725627'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`translation\` DROP FOREIGN KEY \`FK_642ad2d4e49f9267c8e3e34cb3c\``);
        await queryRunner.query(`ALTER TABLE \`customization\` DROP FOREIGN KEY \`FK_a29505107a2248e4d72ba464e44\``);
        await queryRunner.query(`DROP INDEX \`IDX_83c655020eca9aabdd6248be42\` ON \`shop\``);
        await queryRunner.query(`DROP INDEX \`REL_a29505107a2248e4d72ba464e4\` ON \`customization\``);
        await queryRunner.query(`ALTER TABLE \`translation\` CHANGE \`shopId\` \`shopifyDomainShopifyDomain\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`customization\` CHANGE \`shopId\` \`shopifyDomainShopifyDomain\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`shop\` CHANGE \`id\` \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`shop\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`shop\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`translation\` DROP COLUMN \`shopifyDomainShopifyDomain\``);
        await queryRunner.query(`ALTER TABLE \`translation\` ADD \`shopifyDomainShopifyDomain\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`shop\` ADD PRIMARY KEY (\`shopify_domain\`)`);
        await queryRunner.query(`ALTER TABLE \`customization\` DROP COLUMN \`shopifyDomainShopifyDomain\``);
        await queryRunner.query(`ALTER TABLE \`customization\` ADD \`shopifyDomainShopifyDomain\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`customization\` ADD UNIQUE INDEX \`IDX_24f490dbd9904208f910e227e3\` (\`shopifyDomainShopifyDomain\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_24f490dbd9904208f910e227e3\` ON \`customization\` (\`shopifyDomainShopifyDomain\`)`);
        await queryRunner.query(`ALTER TABLE \`translation\` ADD CONSTRAINT \`FK_9868e6818666b1ba87c4caec7f4\` FOREIGN KEY (\`shopifyDomainShopifyDomain\`) REFERENCES \`shop\`(\`shopify_domain\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`customization\` ADD CONSTRAINT \`FK_24f490dbd9904208f910e227e3f\` FOREIGN KEY (\`shopifyDomainShopifyDomain\`) REFERENCES \`shop\`(\`shopify_domain\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`customization\` DROP FOREIGN KEY \`FK_24f490dbd9904208f910e227e3f\``);
        await queryRunner.query(`ALTER TABLE \`translation\` DROP FOREIGN KEY \`FK_9868e6818666b1ba87c4caec7f4\``);
        await queryRunner.query(`DROP INDEX \`REL_24f490dbd9904208f910e227e3\` ON \`customization\``);
        await queryRunner.query(`ALTER TABLE \`customization\` DROP INDEX \`IDX_24f490dbd9904208f910e227e3\``);
        await queryRunner.query(`ALTER TABLE \`customization\` DROP COLUMN \`shopifyDomainShopifyDomain\``);
        await queryRunner.query(`ALTER TABLE \`customization\` ADD \`shopifyDomainShopifyDomain\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`shop\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`translation\` DROP COLUMN \`shopifyDomainShopifyDomain\``);
        await queryRunner.query(`ALTER TABLE \`translation\` ADD \`shopifyDomainShopifyDomain\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`shop\` ADD \`id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`shop\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`shop\` CHANGE \`id\` \`id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`customization\` CHANGE \`shopifyDomainShopifyDomain\` \`shopId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`translation\` CHANGE \`shopifyDomainShopifyDomain\` \`shopId\` int NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_a29505107a2248e4d72ba464e4\` ON \`customization\` (\`shopId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_83c655020eca9aabdd6248be42\` ON \`shop\` (\`shopify_domain\`)`);
        await queryRunner.query(`ALTER TABLE \`customization\` ADD CONSTRAINT \`FK_a29505107a2248e4d72ba464e44\` FOREIGN KEY (\`shopId\`) REFERENCES \`shop\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`translation\` ADD CONSTRAINT \`FK_642ad2d4e49f9267c8e3e34cb3c\` FOREIGN KEY (\`shopId\`) REFERENCES \`shop\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
