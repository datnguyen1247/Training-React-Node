import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Shop } from "./Shop";

@Entity()
export class Translation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  locale: string;

  @Column({ type: "json" })
  translate: { placeholder_text: string; button_text: string };

  @ManyToOne(() => Shop, (shopify_domain ) => shopify_domain .translations, { onDelete: "CASCADE" })
  @JoinColumn({name:"shopify_domain"})
  shopify_domain : Shop;
}
