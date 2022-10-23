//1 Отфильтруйте отрицательные элементы в массиве, оставив только положительные

const arr = [1,2,3,4,-6,10,-5,78, 100, 150];
const result = arr.filter(item => item < 0);
console.log(result);

//2 Найдите сумму элементов массива которые меньше 100 по значению


const res = arr.reduce(function(sum, elem) {
	if (elem < 100) {
		return sum + elem;
	} else {
		return sum;
	}
});

console.log(res);

//3 Уменьшите каждый элемент массива на 3%


arr.forEach(function(num, i, nums) {
    console.log(num * 0.03); 

  });


  // 4 Если все элементы массива меньше 100 увеличьте их на 5%


 let arr2 = [120, 500, 800, 103];

function task4(arr) {
	const isGreaterHundred = arr.every( elem => elem > 100);
	if(isGreaterHundred){
		return arr.map(el => el * 0.05)
	}else {
		return arr
	}

}

console.log(task4(arr2))

// 5 Проверьте является ли слово палиндромом (например слово abcddcba подходит т.к. оно "зеркальное")


function isPalindrom (str) {
	return str == str.split('').reverse().join('');
  }
 

console.log(isPalindrom('угу'));

// 6 Соедините две строки в одну и переверните наоборот

const worlds = 'Привет';
const worlds2 = 'Кевин,  удачного дня.';
console.log(worlds.concat(' ',worlds2).split("").reverse().join(""));

// 7 Напишите функцию, которая преобразует первую букву каждого слова строки в верхний регистр.


function task7(str) {
	let arr = str.toLowerCase().split(" ");
	let arr2 = arr.map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(" ");
	return arr2; 
  };
  
  console.log(task7("Перевод строки/буквы в верхний регистр"));

  // 8 Вывести индексы минимальных элементов массива

  