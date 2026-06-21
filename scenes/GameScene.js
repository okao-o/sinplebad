export default class GameScene extends Phaser.Scene {

    constructor() {
        super("GameScene");
    }

    create() {

        // 地面の位置
        const groundY = 650;

        // 地面を長方形で描画
        // x, y, 幅, 高さ, 色
        this.add.rectangle(
            640,
            groundY,
            1280,
            140,
            0x228B22
        );

        // プレイヤー1を長方形で描画
        // 左側に配置
        this.add.rectangle(
            300,    // x座標
            560,    // y座標
            40,     // 幅
            80,     // 高さ
            0x0000ff // 青色
        );

        // プレイヤー1のラベル
        this.add.text(
            270,
            500,
            "P1",
            {
                fontSize: "24px",
                color: "#ffffff"
            }
        );

        // 仮の文字
        this.add.text(
            500,
            100,
            "Game Scene",
            {
                fontSize: "48px",
                color: "#ffffff"
            }
        );

    }

}
