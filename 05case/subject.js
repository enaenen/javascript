let arg = prompt("값을 입력해주세요.");
switch (arg) {
  case 'asdf':
  case 'zzzz':
    alert( '0이나 1을 입력하셨습니다.' );
    break;

  case 'll':
    alert( '2를 입력하셨습니다.' );
    break;

  case 'mm':
    alert( '이 코드는 절대 실행되지 않습니다!' );
    break;
  default:
    alert( '알 수 없는 값을 입력하셨습니다.' );
}