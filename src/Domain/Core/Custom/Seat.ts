import Point from "../Point";
import ViewRect from "../ViewObject/ViewRect";
import ViewText from "../ViewObject/ViewText";

/**
 * 自分でコアを継承した新しいViewRectクラスを作成する場合
 * 
 */
export default class Seat extends ViewRect{

    private text: ViewText;

    private textMargin = 3.5;

    private textLingHeight = 2;

    //publicを注意して扱う
    public rectInfo = {
        backgroundColor: "#fff",
        borderColor: "#000",
        borderWeight: 1,
    }
 
    public constructor(x = 0, y = 0, w = 200, h = 200, text = ""){
        super(x,y,w,h);
        //中央に表示するようにする？描画時に指定したほうが良さそう
        this.text = new ViewText(text,x,y);
        this.setTextPosition();
    }

    override draw(): void {
        // 利用するパラメータはスタック変数に置いておく
        const point = this.getPoint();
        const size = this.rect.getSize();

        this.drawBorder(this.rectInfo.borderWeight);
        this.canvas.setColor(this.rectInfo.backgroundColor);
        this.canvas.context.fillRect(point.getX(), point.getY(), size.getWidth(), size.getHeight());

        this.setTextPosition();
        this.text.draw();
    }

    /**
     * テキストに関する情報を設定します
     */
    public setFontInfo(size: number): void {
        this.text.textInfo.fontSize = size;
    }


    /**
     * シートレクトが保有するTextの位置という意味で責務をここに持たせています。
     */
    private setTextPosition(): void {
        const point = this.getPoint();
        const size = this.rect.getSize();
        const newPoint = new Point(point.getX() + this.textMargin , point.getY() + (size.getHeight() / this.textLingHeight) );
        this.text.setPoint(newPoint);
    }

    private drawBorder(weight = 1): void{

        const point = this.getPoint();
        const size = this.rect.getSize();

        this.canvas.setColor(this.rectInfo.borderColor);
        this.canvas.context.fillRect(point.getX() - weight, point.getY() - weight, size.getWidth() + (weight * 2), size.getHeight() + (weight * 2));
    }
}