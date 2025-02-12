interface ITranslation{
    id?:number,
    shop_id?:number,
    locale: string,
    translate : {
        placeholder_text: string,
        button_text:string
    }
}
export interface ITranslationResponse{
        statusCode: number,
        message: string,
        data: ITranslation
}
export interface ICount{
    value:number
}

export interface IResponseLogin{
    statusCode:number,
    message:string,
    token:string
}

export default ITranslation