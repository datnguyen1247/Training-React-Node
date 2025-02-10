import { ReactNode } from "react"
import Title from "../Title"
import { CaretUpIcon } from "@shopify/polaris-icons"
import { Divider } from "@shopify/polaris"

type Property = {
    chidlren: ReactNode
}  

export default function Property({chidlren}:Property) {
  return (
    <>
    <div style={{
                padding:'16px'  
            }}>
                <Title title="Discount box size" icon={CaretUpIcon}/>
                <div style={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    gap:'16px'
                }}>
                {chidlren}               
            </div>
            </div>
            <Divider />
    </>
  )
}
