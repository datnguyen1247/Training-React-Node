/* eslint-disable @typescript-eslint/no-explicit-any */
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeContent from "../../components/HomeContent";
import { fetchDataCustomize } from "../../slices/customizeSlice";
const TitleBar = lazy(() => import("../../components/TitleBar"));
export default function CustomizationPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataCustomize() as any);
  }, []);
  return (
    <div>
      <TitleBar />
      <HomeContent />
    </div>
  );
}
