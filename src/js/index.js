import '../styles/main.css';
import MainScene from '../../app/view/MainScene'

window.onload = () => {
  cc.game.onStart = () => {
      //load resources
      cc.LoaderScene.preload(["./assets/HelloWorld.png"], () => cc.director.runScene(new MainScene()), this);
  };
    
    cc.game.run('gameCanvas')
  };
