import Canvas from "../Canvas";
import Event from "./Event";

export default class Controller{

    private static instance : Controller;

    private constructor(){
    }

    /**
     * Controllerのインスタンスを取得します。
     * 
     * @returns Controller (singleton)
     */
    public static getInstance(): Controller{
        if(!Controller.instance){
            Controller.instance = new Controller();
        }
        return Controller.instance;
    }

    public setup(): void{

        const canvas = Canvas.getInstance().canvas;

        // それぞれのイベントを付与する
        canvas.addEventListener('mousedown', e => Event.mouseDown(e));
        canvas.addEventListener('mouseup', e => Event.mouseUp(e));
        //余計な処理が増えるので消します
        //canvas.addEventListener('mousemove', Event.mouseMove); 

    } 

    /**
     * 
     * 発火イベントに対する関数を登録します
     * 
     * @param func 実行する関数 
     */
    public addDownEvent(func: (prm: MouseEvent | TouchEvent) => void ): void{
        const canvas = Canvas.getInstance().canvas;

        canvas.addEventListener("mousedown", e => func(e), true);
        canvas.addEventListener("touchstart", e => func(e), true);
    }

    public addUpEvent(func: (prm: MouseEvent | TouchEvent) => void ): void{
        const canvas = Canvas.getInstance().canvas;
        
        canvas.addEventListener("mouseup", e => func(e), true);
        canvas.addEventListener("touchend", e => func(e), true);
    }

    public addMoveEvent(func: (prm: MouseEvent | TouchEvent) => void ): void{
        const canvas = Canvas.getInstance().canvas;
        
        canvas.addEventListener("mousemove", e => func(e), true);
        // 
    }

}