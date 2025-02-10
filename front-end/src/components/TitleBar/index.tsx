import { Button } from "@shopify/polaris";

export default function TitleBar() {
  return (
    <div style={{
        background: '#F3F3F3',
        height:'52px',
        borderBottom:'1px',
        borderBottomColor:'#E3E3E3',
        borderBottomStyle:'solid',
        display: 'flex',
        justifyContent: 'right', 
        alignItems: 'center', 
        padding:'12px'   
    }}>
        <Button size="medium" textAlign="right" variant="primary">Save</Button>
    </div>

  )
}
