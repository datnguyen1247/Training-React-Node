import {
  Badge,
  BlockStack,
  Button,
  Card,
  InlineStack,
  Text,
} from "@shopify/polaris";
import { PlusIcon } from "@shopify/polaris-icons";
import DotAction from "../../components/DotAction";
import { Link } from "react-router-dom";
export default function Translation() {
  return (
    <div className="transition-wrapper">
      <BlockStack gap="1200">
        <BlockStack>
          <Text variant="headingLg" as="h5">
            Translations
          </Text>
          <Text as="p" fontWeight="regular">
            Edit and translate every texts into your desired language
          </Text>
        </BlockStack>
        <BlockStack>
          <Card>
            <BlockStack gap="800" align="start">
              <Text variant="headingSm" as="h6">
                Languages
              </Text>
              <Card padding="0">
                <BlockStack>
                  <div style={{ padding: "16px" }}>
                    <InlineStack align="space-between">
                      <InlineStack gap="400">
                        <Text variant="headingSm" as="h6">
                          English
                        </Text>
                        <Badge>Default</Badge>
                      </InlineStack>
                      <Link to="/translation/1">
                        <Button variant="plain">Edit</Button>
                      </Link>
                    </InlineStack>
                  </div>
                  <div
                    style={{
                      height: "1px",
                      width: "100%",
                      backgroundColor: "#d9d9d9",
                    }}
                  ></div>
                  <div style={{ padding: "16px" }}>
                    <InlineStack align="space-between">
                      <Text variant="headingSm" as="h6">
                        Chinese
                      </Text>
                      <DotAction />
                    </InlineStack>
                  </div>
                </BlockStack>
              </Card>
              <Button textAlign="left" icon={PlusIcon} variant="plain">
                Add locale
              </Button>
            </BlockStack>
          </Card>
        </BlockStack>
      </BlockStack>
    </div>
  );
}
