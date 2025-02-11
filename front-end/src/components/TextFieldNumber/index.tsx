import { TextField } from "@shopify/polaris";

type TextFieldNumber = {
  label: string;
};
export default function TextFieldNumber({ label }: TextFieldNumber) {
  return (
    <TextField label={label} type="number" value="25" autoComplete="off" />
  );
}
