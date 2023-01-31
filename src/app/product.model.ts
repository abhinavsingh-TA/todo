export class product{
    public key: string
    public title: string
    public description: string
    public sizes: string[]
    public price: number
    public currencyId: string
    public currencyFormat: string
    public isFreeShipping: boolean
    public style: string

    constructor(key: string, title: string, description: string, sizes: string[], price: number, currencyId: string, currencyFormat: string, isFreeShipping: boolean, style: string){
        this.key = key
        this.title = title
        this.description = description
        this.sizes = sizes
        this.price = price
        this.currencyId = currencyId
        this.currencyFormat = currencyFormat
        this.isFreeShipping = isFreeShipping
        this.style = style
    }
}