export default class TitleScene extends Phaser.Scene {

    constructor() {
        super("TitleScene");
    }

    create() {

        // タイトル文字
        this.add.text(
            450,
            300,
            "Simple Badminton",
            {
                fontSize: "48px",
                color: "#ffffff"
            }
        );

        // 説明文
        this.add.text(
            470,
            400,
            "Click or Press Any Key",
            {
                fontSize: "24px",
                color: "#ffffff"
            }
        );

        // 一度だけクリックでゲーム画面へ移動
        this.input.once("pointerdown", () => {

            this.scene.start("GameScene");

        });

        // 一度だけキー入力でゲーム画面へ移動
        this.input.keyboard.once("keydown", () => {

            this.scene.start("GameScene");

        });

    }

}
