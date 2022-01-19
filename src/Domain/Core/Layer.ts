import { MaybeRect } from "../Util/MaybeRect";
import Canvas from "./Canvas";
import Node from "./Node";
import Point from "./Point";
import ViewRect from "./ViewObject/ViewRect";

export default class Layer{

    private static instance : Layer;

    private nodes: Array<Draw>;

    private canTouhcs: Array<ViewRect>;

    private constructor(){
        this.nodes = Array();
        this.canTouhcs = Array();
    }

    /**
     * Layerのインスタンスを取得します。
     * 
     * @returns Layer (singleton)
     */
    public static getInstance(): Layer{
    if(!Layer.instance){
        Layer.instance = new Layer();
    }
        return Layer.instance;
    }

    /**
     * Canvasに描画するオブジェクトを登録します。
     * 
     * @param child 描画オブジェクト
     */
    public addChild(...child: Array<Draw>) : void{
        child.forEach(c => {
            // タッチ判定できるものcanTouchsに格納する
            if(c instanceof ViewRect){
                this.canTouhcs.push(c);
            }
            this.nodes.push(c);
        });
    }

    /**
     * Canvasをクリアしてから、登録されている描画オブジェクトを全て描画します。<br />
     * 何も登録されていない場合は処理をしません。
     * 
     * @returns 
     */
    public drawNode(): void{
        if(this.nodes.length === 0){
            // TODO message = array is empty
            console.log("empty");
            return;
        }
        Canvas.getInstance().clear();
        this.nodes.forEach(n => n.draw());
    }

    public getRect(point: Point): MaybeRect{
        const rect = this.canTouhcs.find(c => c.isIn(point));
        if(typeof rect == "undefined"){
            return undefined;
        } else {
            return rect as ViewRect;
        }
    }

    /**
     * 
     * 対象のdrawオブジェクトを削除します。
     * ダブルクリック時は-1がどうしても検出されるので排除します。
     * 
     * @param node 削除対象のオブジェクト
     */
    public removeChild(node : Draw): void {
        const index = this.nodes.indexOf(node);
        if(index !== -1){
            this.nodes.splice(this.nodes.indexOf(node),1);
        }
    }


}