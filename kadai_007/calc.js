let num = 6;

//3の倍数
if (num % 3 === 0 && num % 15!== 0) {
    console.log('3の倍数です');
}

//5の倍数
else if (num % 5 === 0 && num % 15!== 0) {
    console.log('5の倍数です');
}

//3と5の倍数 
else if (num % 3 === 0 && num % 5 === 0) {
    console.log('3と5の倍数です');
}

//それ以外
else {
    console.log(num);
}

