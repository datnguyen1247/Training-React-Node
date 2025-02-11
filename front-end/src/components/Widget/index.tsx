import {
  BlockStack,
  Button,
  ButtonGroup,
  Divider,
  InlineStack,
  SkeletonDisplayText,
  SkeletonThumbnail,
  Text,
} from "@shopify/polaris";
import { DesktopIcon, MobileIcon } from "@shopify/polaris-icons";
import { useCallback, useState } from "react";
import TextFieldText from "../TextFieldText";
export default function Widget() {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const handleButtonClick = useCallback(
    (index: number) => {
      if (activeButtonIndex === index) return;
      setActiveButtonIndex(index);
    },
    [activeButtonIndex]
  );
  return (
    <div
      style={{
        flex: 1,
        padding: "8px 32px",
      }}
    >
      <InlineStack align="center">
        <ButtonGroup variant="segmented">
          <Button
            icon={DesktopIcon}
            pressed={activeButtonIndex === 0}
            onClick={() => handleButtonClick(0)}
          ></Button>
          <Button
            icon={MobileIcon}
            pressed={activeButtonIndex === 1}
            onClick={() => handleButtonClick(1)}
          ></Button>
        </ButtonGroup>
      </InlineStack>
      <div style={{ marginTop: "16px" }}>
        <div
          style={{
            margin: "27px 0",
            height: "64px",
            borderBottom: "1px",
            borderTop: "1px",
            borderColor: "rgba(235, 235, 235, 1) transparent",
            borderStyle: "solid",
          }}
        ></div>

        <BlockStack>
          <Text variant="headingXl" as="h4">
            Your cart
          </Text>
          <InlineStack gap="1600">
            <InlineStack>
              <div style={{ width: "128px", height: "128px" }}>
                <SkeletonThumbnail />
              </div>
            </InlineStack>

            <div style={{ flex: 1 }}>
              <BlockStack gap="800">
                <SkeletonDisplayText size="small" />
                <SkeletonDisplayText size="small" />
              </BlockStack>
            </div>
          </InlineStack>
          <InlineStack gap="1600">
            <InlineStack>
              <div style={{ width: "128px", height: "128px" }}>
                <SkeletonThumbnail />
              </div>
            </InlineStack>

            <div style={{ flex: 1 }}>
              <BlockStack gap="800">
                <SkeletonDisplayText size="small" />
                <SkeletonDisplayText size="small" />
              </BlockStack>
            </div>
          </InlineStack>
          <Divider />
          <BlockStack>
            <InlineStack>
              <TextFieldText title="" />
            </InlineStack>
          </BlockStack>
        </BlockStack>
      </div>
    </div>
  );
}
