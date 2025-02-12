import {
  BlockStack,
  Box,
  InlineStack,
  RadioButton,
  RangeSlider,
  Select,
  TextField,
} from "@shopify/polaris";
import CircleBorder from "../CircleBorder";
import Property from "../Property";
import TextFieldNumber from "../TextFieldNumber";
import { useCallback, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { updateCustomize } from "../../slices/customizeSlice";
import { RootState } from "../../stores";
import { RangeSliderValue } from "@shopify/polaris/build/ts/src/components/RangeSlider/types";
import { DATA_BORDER_TYPE, DATA_BUTTON_TYPE } from "../../constants";
export default function SideBar() {
  const dispatch = useDispatch();
  const styles = useSelector(
    (state: RootState) => state.customize.style,
    shallowEqual
  );
  const [inputBorderType, setInputBorderType] = useState("Dotted");
  const [btnBorderType, setBtnBorderType] = useState("Dotted");
  const [btnType, setBtnType] = useState("Plain");
  const [layout, setLayout] = useState(styles.direction);
  const [inputBorderRadius, setInputBorderRadius] = useState<RangeSliderValue>(
    () => styles.input_border_radius as unknown as RangeSliderValue
  );
  const [buttonBorderWidth, setButtonBorderWidth] = useState<RangeSliderValue>(
    () => styles.input_border_radius as unknown as RangeSliderValue
  );
  const handleSelectChange = useCallback(
    (value: string) => {
      const border = DATA_BORDER_TYPE.find((item) => item.title === value);
      if (border) {
        setInputBorderType(border.title);
        dispatch(updateCustomize({ input_border: border.value }));
      }
    },
    [dispatch]
  );
  const handleSelectChangeTypeBtn = useCallback(
    (value: string) => {
      const buttonType = DATA_BUTTON_TYPE.find((item) => item.title === value);
      if (buttonType) {
        setBtnType(buttonType.title);
        dispatch(updateCustomize({ button_variant: buttonType.value }));
      }
    },
    [dispatch]
  );
  const handleChangeLayout = useCallback(
    (_: boolean, newValue: string) => {
      console.log(newValue);
      setLayout(newValue);
      dispatch(updateCustomize({ direction: newValue }));
    },
    [dispatch]
  );

  const handleSelectChangeBtnBorder = useCallback(
    (value: string) => {
      const border = DATA_BORDER_TYPE.find((item) => item.title === value);
      if (border) {
        setBtnBorderType(border.title);
        dispatch(updateCustomize({ button_border: border.value }));
      }
    },
    [dispatch]
  );
  return (
    <Box width="410px" paddingBlockEnd="300" background="bg-fill-active">
      {/* Discount box size */}
      <Property title="Discount box size">
        <InlineStack wrap={false} align="center" gap="400">
          <TextFieldNumber type="input_height" label="Box height" />
          <TextFieldNumber type="input_width" label="Box width" />
        </InlineStack>
      </Property>
      {/* Discount box border */}
      <Property title="Discount box border">
        <CircleBorder title="Border color" />
        <div
          style={{
            margin: "16px 0",
          }}
        >
          <Select
            label="Border style"
            options={DATA_BORDER_TYPE.map((item) => item.title)}
            onChange={handleSelectChange}
            value={inputBorderType}
          />
        </div>
        <RangeSlider
          output
          label="Border radius"
          min={0}
          max={10}
          value={inputBorderRadius}
          onChange={(e) => {
            setInputBorderRadius(e);
            dispatch(
              updateCustomize({ input_border_radius: inputBorderRadius })
            );
          }}
          suffix={
            <p
              style={{
                minWidth: "24px",
                textAlign: "right",
              }}
            >
              10px
            </p>
          }
        />
      </Property>

      {/* Discount box color */}
      <Property title="Discount box color">
        <CircleBorder title="Discount box color" />
      </Property>

      {/* Button */}

      <Property title="Button">
        <Select
          label="Button type"
          options={DATA_BUTTON_TYPE.map((item) => item.title)}
          onChange={handleSelectChangeTypeBtn}
          value={btnType}
        />
        <div style={{ marginTop: "16px" }}>
          <InlineStack wrap={false} align="center" gap="400">
            <TextFieldNumber type="button_width" label="Button width" />
            <TextFieldNumber type="button_height" label="Button height" />
          </InlineStack>
        </div>
        <CircleBorder className={{ marginTop: "16px" }} title="Button color" />
        <CircleBorder className={{ marginTop: "16px" }} title="Text color" />
        <div
          style={{
            margin: "16px 0",
          }}
        >
          <Select
            label="Border style"
            options={DATA_BORDER_TYPE.map((item) => item.title)}
            onChange={handleSelectChangeBtnBorder}
            value={btnBorderType}
          />
        </div>
        <RangeSlider
          output
          label="Border width"
          min={0}
          max={10}
          value={buttonBorderWidth}
          onChange={(e) => {
            setButtonBorderWidth(e);
            dispatch(updateCustomize({ border_width: buttonBorderWidth }));
          }}
          suffix={
            <p
              style={{
                minWidth: "24px",
                textAlign: "right",
              }}
            >
              10px
            </p>
          }
        />
        <CircleBorder className={{ marginTop: "16px" }} title="Border color" />
      </Property>

      {/* Layout */}
      <Property title="Layout">
        <BlockStack align="start">
          <RadioButton
            label="Vertical"
            checked={layout === "vertical"}
            id="vertical"
            name="vertical"
            onChange={handleChangeLayout}
          />
          <RadioButton
            label="Horizontal"
            checked={layout === "horizontal"}
            id="horizontal"
            name="horizontal"
            onChange={handleChangeLayout}
          />
        </BlockStack>
      </Property>

      {/* Custom CSS */}
      <Property title="Custom CSS">
        <div style={{ width: "100%" }}>
          <TextField
            value="Value"
            label=""
            onChange={() => {}}
            multiline={4}
            autoComplete="off"
          />
        </div>
      </Property>
    </Box>
  );
}
