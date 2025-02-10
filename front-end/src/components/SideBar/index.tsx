import { Box, Divider, RadioButton, RangeSlider, TextField } from "@shopify/polaris";
import {
    CaretUpIcon
} from '@shopify/polaris-icons';
import CircleBorder from "../CircleBorder";
import Title from "../Title";
import TextFieldNumber from "../TextFieldNumber";
export default function SideBar() {
  return (
    <Box width="410px" paddingBlockEnd='300' background='bg-fill-active'>
        {/* Discount box size */}
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
                
                <TextFieldNumber lable="Box height"/>
                <TextFieldNumber lable="Box width"/>
            </div>
        </div>
        <Divider />
        {/* Discount box border */}
        <div style={{
            padding:'16px'  
        }}>
            <Title title="Discount box border" icon={CaretUpIcon}/>
            <CircleBorder  title="Border color"/>
            <div style={{
                margin:'16px 0'
            }}>
                <TextField
                    label="Border style"
                    value="Dotted"
                    autoComplete="off"
                    />
            </div>
                <RangeSlider
                    output
                    label="Border radius"
                    min={0}
                    max={360}
                    value={10}
                    onChange={()=>{}}
                    prefix={<p>1 px</p>}
                    suffix={
                    <p
                        style={{
                        minWidth: '24px',
                        textAlign: 'right',
                        }}
                    >
                        {10}
                    </p>
                    }
                />
        </div>
        <Divider />
        {/* Discount box color */}

        <div style={{
            padding:'16px' 
        }}>
            <Title title="Discount box color" icon={CaretUpIcon}/>
            <CircleBorder title="Discount box color"/>
        </div>          
        
        {/* Button */}
        <div style={{
            padding:'16px' 
        }}>
            <Title title="Button" icon={CaretUpIcon}/>
            <TextField
                label="Button type"
                type='text'
                value="Plan"
                autoComplete="off"
                />
            <div style={{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                gap:'16px',
                marginTop:'16px'
            }}>
                <TextFieldNumber lable="Box width"/>
                <TextFieldNumber lable="Box height"/>   
            </div>
            <CircleBorder className={{marginTop:'16px'}} title="Button color"/>
            <CircleBorder className={{marginTop:'16px'}} title="Text color"/>
            
            <div style={{
                margin:'16px -0'
            }}>
                <TextField
                    label="Border style"
                    value="Dotted"
                    autoComplete="off"
                    />
            </div>
                <RangeSlider
                    output
                    label="Border radius"
                    min={0}
                    max={360}
                    value={10}
                    onChange={()=>{}}
                    prefix={<p>1 px</p>}
                    suffix={
                    <p
                        style={{
                        minWidth: '24px',
                        textAlign: 'right',
                        }}
                    >
                        {10}
                    </p>
                    }
                />
            <CircleBorder className={{marginTop:'16px'}} title="Border color"/>
        </div>  
        <Divider />

        {/* Layout */}
        <div style={{
            padding:'16px'  
        }}>
            <Title title="Layout" icon={CaretUpIcon}/>
            <div style={{
                display:'flex',
                alignItems:'center',
                justifyContent:'start',
                gap:'16px'
            }}>
               <div style={{display:'flex',flexDirection:'column'}}>
                    <RadioButton
                    label="Vertical"
                    checked={false}
                    id="disabled"
                    name="accounts"
                    />
                    <RadioButton
                    label="Horizontal"
                    checked={false}
                    id="disabled"
                    name="accounts"
                />
               </div>
            </div>
        </div>
        <Divider />

        {/* Custom CSS */}
        <div style={{
            padding:'16px'  
        }}>
            <Title title="Custom CSS" icon={CaretUpIcon}/>
            <div style={{
                display:'flex',
                alignItems:'center',
                justifyContent:'start',
                gap:'16px'
            }}>
               <div style={{width:'100%'}}>
                   <TextField
                    value="Value"
                    label=""
                    onChange={()=>{}}
                    multiline={4}
                    autoComplete="off"
                    />
               </div>
            </div>
        </div>
        <Divider />
    </Box>
  )
}
