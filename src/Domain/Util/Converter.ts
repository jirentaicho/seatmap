import Point from "../Core/Point";

export default class Converter{
    
    public static toPoint(e: MouseEvent | TouchEvent): Point{
        let x = 0;
        let y = 0;
                
        if(e.type=="mousedown" || e.type == "mouseup" || e.type == "mousemove"){

            x = (e as MouseEvent).clientX;
            y = (e as MouseEvent).clientY;

        } else if (e.type=="touchstart" || e.type == "touchend"){

            x = (e as TouchEvent).changedTouches[0].clientX;
            y = (e as TouchEvent).changedTouches[0].clientY;

        }

        return new Point(x,y);
    }

    /**
     * Grid移動変換させます。
     */
    public static toGrid(point : Point) : Point{
        /**
         * (1,1)(2,1)(3,1)
         * (1,2)(2,2)(3,2)
         * (1,3)(2,3)(3,3)
         * 
         * mouseのポジションから座標を取得して
         * 座標に1マス分の長さをかけてあげれば良い。
         * 
         * 例：１マス１６ｐｘの座標で考える場合
         * 
         * マウス座標(340,560) → グリッド座標 割り算して余りを切り捨て
         * １マスぶんでかける
         * 
         * 大きめにとって見た目より操作性を重視します
         * 
         */
        const x = Math.floor(point.getX() / 10);
        const y = Math.floor(point.getY() / 10);

        return new Point(x * 10, y * 10);

    }
}