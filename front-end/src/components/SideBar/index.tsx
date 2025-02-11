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
export default function SideBar() {
  const [selected, setSelected] = useState("today");
  const handleSelectChange = useCallback(
    (value: string) => setSelected(value),
    []
  );
  const options = [
    { label: "Today", value: "today" },
    { label: "Yesterday", value: "yesterday" },
    { label: "Last 7 days", value: "lastWeek" },
  ];
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
            options={options}
            onChange={handleSelectChange}
            value={selected}
          />
        </div>
        <RangeSlider
          output
          label="Border radius"
          min={0}
          max={1}
          value={0.7}
          onChange={() => {}}
          suffix={
            <p
              style={{
                minWidth: "24px",
                textAlign: "right",
              }}
            >
              1px
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
          options={options}
          onChange={handleSelectChange}
          value={selected}
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
          <TextField label="Border style" value="Dotted" autoComplete="off" />
        </div>
        <RangeSlider
          output
          label="Border radius"
          min={0}
          max={1}
          value={0.7}
          onChange={() => {}}
          suffix={
            <p
              style={{
                minWidth: "24px",
                textAlign: "right",
              }}
            >
              1px
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
            checked={false}
            id="disabled"
            name="accounts"
          />
          <RadioButton
            label="Horizontal"
            checked={false}
            id="disabled"
            name="accounts"
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
