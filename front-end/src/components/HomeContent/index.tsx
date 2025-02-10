import { lazy } from "react";
const Widget = lazy(() => import('../Widget'));
const SideBar = lazy(() => import('../SideBar'));


export default function HomeContent() {
  return (
    <div style={{
        display:'flex',
        alignContent:'center',
      }}>
        <SideBar/>
        <Widget/>
    </div>
  )
}
