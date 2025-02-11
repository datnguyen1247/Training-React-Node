type SkeletonText = {
  width?: string;
  height?: string;
  radius?: string;
};
export default function SkeletonText({
  width = "100%",
  height = "30.77px",
  radius = "8px",
}: SkeletonText) {
  return (
    <div
      style={{
        width: `${width}`,
        height: `${height}`,
        borderRadius: `${radius}`,
        backgroundColor: "#EBEBEB",
      }}
    ></div>
  );
}
