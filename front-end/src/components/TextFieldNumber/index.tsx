import { TextField } from '@shopify/polaris'

type TextFieldNumber ={
    lable:string
}
export default function TextFieldNumber({lable}:TextFieldNumber) {
  return (
    <TextField
    label={lable}
    type="number"
    value="25"
    autoComplete="off"
    />
  )
}
