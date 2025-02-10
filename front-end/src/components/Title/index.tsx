/* eslint-disable @typescript-eslint/no-explicit-any */
import {  Icon, Text } from "@shopify/polaris";

type Title = {
    title:string,
    icon: any
}  
export default function Title({title,icon}:Title) {
  return (
            <div style={{
                display: 'flex',
                alignItems:'center',
                justifyContent:'space-between',
                paddingBottom:'16px'            
                }}>
                    <Text variant="headingMd" as="h4" >{title}</Text>
                    <div>
                        <Icon
                            source={icon}
                            tone="base"
                        />
                    </div>
                </div>
  )
}
