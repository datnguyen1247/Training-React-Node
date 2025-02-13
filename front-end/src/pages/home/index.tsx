/* eslint-disable @typescript-eslint/no-explicit-any */
import { ContextualSaveBar, Frame, Navigation } from "@shopify/polaris";
import { HomeIcon, OrderIcon } from "@shopify/polaris-icons";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import authApi from "../../api/authApi";
import { RootState } from "../../stores";

export default function HomePage() {
  const shop = useSelector((state: RootState) => state.shop);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await authApi.fakeLogin();
      localStorage.setItem("token", JSON.stringify(response.token));
    };
    fetchApi();
  }, []);

  return (
    <div>
      {/* <Link to="/customization">customization</Link> */}
      <div style={{ height: "56px" }}>
        <Frame
          logo={{
            width: 86,
            contextualSaveBarSource:
              "https://cdn.shopify.com/s/files/1/2376/3301/files/Shopify_Secondary_Inverted.png",
          }}
        >
          <ContextualSaveBar
            message={shop.shop_owner + " " + shop.shopify_domain}
          />
        </Frame>
      </div>
      {/* <Link to="/customization">customization</Link> */}
      <Frame>
        <Navigation location="/">
          <Navigation.Section
            items={[
              {
                url: "/customization",
                excludePaths: ["customization"],
                label: "Customization",
                icon: HomeIcon,
              },
              {
                url: "/translation",
                excludePaths: ["translation"],
                label: "Translation",
                icon: OrderIcon,
              },
            ]}
          />
        </Navigation>
      </Frame>
    </div>
  );
}
