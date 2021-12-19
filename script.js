// var answer = +prompt('Введите свой возраст')

// if (answer >= 0 && answer <=18) {
//     alert('вы ще молоды.вам надо еще учиться!');
    
// }else if (answer > 18 && answer <=50) {
//     alert('вам нужно работать');
// }else if(answer > 50 && answer <=59){
//     alert('Вам пора на пенсию');
// }else if(answer > 59 && answer <= 150){
//     alert('вы пенсионер');
// }else if(answer > 150 && answer <=Infinity){
//     alert('Что то пошло не так');
// }


// var watch = +prompt ('введите время');
// switch (watch) {
//     case 1:
//         alert('1 час');
//         break;
//     case 2:
//         alert('2 часа');
//         break;
//     case 3:
//         alert('3 часа');
//         break;
//     case 4:
//         alert('4 часа');
//         break;
//     case 5:
//         alert('5 часов');
//         break;
//     case 6:
//         alert('6 часов');
//         break;
//     case 7:
//         alert('7 часов');
//         break;
//     case 8:
//         alert('8 часов');
//         break;
//     case 9:
//         alert('9 часов');
//         break;
//     case 10:
//         alert('10 часов');
//         break;
//     case 11:
//         alert('11 часов');
//         break;
//     case 12:
//         alert('12 часов');
//         break;
//     case 13:
//         alert('13 часов');
//         break;
//     case 14:
//         alert('14 часов');
//         break;
//     case 15:
//         alert('15 часов');
//         break;
//     case 16:
//         alert('16 часов');
//         break;
//     case 17:
//         alert('17 часов');
//         break;
//     case 18:
//         alert('18 часов');
//         break;
//     case 19:
//         alert('19 часов');
//         break;
//     case 20:
//         alert('20 часов');
//         break;
//     case 21:
//         alert('21 час');
//         break;
//     case 22:
//         alert('22 часа');
//         break;
//     case 23:
//         alert('23 часа');
//         break;
//     case 24:
//         alert('полночь');
//         break;
//      default:
//          alert('Вы ввели неправильно');
// }
  var a = +prompt ('введите первое число');
  var b = +prompt ('введите второе число');
  var c = +prompt ('введите третье число');
   
  if(a < b && b < c) {
   alert('среднее число ' + b);
  }else if(a < c && c < b) {
    alert('среднее число ' + с) 
  }else if(b < a && a < c) {
    alert('среднее число ' + a);
  }else if(b < c && c < a) {
    alert('среднее число ' + c);
  }else if(c < a && a < b) {
    alert('среднее число ' + a);
  }else if(c < b && b < a) {
   alert('среднее число ' + b);
  }else{
    alert('что то не так');
  }
 
    