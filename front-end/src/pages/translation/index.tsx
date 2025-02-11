import {
  BlockStack,
  Box,
  Button,
  Card,
  InlineStack,
  Modal,
  Text,
  TextField,
} from "@shopify/polaris";
import { PlusIcon } from "@shopify/polaris-icons";
import { useCallback, useEffect, useState } from "react";
import TranslationItem from "../../components/TranslationItem";
import DATA_TRANSLATIONS from "../../constants";
import ITranslation from "../../types";
export default function Translation() {
  const [activeModal, setActiveModal] = useState(false);
  const [dataTranslation, setDataTranslation] = useState<ITranslation[]>([]);
  const [translation, setTranslation] = useState("");

  useEffect(() => {
    setDataTranslation(DATA_TRANSLATIONS);
  }, []);

  const handleChangeModal = useCallback(() => {
    setActiveModal(!activeModal);
    setTranslation("");
  }, [activeModal]);
  const handleChangeTranslation = useCallback(
    (value: string) => setTranslation(value),
    []
  );
  const handleAddTranslation = () => {
    setDataTranslation((prev) => {
      return [
        ...prev,
        {
          id: Math.round(Math.random() * 100),
          locale: translation,
          translate: {
            button_text: "",
            placeholder_text: "",
          },
        },
      ];
    });
    handleChangeModal();
  };
  const handleDeleteTranslation = (id: number) => {
    const newTranslationData = dataTranslation.filter(
      (item: ITranslation) => item.id !== id
    );
    setDataTranslation(newTranslationData);
  };
  return (
    <>
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
                    {dataTranslation.map(
                      (item: ITranslation, index: number) => {
                        return (
                          <Box key={item.id}>
                            <TranslationItem
                              handleDelete={handleDeleteTranslation}
                              key={item.id}
                              id={item.id}
                              defaultTranslation={index === 0}
                              translationTitle={item.locale}
                            />
                            {index !== dataTranslation.length - 1 && (
                              <div
                                style={{
                                  height: "1px",
                                  width: "100%",
                                  backgroundColor: "#d9d9d9",
                                }}
                              ></div>
                            )}
                          </Box>
                        );
                      }
                    )}
                  </BlockStack>
                </Card>
                <InlineStack>
                  <Button
                    onClick={handleChangeModal}
                    textAlign="left"
                    icon={PlusIcon}
                    variant="plain"
                  >
                    Add locale
                  </Button>
                </InlineStack>
              </BlockStack>
            </Card>
          </BlockStack>
        </BlockStack>
      </div>
      <Modal
        open={activeModal}
        onClose={handleChangeModal}
        title="Add Translations"
        primaryAction={{
          content: "Add",
          onAction: handleAddTranslation,
        }}
        secondaryActions={[
          {
            content: "Close",
            onAction: handleChangeModal,
          },
        ]}
      >
        <Modal.Section>
          <TextField
            value={translation}
            onChange={handleChangeTranslation}
            label="Translation"
            type="email"
            autoComplete="email"
            helpText={
              <span>
                We’ll use this email address to inform you on future changes to
                Polaris.
              </span>
            }
          />
        </Modal.Section>
      </Modal>
    </>
  );
}
