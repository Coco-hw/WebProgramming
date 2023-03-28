function printPyramid(numRows) {
    for (var i = 1; i <= numRows; i++) {
      var row = '';
      // 왼쪽 공백 추가
      for (var j = 1; j <= (numRows - i); j++) {
        row += ' ';
      }
      // 별 추가
      for (var k = 1; k <= 2 * i - 1; k++) {
        row += '*';
      }
      // 오른쪽 공백 추가
      for (var l = 1; l <= (numRows - i); l++) {
        row += ' ';
      }
      console.log(row);
    }
  }
  
  // 실행
  printPyramid(5);
  