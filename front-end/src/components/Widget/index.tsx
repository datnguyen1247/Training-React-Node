import {
  BlockStack,
  Button,
  ButtonGroup,
  Divider,
  InlineStack,
  Text,
} from "@shopify/polaris";
import { DesktopIcon, MobileIcon } from "@shopify/polaris-icons";
import { useCallback, useState } from "react";
import SkeletonText from "../SkeletonText";
import SkeletonThumb from "../SkeletonThumb";
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

        <BlockStack gap="1600">
          <Text variant="headingXl" as="h4">
            Your cart
          </Text>
          <InlineStack gap="1600">
            <InlineStack>
              <SkeletonThumb />
            </InlineStack>

            <div style={{ flex: 1 }}>
              <BlockStack gap="800">
                <SkeletonText />
                <SkeletonText width="35%" />
              </BlockStack>
            </div>
          </InlineStack>
          <InlineStack gap="1600">
            <InlineStack>
              <SkeletonThumb />
            </InlineStack>

            <div style={{ flex: 1 }}>
              <BlockStack gap="800">
                <SkeletonText />
                <SkeletonText width="35%" />
              </BlockStack>
            </div>
          </InlineStack>
          <Divider />
          <BlockStack inlineAlign="end" gap="1000">
            <InlineStack gap="200" align="center">
              <input
                type="text"
                placeholder="Label"
                style={{
                  width: "333px",
                  outline: "none",
                  height: "52px",
                  border: "1px solid #dedede",
                  padding: "15.5px 11px",
                  borderRadius: "4px",
                }}
              />
              <button
                style={{
                  height: "39px",
                  width: "57px",
                  padding: "9px",
                  backgroundColor: "#1773b0",
                  outline: "none",
                  border: "none",
                  borderRadius: "2px",
                  color: "#fff",
                }}
              >
                Label
              </button>
            </InlineStack>
            <SkeletonText radius="0" height="52.39px" width="40%" />
          </BlockStack>
        </BlockStack>
      </div>
    </div>
  );
}
