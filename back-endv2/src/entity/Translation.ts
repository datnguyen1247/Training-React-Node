import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Shop } from "./Shop";

@Entity()
export class Translation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  locale: string;

  @Column({ type: "json" })
  translate: { placeholder_text: string; button_text: string };

  @ManyToOne(() => Shop, (shop) => shop.translations, { onDelete: "CASCADE" })
  shop: Shop;
}
