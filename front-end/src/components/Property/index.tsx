import { ReactNode } from "react";
import Title from "../Title";
import { CaretUpIcon } from "@shopify/polaris-icons";
import { Divider } from "@shopify/polaris";

type Property = {
  title: string;
  children: ReactNode;
};

export default function Property({ children, title }: Property) {
  return (
    <>
      <div
        style={{
          padding: "16px",
        }}
      >
        <Title title={title} icon={CaretUpIcon} />
        {children}
      </div>
      <Divider />
    </>
  );
}
