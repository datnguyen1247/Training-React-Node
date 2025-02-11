import {
  BlockStack,
  Button,
  Card,
  Divider,
  Icon,
  InlineGrid,
  InlineStack,
  Text,
  TextField,
} from "@shopify/polaris";
import { ArrowLeftIcon } from "@shopify/polaris-icons";
import { Link } from "react-router-dom";
export default function EditTranslation() {
  return (
    <div className="transition-wrapper">
      <BlockStack gap="1200">
        <BlockStack>
          <InlineStack align="space-between">
            <InlineStack align="center" gap="400">
              <Link to="/translation">
                <Icon source={ArrowLeftIcon} tone="base" />
              </Link>
              <Text variant="headingLg" as="h5">
                Edit English text
              </Text>
            </InlineStack>
            <InlineStack>
              <Button variant="primary">Save</Button>
            </InlineStack>
          </InlineStack>
          <Text as="p" fontWeight="regular">
            Edit and translate every texts into your desired language
          </Text>
        </BlockStack>
        <BlockStack>
          <Card roundedAbove="sm">
            <BlockStack gap="800">
              <InlineGrid columns="1fr auto">
                <Text as="h2" variant="headingSm">
                  Text
                </Text>
                <Button variant="plain">Reset to default</Button>
              </InlineGrid>
              <Divider />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "160px",
                }}
              >
                <Text as="p" fontWeight="regular">
                  Discount box placeholder text
                </Text>
                <div style={{ flex: 1, maxWidth: "60%" }}>
                  <TextField
                    label="Gift cards expire after"
                    type="text"
                    labelHidden
                    autoComplete="off"
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "160px",
                }}
              >
                <div style={{ minWidth: "171px" }}>
                  <Text as="p" fontWeight="regular">
                    Button text
                  </Text>
                </div>
                <div style={{ flex: 1, maxWidth: "60%" }}>
                  <TextField
                    label="Gift cards expire after"
                    type="text"
                    labelHidden
                    autoComplete="off"
                  />
                </div>
              </div>
            </BlockStack>
          </Card>
        </BlockStack>
      </BlockStack>
    </div>
  );
}
