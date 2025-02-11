import { InlineStack } from "@shopify/polaris";
import { lazy } from "react";
const Widget = lazy(() => import("../Widget"));
const SideBar = lazy(() => import("../SideBar"));

export default function HomeContent() {
  return (
    <InlineStack>
      <SideBar />
      <Widget />
    </InlineStack>
  );
}
