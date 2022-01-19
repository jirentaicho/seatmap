import Node from "../Node";
import Point from "../Point";
import Rect from "../Rect";

export default class ViewRect extends Node{

    protected rect : Rect;

    public constructor(x = 0, y = 0, w = 0, h = 0){
        super(x,y);
        this.rect = new Rect(x,y,w,h);
    }
    
    public isIn(point: Point): boolean{
        const thispoint = this.getPoint();
        const thissize = this.rect.getSize();

        const hit =
        (thispoint.getX() <= point.getX() && point.getX() <= thispoint.getX() + thissize.getWidth())
            && (thispoint.getY() <= point.getY() && point.getY() <= thispoint.getY() + thissize.getHeight());
        if(hit){
            return true;
        } else {
            return false;
        }

    }

    draw(): void {
        // 利用するパラメータはスタック変数に置いておく
        const point = this.getPoint();
        const size = this.rect.getSize();

        this.canvas.context.fillRect(point.getX(), point.getY(), size.getWidth(), size.getHeight());
    }
    
}