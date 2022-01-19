
/**
 * サイズを表すクラスです。
 * widthとheightで
 */
export default class Size{

    private width : number;

    private height : number;

    public constructor(width : number, height : number){
        this.width = width;
        this.height = height;
    }

    public getWidth(): number{
        return this.width;
    }

    public getHeight(): number{
        return this.height;
    }

    public setHeight(height : number){
        this.height = height;
    }

    public setWidth(width : number){
        this.width = width;
    }

    public setSize(width = 0, height = 0){
        if(width !== 0){
            this.width = width;
        }
        if(height !== 0){
            this.height = height;
        }
        
    }

}