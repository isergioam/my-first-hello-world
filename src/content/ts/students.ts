import {getAvg} from "./averageService";
/*import logoImg from './content/img/logo_1.png';*/

$('.resultAvg').css('color', '#EE6B01');

const scores: number[] = [90, 75, 60, 99, 94, 30];
const averageScore: number = getAvg(scores);

const messageToDisplay: string = `<b>Average score:</b> ${averageScore}`;

$('.resultAvg').append(messageToDisplay);

/*const img = document.createElement('img');*/
/*img.src = logoImg;*/

/*document.getElementById('imgContainer').appendChild(img);*/