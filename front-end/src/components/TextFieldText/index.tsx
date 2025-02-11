import { TextField } from "@shopify/polaris";

type TextFieldText = {
  title: string;
};

export default function TextFieldText({ title = "" }: TextFieldText) {
  return <TextField label={title} value="Dotted" autoComplete="off" />;
}
