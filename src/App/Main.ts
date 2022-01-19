import Layer from '../Domain/Core/Layer';
import BootStrap from './../bootstrap/BootStrap';
import Seat from '../Domain/Core/Custom/Seat';
import Controller from '../Domain/Core/UI/Controller';
import Logic from './Event/Logic';
import EventButton from '../Domain/Core/Custom/EventButton';
import Canvas from '../Domain/Core/Canvas';
import { ButtonType } from '../Domain/Core/Custom/ButtonType';

class Main{

    public init(): void{
        // アセットの事前読込などを行う
        const bootstrap = new BootStrap();

        // ここはbootstrapに収める
        const controller = Controller.getInstance();
        // controller.setup();
        // 必要となるイベントの設定などを行う
        controller.addDownEvent(Logic.moveDownRect);
        controller.addUpEvent(Logic.moveUpRect);
        controller.addMoveEvent(Logic.drawMoveObject);
        controller.addDownEvent(Logic.openAddButtonLogic);
        controller.addDownEvent(Logic.deleteButtonLogic);
        controller.addDownEvent(Logic.deleteLogic);
        // controller.addDownEvent(Logic.checkAddButtonLogic);

        // ここを適切な所に振り分ける
        const addBtn = (<HTMLElement>document.getElementById("addSeatButton"));
        addBtn.addEventListener("click",Logic.checkAddButtonLogic);
    
        const canvas = Canvas.getInstance();

        // Layerはsingletonにして好きなように取得できるようにする
        const layer = Layer.getInstance();
        layer.addChild(
            new Seat(300,300,90,90,"澁谷かのん"),
            new EventButton(canvas.width - 51 , 2, 50, 50, "追加", ButtonType.Add),
            new EventButton(canvas.width - 51 , 62, 50, 50, "削除", ButtonType.Delete),
            );
        layer.drawNode();

    }
}


/**
 * 処理の最初
 */
window.onload = () => {
    const main = new Main();
    main.init();
}