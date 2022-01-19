import Canvas from './Canvas';
import Point from './Point';
import Rect from './Rect';

export default abstract class Node implements Draw{

    private point: Point;

    protected canvas: Canvas;

    protected color: string;

    public constructor(x = 0, y = 0)
    {
        this.point = new Point(x,y);
        this.canvas = Canvas.getInstance();
        this.color = "#000";
    }

    public getPoint(): Point{
        return this.point;
    }

    public setPoint(newPoint : Point): void{
        this.point.setPoint(newPoint.getX(),newPoint.getY());
    }


    abstract draw(): void;

}