import Node from "../Node";
import Point from "../Point";
import Rect from "../Rect";
import ViewRect from "../ViewObject/ViewRect";
import ViewText from "../ViewObject/ViewText";
import { ButtonType } from "./ButtonType";

/**
 * 自分でコアを継承した新しいViewRectクラスを作成する場合
 * 
 */
export default class EventButton extends ViewRect{

    private text: ViewText;

    private textMargin = 3.5;

    private textLingHeight = 2;

    public type : ButtonType = ButtonType.Add;

    public rectInfo = {
        backgroundColor: "#fff",
    }
 
    /**
     * イベントボタンを作成します。
     * 
     * @param x 
     * @param y 
     * @param w 
     * @param h 
     * @param text 表示するテキスト
     * @param type デフォルトは追加ボタン
     */
    public constructor(x = 0, y = 0, w = 200, h = 200, text = "", type = ButtonType.Add){
        super(x,y,w,h);
        //中央に表示するようにする？描画時に指定したほうが良さそう
        this.text = new ViewText(text,x,y);
        this.setTextPosition();
        this.type = type;
    }

    override draw(): void {
        // 利用するパラメータはスタック変数に置いておく
        const point = this.getPoint();
        const size = this.rect.getSize();
        this.drawBorder(1);
        this.canvas.setColor(this.rectInfo.backgroundColor);
        // TODO この書き方は気持ち悪いのでCanvas側に処理を委譲する
        this.canvas.context.fillRect(point.getX(), point.getY(), size.getWidth(), size.getHeight());

        this.canvas.setBlackColor();
        this.setTextPosition();
        this.text.draw();
    }

    public click(): void{

    }

    private setTextPosition(): void {
        const point = this.getPoint();
        const size = this.rect.getSize();
        const newPoint = new Point(point.getX() + this.textMargin, point.getY() + (size.getHeight() / this.textLingHeight) );
        this.text.setPoint(newPoint);
    }

    private drawBorder(weight = 1): void{

        const point = this.getPoint();
        const size = this.rect.getSize();

        this.canvas.setBlackColor();
        this.canvas.context.fillRect(point.getX() - weight, point.getY() - weight, size.getWidth() + (weight * 2), size.getHeight() + (weight * 2));
    }
}