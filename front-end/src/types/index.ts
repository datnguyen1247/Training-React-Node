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

export interface ICustomizeStyle{
    style:ICustomize
}

export interface ICustomize{
    input_width:number,
    input_height:number,
    input_border:string,
    input_border_radius:number,
    input_background_color:string,
    button_variant:string,
    border_width:number,
    border_color:string,
    button_width:number,
    button_height:number,
    button_border:string,
    button_background_color:string,
    button_text_color:string,
    direction:string,
    shop_id?: number,
    createdAt?: string,
    updatedAt?: string,
    css:string
}

export interface IResponseLogin{
    statusCode:number,
    message:string,
    token:string
}

export default ITranslation