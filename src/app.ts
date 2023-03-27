import { SimpleGame, config } from './game';

window.onload = () => {
    document.getElementsByTagName('body')[0].style.margin = '0px'
    const game = new SimpleGame(config);
};