import { TextField } from "@shopify/polaris";
import { useDispatch } from "react-redux";
import getStyleValue from "../../hooks/useTypedSelector";
import { updateCustomize } from "../../slices/customizeSlice";
type TextFieldNumber = {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type: any;
};
export default function TextFieldNumber({ label, type }: TextFieldNumber) {
  const inputHeight = getStyleValue(type);
  const dispatch = useDispatch();
  return (
    <TextField
      label={label}
      onChange={(e) => {
        dispatch(updateCustomize({ input_height: e }));
      }}
      type="number"
      value={inputHeight}
      autoComplete="off"
    />
  );
}
