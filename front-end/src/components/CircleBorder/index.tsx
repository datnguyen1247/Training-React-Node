import { Text } from "@shopify/polaris";

type CircleBorder = {
  title: string;
  className?: object;
};
export default function CircleBorder({ title, className = {} }: CircleBorder) {
  const classStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    gap: "8px",
    ...className,
  };
  return (
    <div style={classStyle}>
      <div
        style={{
          width: "34px",
          height: "34px",
          backgroundColor: "#2F4052",
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
}
