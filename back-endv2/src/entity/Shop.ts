import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, OneToMany } from "typeorm";
import { Customization } from "./Customization";
import { Translation } from "./Translation";

@Entity()
export class Shop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  shopify_domain: string;

  @Column()
  shop_owner: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(() => Customization, (customization) => customization.shop, { cascade: true })
  customization: Customization;

  @OneToMany(() => Translation, (translation) => translation.shop)
  translations: Translation[];
}
