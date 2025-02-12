import { Badge, Button, InlineStack, Text } from "@shopify/polaris";
import { Link } from "react-router-dom";
import DotAction from "../DotAction";

type TranslationItem = {
  translationTitle: string;
  defaultTranslation?: boolean;
  handleDelete: (locale: string) => void;
};
export default function TranslationItem({
  translationTitle,
  defaultTranslation,
  handleDelete,
}: TranslationItem) {
  return (
    <div style={{ padding: "16px" }}>
      <InlineStack align="space-between">
        <InlineStack gap="400">
          <Text variant="headingSm" as="h6">
            {translationTitle}
          </Text>
          {defaultTranslation && <Badge>Default</Badge>}
        </InlineStack>
        {defaultTranslation ? (
          <Link to={`/translation/edit/${translationTitle}`}>
            <Button variant="plain">Edit</Button>
          </Link>
        ) : (
          <DotAction
            locale={translationTitle}
            onDeleteTranslation={handleDelete}
          />
        )}
      </InlineStack>
    </div>
  );
}
