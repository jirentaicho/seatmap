
/**
 * ポイントを表すクラスです。
 * xとyで
 */
export default class Point{

    private x : number;

    private y : number;

    public constructor(x : number, y : number){
        this.x = x;
        this.y = y;
    }

    public getX(): number{
        return this.x;
    }

    public getY(): number{
        return this.y;
    }

    public setX(x : number){
        this.x = x;
    }

    public setY(y : number){
        this.y = y;
    }

    public setPoint(x = 0, y = 0){
        if(x !== 0){
            this.x = x;
        }
        if(y !== 0){
            this.y = y;
        }
        
    }

}