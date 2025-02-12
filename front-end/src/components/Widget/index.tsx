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
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "../../stores";
export default function Widget() {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const styles = useSelector(
    (state: RootState) => state.customize.style,
    shallowEqual
  );

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
        <div className="border-header"></div>

        <BlockStack gap="1000">
          <Text variant="headingXl" as="h4">
            Your cart
          </Text>
          <InlineStack gap="500">
            <InlineStack>
              <SkeletonThumb />
            </InlineStack>

            <div style={{ flex: 1 }}>
              <BlockStack gap="400">
                <SkeletonText />
                <SkeletonText width="35%" />
              </BlockStack>
            </div>
          </InlineStack>
          <InlineStack gap="500">
            <InlineStack>
              <SkeletonThumb />
            </InlineStack>

            <div style={{ flex: 1 }}>
              <BlockStack gap="400">
                <SkeletonText />
                <SkeletonText width="35%" />
              </BlockStack>
            </div>
          </InlineStack>
          <Divider />
          <BlockStack inlineAlign="end" gap="1000">
            {styles.direction === "horizontal" ? (
              <InlineStack gap="200" align="center">
                <input
                  type="text"
                  placeholder="Label"
                  className="input-discount"
                  style={{
                    width: `${styles.input_width}px`,
                    height: `${styles.input_height}px`,
                    borderStyle: `${styles.input_border}`,
                    borderRadius: `${styles.input_border_radius}px`,
                  }}
                />
                <button
                  style={{
                    borderWidth: `${styles.border_width}px`,
                    borderStyle: `${styles.button_border}`,
                    width: `${styles.button_height}px`,
                    height: `${styles.button_width}px`,
                  }}
                  className="btn-discount"
                >
                  Label
                </button>
              </InlineStack>
            ) : (
              <BlockStack gap="200" align="center">
                <input
                  type="text"
                  placeholder="Label"
                  className="input-discount"
                  style={{
                    width: `${styles.input_width}px`,
                    height: `${styles.input_height}px`,
                    borderStyle: `${styles.input_border}`,
                    borderRadius: `${styles.input_border_radius}px`,
                  }}
                />
                <button
                  style={{
                    borderWidth: `${styles.border_width}px`,
                    borderStyle: `${styles.button_border}`,
                    width: `${styles.button_height}px`,
                    height: `${styles.button_width}px`,
                  }}
                  className="btn-discount"
                >
                  Label
                </button>
              </BlockStack>
            )}

            <SkeletonText radius="0" height="52.39px" width="40%" />
          </BlockStack>
        </BlockStack>
      </div>
    </div>
  );
}
