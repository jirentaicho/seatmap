import ViewRect from "./ViewRect";

/**
 * 画像をレンダリングします。
 * →画像ファイルは予めフォルダの中身を全ロードしておきます。
 */
export default class ViewSprite extends ViewRect{
    protected imageSrc : string;

    public constructor(x = 0, y = 0, w = 0, h = 0, src = ""){
        super(x,y,w,h);
        this.imageSrc = src;
    }

    override draw(): void{
        
    }
}