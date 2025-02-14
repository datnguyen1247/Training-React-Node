import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Customization } from "./Customization";
import { Translation } from "./Translation";

@Entity()
export class Shop {

  @PrimaryColumn()
  shopify_domain: string;

  @Column()
  shop_owner: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(() => Customization, (customization) => customization.shopify_domain , { cascade: true })
  customization: Customization;

  @OneToMany(() => Translation, (translation) => translation.shopify_domain )
  translations: Translation[];
}
