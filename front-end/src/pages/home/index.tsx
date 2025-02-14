import { Button, FormLayout, TextField } from "@shopify/polaris";
import { useState } from "react";
import { Link } from "react-router-dom";
import shopApi from "../../api/shopApi";
import authApi from "../../api/authApi";
import { useDispatch } from "react-redux";
import { updateShopData } from "../../slices/shopSlice";
export default function HomePage() {
  const [shopifyDomain, setShopifyDomain] = useState("dat-nt2.myshopify.com");
  const [shopOwner, setShopOwner] = useState("Dat NT2");
  const [isShowLink, setIsShowLink] = useState(false);
  const dispatch = useDispatch();
  const handleLogin = async () => {
    const response = await shopApi.save({
      shopify_domain: shopifyDomain,
      shop_owner: shopOwner,
    });
    if (response) {
      dispatch(updateShopData(response.data));
      setIsShowLink(true);
      const fetchToken = async () => {
        const results = await authApi.fakeLogin({
          shopify_domain: shopifyDomain,
          shop_owner: shopOwner,
        });
        if (results) {
          localStorage.setItem("token", JSON.stringify(results.token));
          localStorage.setItem("shop", JSON.stringify(response.data));
        }
      };
      fetchToken();
    }
  };
  return (
    <div>
      <FormLayout>
        <TextField
          label="Shopify Domain"
          value={shopifyDomain}
          onChange={(e) => {
            setShopifyDomain(e);
          }}
          autoComplete="off"
        />
        <TextField
          type="text"
          label="Shop owner"
          value={shopOwner}
          onChange={(e) => {
            setShopOwner(e);
          }}
          autoComplete="text"
        />
        <Button onClick={handleLogin}>Login</Button>
        {isShowLink && (
          <>
            <Link to="/customization">customization</Link>
            <Link to="/translation">translation</Link>
          </>
        )}
      </FormLayout>
    </div>
  );
}
