/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BlockStack,
  Button,
  Card,
  Divider,
  Frame,
  Icon,
  InlineGrid,
  InlineStack,
  Text,
  TextField,
} from "@shopify/polaris";
import { ArrowLeftIcon } from "@shopify/polaris-icons";
import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import translationApi from "../../api/translationApi";
import ITranslation from "../../types";
import { Toast } from "@shopify/polaris";
export default function EditTranslation() {
  const { locale } = useParams();
  const [transition, setTransition] = useState<ITranslation>();
  const [translate, setTranslate] = useState<any>({
    placeholder_text: "",
    button_text: "",
  });
  const [activeToast, setActiveToast] = useState(false);
  const toggleActiveToast = useCallback(
    () => setActiveToast((activeToast) => !activeToast),
    []
  );
  useEffect(() => {
    const getTransition = async () => {
      if (locale) {
        const response = await translationApi.getOne(locale);
        setTransition(response.data);
        setTranslate(response.data.translate);
      }
    };
    getTransition();
  }, [locale]);
  const handelClickSave = async () => {
    console.log(activeToast);
    const dataUpdate = { ...transition, translate: translate };
    console.log(dataUpdate);
    await translationApi.save(dataUpdate);
    toggleActiveToast();
  };
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
                Edit {locale} text
              </Text>
            </InlineStack>
            <InlineStack>
              <Button onClick={handelClickSave} variant="primary">
                Save
              </Button>
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
                    onChange={(e) => {
                      setTranslate((prev: any) => {
                        return { ...prev, placeholder_text: e };
                      });
                    }}
                    value={translate.placeholder_text}
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
                    onChange={(e) => {
                      setTranslate((prev: any) => {
                        return { ...prev, button_text: e };
                      });
                    }}
                    value={translate.button_text}
                  />
                </div>
              </div>
            </BlockStack>
          </Card>
        </BlockStack>
      </BlockStack>
      {activeToast ? (
        <>
          <Frame>
            <Toast
              content="Edit success"
              onDismiss={toggleActiveToast}
              duration={4500}
            />
          </Frame>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
