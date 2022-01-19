import { stringify } from "querystring";
import Point from "./Point";
import Size from "./Size";

/**
 * ポイントを表すクラスです。
 * xとyで
 */
export default class Rect{

    // TODO 不要なら削除する
    private point : Point;

    private size: Size;

    public constructor(x: number, y: number, width: number, height: number){
        this.point = new Point(x,y);
        this.size = new Size(width,height);
    }

    public getSize(): Size{
        return this.size;
    }

    public toString() : string{
        return (String)(this.point.getX() + this.point.getY() + this.size.getWidth() + this.size.getHeight());
    }

    public isContain(point : Point) : boolean{
        return true;
    }


}