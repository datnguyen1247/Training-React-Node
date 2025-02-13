import { Button, Frame } from "@shopify/polaris";
import { useSelector } from "react-redux";
import { RootState } from "../../stores";
import customizationApi from "../../api/customizationApi";
import { useCallback, useState } from "react";
import { Toast } from "@shopify/polaris";

export default function TitleBar() {
  const styles = useSelector((state: RootState) => state.customize.style);
  const [activeToast, setActiveToast] = useState(false);

  const handleSave = async () => {
    await customizationApi.save({ ...styles, shop_id: 1 });
    toggleActiveToast();
  };

  const toggleActiveToast = useCallback(
    () => setActiveToast((activeToast) => !activeToast),
    []
  );
  return (
    <>
      <div
        style={{
          background: "#F3F3F3",
          height: "52px",
          borderBottom: "1px",
          borderBottomColor: "#E3E3E3",
          borderBottomStyle: "solid",
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
          padding: "12px",
        }}
      >
        <Button
          onClick={handleSave}
          size="medium"
          textAlign="right"
          variant="primary"
        >
          Save
        </Button>
      </div>
      {activeToast && (
        <Frame>
          <Toast
            content="Save success"
            onDismiss={toggleActiveToast}
            duration={500}
          />
        </Frame>
      )}
    </>
  );
}
