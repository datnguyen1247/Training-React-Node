import { CustomizationController } from "./controller/CustomizationController";
import { ShopController } from "./controller/ShopController";
import { TranslationController } from "./controller/TranslationController";

export const Routes = [
  //SHOP    
  {
    method: "get",
    route: "/shop",
    controller: ShopController,
    action: "all",
  },
  {
    method: "get",
    route: "/shop/:id",
    controller: ShopController,
    action: "one",
  },
  {
    method: "post",
    route: "/shop",
    controller: ShopController,
    action: "save",
  },
  //FAKE LOGIN
  {
    method: "get",
    route: "/login",
    controller: ShopController,
    action: "fakeLogin",
  },
  //Customization
  {
    method: "put",
    route: "/customization",
    controller: CustomizationController,
    action: "save",
  },
  //Translation
  {
    method: "get",
    route: "/translation",
    controller: TranslationController,
    action: "all",
  },
  {
    method: "get",
    route: "/translation/:locale",
    controller: TranslationController,
    action: "one",
  },
  {
    method: "post",
    route: "/translation",
    controller: TranslationController,
    action: "save",
  },
  {
    method: "delete",
    route: "/translation/:locale",
    controller: TranslationController,
    action: "remove",
  },
];
