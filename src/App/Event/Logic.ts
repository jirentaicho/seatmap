import { ButtonType } from "../../Domain/Core/Custom/ButtonType";
import EventButton from "../../Domain/Core/Custom/EventButton";
import Seat from "../../Domain/Core/Custom/Seat";
import Layer from "../../Domain/Core/Layer";
import Target from "../../Domain/Core/UI/Target";
import ViewRect from "../../Domain/Core/ViewObject/ViewRect";
import Converter from "../../Domain/Util/Converter";
import CurrentMode from "../CurrentMode";
import { Mode } from "../Type/Mode";


export default class Logic {

    public static moveDownRect(e: MouseEvent | TouchEvent):void{

        // ここで拾えば後は問題ない
        if(CurrentMode.mode == Mode.Delete){
            return;
        }

        const point = Converter.toPoint(e);
        
        const layer = Layer.getInstance();
        const viewRect = layer.getRect(point);

        if(viewRect instanceof Seat){
            Target.target = viewRect;
        } else if(viewRect instanceof EventButton){
            Target.target = undefined;
        }
    }

    public static moveUpRect(e: MouseEvent | TouchEvent):void{
        if(Target.target == undefined){
            return;
        }
        Target.target = undefined;
        Layer.getInstance().drawNode();
    }

     /**
     * マウスを動かしている間に対象のレクトを移動させます。
     * 
     * @param e 
     * @returns 
     */
         public static drawMoveObject(e: MouseEvent | TouchEvent):void{

            if(Target.target == undefined){
                return;
            }
    
            const point = Converter.toPoint(e);
            const vecPoint = Converter.toGrid(point);
            Target.target.setPoint(vecPoint);
            Layer.getInstance().drawNode();
    
        }

    /**
     * レクト追加ボタンを押した時にレクト追加画面を表示します。
     * 
     * @param e イベント情報
     */
    public static openAddButtonLogic(e: MouseEvent | TouchEvent) : void {
        const point = Converter.toPoint(e);

        const layer = Layer.getInstance();
        const viewRect = layer.getRect(point); 

        if(viewRect instanceof EventButton){

            if(viewRect.type == ButtonType.Delete || CurrentMode.mode == Mode.Delete){
                return;
            }

            // モードの切り替えを行う
            CurrentMode.mode = Mode.Add;

            const inputArea = (<HTMLElement>document.getElementById("inputarea"));
            inputArea.classList.remove("disable");
            inputArea.classList.add("enable");
        
        }
    }

    /**
     * inputパラメータを元に座席を追加する
     * 
     * @param e イベント情報
     */
    public static checkAddButtonLogic(e: MouseEvent | TouchEvent): void{
        const point = Converter.toPoint(e);

        const layer = Layer.getInstance();
        const viewRect = layer.getRect(point);

        // CurrentMode.setMode(Mode.Add);
        const name = (<HTMLInputElement>document.getElementById("inputname")).value;
        const width = (<HTMLInputElement>document.getElementById("inputwidth")).value;
        const height = (<HTMLInputElement>document.getElementById("inputheight")).value;

        const fontSize = (<HTMLInputElement>document.getElementById("inputfontsize")).value;
        const backColor = (<HTMLInputElement>document.getElementById("inputColor")).value;


        const seat = new Seat(0,0,Number(width),Number(height),name);
        seat.rectInfo.backgroundColor = backColor;
        seat.setFontInfo(Number(fontSize));
        
        layer.addChild(
            seat,
        );
        layer.drawNode();
        (<HTMLInputElement>document.getElementById("inputname")).value = "";

        const inputArea = (<HTMLElement>document.getElementById("inputarea"));
        inputArea.classList.remove("enable");
        inputArea.classList.add("disable");

    }

    /**
     * 削除ボタンを押したときのロジックです。
     */
    public static deleteButtonLogic(e: MouseEvent | TouchEvent): void{

        const point = Converter.toPoint(e);

        const layer = Layer.getInstance();
        const viewRect = layer.getRect(point); 

        if(viewRect instanceof EventButton){

            if(viewRect.type == ButtonType.Add){
                return;
            }

            // 既に削除モードの場合は切り替えて抜けます。
            if(CurrentMode.mode == Mode.Delete){
                viewRect.rectInfo.backgroundColor = "#fff";
                CurrentMode.mode = Mode.Add;
                layer.drawNode();
                return;
            }

            viewRect.rectInfo.backgroundColor = "red";
            CurrentMode.mode = Mode.Delete;

        }

        layer.drawNode();
    }

    /**
     * 
     * 削除を行うロジックです
     * 
     * @param e
     */
    public static deleteLogic(e: MouseEvent | TouchEvent) : void{
        // 削除モード時のみ実行する
        if(CurrentMode.mode != Mode.Delete){
            return;
        }
        const point = Converter.toPoint(e);
        
        const layer = Layer.getInstance();
        const viewRect = layer.getRect(point);

        // ダブルクリックするとバグる。
        if(viewRect instanceof Seat){
            layer.removeChild(viewRect);
        }

        layer.drawNode();

    }

}