type SkeletonThumbProps = {
  width?: string;
  height?: string;
  backgroundColor?: string;
};

export default function SkeletonThumb({
  width = "100%",
  height = "100%",
  backgroundColor = "#ebebeb",
}: SkeletonThumbProps) {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor,
      }}
    ></div>
  );
}
