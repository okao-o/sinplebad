// シーンを読み込む
import TitleScene from "./scenes/TitleScene.js";
import GameScene from "./scenes/GameScene.js";

// Phaserの設定
const config = {
    type: Phaser.AUTO,

    width: 1280,
    height: 720,

    parent: "game-container",

    backgroundColor: "#87CEEB",

    scene: [
        TitleScene,
        GameScene
    ]
};

// ゲーム生成
new Phaser.Game(config);
