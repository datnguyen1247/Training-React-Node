import { Badge, Button, InlineStack, Text } from "@shopify/polaris";
import { Link } from "react-router-dom";
import DotAction from "../DotAction";

type TranslationItem = {
  translationTitle: string;
  defaultTranslation?: boolean;
  id: number;
  handleDelete: (id: number) => void;
};
export default function TranslationItem({
  translationTitle,
  id,
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
          <Link to={`/translation/edit/${id}`}>
            <Button variant="plain">Edit</Button>
          </Link>
        ) : (
          <DotAction id={id} onDeleteTranslation={handleDelete} />
        )}
      </InlineStack>
    </div>
  );
}
