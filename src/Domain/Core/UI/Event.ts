import Converter from "../../Util/Converter";
import Canvas from "../Canvas";
import Layer from "../Layer";
import Point from "../Point";
import ViewRect from "../ViewObject/ViewRect";
import Target from "./Target";

/**
 * キー操作を行います
 * pointのベクトル変換が必要です。
 * 高階関数にしてメソッドを渡すようにしたほうが良さそうであれば修正する。
 * 
 */
export default class Event{

    public static mouseDown(e: MouseEvent | TouchEvent): void{
        /*
        const point = Converter.toPoint(e);
        
        const layer = Layer.getInstance();
        const viewRect = layer.getRect(point);

        Target.target = viewRect;
        */
    }

    public static mouseUp(e: MouseEvent | TouchEvent): void{
        /*
        const point = Converter.toPoint(e);
        Target.target.setPoint(point);


        Target.target = new ViewRect();
        Layer.getInstance().drawNode();
     */
    }




    public static mouseMove(): void{
        console.log("mouse move");
    }

    
}