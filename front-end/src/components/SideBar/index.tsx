import {
  BlockStack,
  Box,
  InlineStack,
  RadioButton,
  RangeSlider,
  TextField,
} from "@shopify/polaris";
import CircleBorder from "../CircleBorder";
import Property from "../Property";
import TextFieldNumber from "../TextFieldNumber";
export default function SideBar() {
  return (
    <Box width="410px" paddingBlockEnd="300" background="bg-fill-active">
      {/* Discount box size */}

      <Property title="Discount box size">
        <InlineStack wrap={false} align="center" gap="400">
          <TextFieldNumber label="Box height" />
          <TextFieldNumber label="Box width" />
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
          <TextField label="Border style" value="Dotted" autoComplete="off" />
        </div>
        <RangeSlider
          output
          label="Border radius"
          min={0}
          max={360}
          value={10}
          onChange={() => {}}
          prefix={<p>1 px</p>}
          suffix={
            <p
              style={{
                minWidth: "24px",
                textAlign: "right",
              }}
            >
              {10}
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
        <TextField
          label="Button type"
          type="text"
          value="Plan"
          autoComplete="off"
        />
        <div style={{ marginTop: "16px" }}>
          <InlineStack wrap={false} align="center" gap="400">
            <TextFieldNumber label="Box width" />
            <TextFieldNumber label="Box height" />
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
          max={360}
          value={10}
          onChange={() => {}}
          prefix={<p>1 px</p>}
          suffix={
            <p
              style={{
                minWidth: "24px",
                textAlign: "right",
              }}
            >
              {10}
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
