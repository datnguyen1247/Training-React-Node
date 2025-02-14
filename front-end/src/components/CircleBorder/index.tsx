import { ColorPicker, Popover, Text } from "@shopify/polaris";
import { useCallback, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { updateCustomize } from "../../slices/customizeSlice";
import { hexToHsb, hsbToHex } from "../../utils";
import { RootState } from "../../stores";

type CircleBorder = {
  title: string;
  className?: object;
  type: string;
};

export default function CircleBorder({
  title,
  className = {},
  type,
}: CircleBorder) {
  const classStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    gap: "8px",
    ...className,
  };
  const styles = useSelector(
    (state: RootState) => state.customize.style,
    shallowEqual
  );
  const dispatch = useDispatch();
  const [popoverActive, setPopoverActive] = useState(false);
  const [color, setColor] = useState<{
    hue: number;
    brightness: number;
    saturation: number;
  }>(() => hexToHsb(styles[type]));

  const togglePopoverActive = useCallback(() => {
    setPopoverActive((popoverActive) => !popoverActive);
  }, []);
  const handleColorChange = (e: {
    hue: number;
    brightness: number;
    saturation: number;
  }) => {
    setColor(e);
    const resultColor = hsbToHex(e.hue, e.saturation, e.brightness);
    dispatch(updateCustomize({ [`${type}`]: resultColor }));
  };

  const activator = (
    <div style={classStyle} onClick={togglePopoverActive}>
      <div
        style={{
          width: "34px",
          height: "34px",
          backgroundColor: `${styles[type]}`,
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "#D3D2CD",
          borderRadius: "100%",
        }}
      ></div>
      <Text tone="subdued" fontWeight="regular" as="p">
        <span style={{ color: "#303030" }}>{title}</span>
      </Text>
    </div>
  );

  return (
    <Popover
      active={popoverActive}
      activator={activator}
      autofocusTarget="first-node"
      onClose={togglePopoverActive}
    >
      <div style={{ padding: "10px" }}>
        <ColorPicker
          onChange={handleColorChange}
          color={color}
          allowAlpha={false}
        />
      </div>
    </Popover>
  );
}
