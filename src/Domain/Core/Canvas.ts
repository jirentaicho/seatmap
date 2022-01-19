export default class Canvas{
    
    private static instance : Canvas;

    // publicなので注意して利用すること
    public canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D;
    public width: number = window.innerWidth;
    public height: number = window.innerHeight;

    private constructor(){
        // TODO 設定ファイルの値を読込でIDの指定を行う
        this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.context = <CanvasRenderingContext2D>this.canvas.getContext("2d");
    }

    /**
     * Canvasのインスタンスを取得します。
     * 
     * @returns Canvas (singleton)
     */
    public static getInstance(): Canvas{
        if(!Canvas.instance){
            Canvas.instance = new Canvas();
        }
        return Canvas.instance;
    }

    /**
     * canvasをクリアします。
     */
    public clear(): void{
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    }
    
    public setColor(color: string): void{
        this.context.fillStyle = color;
    }

    public setRedColor(): void{
        this.context.fillStyle = "red";
    }

    public setWhiteColor(): void{
        this.context.fillStyle = "white";
    }

    public setBlackColor(): void{
        this.context.fillStyle = "black";
    }

    public setBlueColor(): void{
        this.context.fillStyle = "blue";
    }

    
    public fillRect(): void{
        
    }

}