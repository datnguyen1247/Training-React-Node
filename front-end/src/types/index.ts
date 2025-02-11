interface ITranslation{
    id:number,
    locale: string,
    translate : {
        placeholder_text: string,
        button_text:string
    }
}
export interface ICount{
    value:number
}
export default ITranslation