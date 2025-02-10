import { lazy } from "react";
import HomeContent from "../../components/HomeContent";
const TitleBar = lazy(() => import('../../components/TitleBar'));
export default function HomePage() {
  return (
    <div>
      <TitleBar/>
      <HomeContent/>
    </div>

  )
}
