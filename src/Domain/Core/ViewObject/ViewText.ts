import Node from "../Node";
import Rect from "../Rect";

export default class ViewText extends Node{

    //private text: string;

    public textInfo = {
        text : "",
        color : "#000",
        fontSize: 16,
    }

    public constructor(text = "", x = 0, y = 0){
        super(x,y);
        this.textInfo.text = text;
    }

    draw(): void {
        const point = this.getPoint();
        this.canvas.setColor(this.textInfo.color);
        this.canvas.context.font = this.textInfo.fontSize.toString() + "px serif";
        this.canvas.context.fillText(this.textInfo.text, point.getX(), point.getY());
    }
    
}