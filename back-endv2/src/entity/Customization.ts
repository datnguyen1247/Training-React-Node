import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Shop } from "./Shop";

@Entity()
export class Customization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  input_width: number;

  @Column()
  input_height: number;

  @Column({
    type: "enum",
    enum: ["dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "none", "hidden"],
  })
  input_border: string;

  @Column()
  input_border_radius: number;

  @Column()
  input_background_color: string;

  @Column({
    type: "enum",
    enum: ["plain", "primary", "secondary", "tertiary", "monochromePlain"],
  })
  button_variant: string;

  @Column()
  border_width: number;

  @Column()
  border_color: string;

  @Column()
  button_width: number;

  @Column()
  button_height: number;

  @Column({
    type: "enum",
    enum: ["dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "none", "hidden"],
  })
  button_border: string;

  @Column()
  button_background_color: string;

  @Column()
  button_text_color: string;

  @Column({
    type: "enum",
    enum: ["vertical", "horizontal"],
  })
  direction: string;

  @Column({ type: "text" })
  css: string;

  @OneToOne(() => Shop, (shopify_domain ) => shopify_domain .customization)
  @JoinColumn({name:"shopify_domain"})
  shopify_domain : Shop;
}
