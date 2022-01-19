import { Mode } from "./Type/Mode";

export default class CurrentMode{
    // publicを注意して扱う
    public static mode : Mode = Mode.Normal;

    public static setMode(mode: Mode){
        this.mode = mode;
    }
}