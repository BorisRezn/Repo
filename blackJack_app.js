let buttonStart = document.querySelector('#buttonStart');
let header = document.querySelector('#header');
let StartImage = document.querySelector('#StartImage');
let hidden = document.querySelector('#hidden');

let hiddenrules = document.querySelector('#hiddenrules');

let dealScore =document.querySelector('#dealScore');
let gamerScore = document.querySelector('#gamerScore');
let dealPack =document.querySelector('#dealPack');
let gamerPack = document.querySelector('#gamerPack');

let startCard= document.querySelector('#startCard');
let moreCard= document.querySelector('#moreCard');
let gameMessage = document.querySelector('#gameMessage');
let deny = document.querySelector('#deny');

let cardPicGamer1 = document.querySelector('#cardPicGamer1');
let cardPicGamer2 = document.querySelector('#cardPicGamer2');
let cardPicGamer3 = document.querySelector('#cardPicGamer3');
let cardPicGamer4 = document.querySelector('#cardPicGamer4');
let cardPicDealer1 = document.querySelector('#cardPicDealer1');
let cardPicDealer2 = document.querySelector('#cardPicDealer2');
let cardPicDealer3 = document.querySelector('#cardPicDealer3');
let cardPicDealer4 = document.querySelector('#cardPicDealer4');

//показ правил по запросу

var flag =1;

rulesButton.addEventListener('click', function() {
	if (flag==1) {
	hiddenrules.classList.remove('hiddenrules');
	document.getElementById('rulesButton').value = 'Убрать правила';
	flag = 0;
	}
	else if (flag==0) {
	hiddenrules.classList.add('hiddenrules');
	document.getElementById('rulesButton').value = 'Уточнить правила';
	flag = 1;	
	}

});

// обработка начала игры

buttonStart.addEventListener('click', function() {
		header.classList.add('hidden');  
		StartImage.classList.add('hidden');
		hidden.classList.remove('hidden');
		startCard.classList.remove('hidden');
		hiddenrules.classList.add('hiddenrules');

	});

// обработка первой раздачи карт

startCard.addEventListener('click', funcStart); 
function funcStart() {
	document.getElementById('gamerPack').innerHTML = GamerArray;
	document.getElementById('gamerScore').innerHTML = SumCards(GamerArray);
	document.getElementById('dealPack').innerHTML = DealerArray;
	document.getElementById('dealScore').innerHTML = SumCards(DealerArray);
	deny.classList.remove('hidden');
	moreCard.classList.remove('hidden');
	startCard.classList.add('hidden');
	this.removeEventListener('click', funcStart);


// цикл для подбора и подставления изображений карт

	let cardArray = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'D', 'K', 'A'];
	let imgArray = ["img/img_2.jpg", "img/img_3.jpg", "img/img_4.jpg", "img/img_5.jpg", "img/img_6.jpg", "img/img_7.jpg", "img/img_8.jpg", "img/img_9.jpg", "img/img_10.jpg", "img/img_J.jpg", "img/img_D.jpg", "img/img_K.jpg", "img/img_A.jpg"];
	let imgArray_1 = ["img_1/img_2.jpg", "img_1/img_3.jpg", "img_1/img_4.jpg", "img_1/img_5.jpg", "img_1/img_6.jpg", "img_1/img_7.jpg", "img_1/img_8.jpg", "img_1/img_9.jpg", "img_1/img_10.jpg", "img_1/img_J.jpg", "img_1/img_D.jpg", "img_1/img_K.jpg", "img_1/img_A.jpg"];		
	let imgArray_3 = ["img_3/img_2.jpg", "img_3/img_3.jpg", "img_3/img_4.jpg", "img_3/img_5.jpg", "img_3/img_6.jpg", "img_3/img_7.jpg", "img_3/img_8.jpg", "img_3/img_9.jpg", "img_3/img_10.jpg", "img_3/img_J.jpg", "img_3/img_D.jpg", "img_3/img_K.jpg", "img_3/img_A.jpg"];
		
		for (i=0; i<cardArray.length; i++) {
			if (cardArray[i] == GamerArray[0]) {
			document.getElementById('cardPicGamer1').src = imgArray[i];
			} 
		}	
		for (l=0; l<cardArray.length; l++) {
			if (cardArray[l] == GamerArray[1]) {
			document.getElementById('cardPicGamer2').src = imgArray_1[l];
			} 
		}
		for (j=0; j<cardArray.length; j++) {
			if (cardArray[j] == DealerArray[0]) {
			document.getElementById('cardPicDealer1').src = imgArray_3[j];
			} 
		}

// Если первые две карты сразу выдали 21

	GamerSumm = SumCards(GamerArray);
	if (GamerSumm == 21) {
		document.getElementById('gameMessage').innerHTML = "21, банк пробует сравнять"
		moreCard.removeEventListener('click', funcGame);
		}
}
	

// обработка последующих раздач карт

moreCard.addEventListener('click', funcGame);
function funcGame() {
	GamerArray.push(GetCard());
	GamerSumm = SumCards(GamerArray);
	document.getElementById('gamerPack').innerHTML = GamerArray;
	document.getElementById('gamerScore').innerHTML = SumCards(GamerArray);


// цикл для подбора и подставления изображений карт

	let cardArray = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'D', 'K', 'A'];
	let imgArray_2 = ["img_2/img_2.jpg", "img_2/img_3.jpg", "img_2/img_4.jpg", "img_2/img_5.jpg", "img_2/img_6.jpg", "img_2/img_7.jpg", "img_2/img_8.jpg", "img_2/img_9.jpg", "img_2/img_10.jpg", "img_2/img_J.jpg", "img_2/img_D.jpg", "img_2/img_K.jpg", "img_2/img_A.jpg"];
	let imgArray_3 = ["img_3/img_2.jpg", "img_3/img_3.jpg", "img_3/img_4.jpg", "img_3/img_5.jpg", "img_3/img_6.jpg", "img_3/img_7.jpg", "img_3/img_8.jpg", "img_3/img_9.jpg", "img_3/img_10.jpg", "img_3/img_J.jpg", "img_3/img_D.jpg", "img_3/img_K.jpg", "img_3/img_A.jpg"];

	for (v=0; v<cardArray.length; v++) {
		if (cardArray[v] == GamerArray[2]) {
		document.getElementById('cardPicGamer3').src = imgArray_2[v];
		} 
	}
	
	for (h=0; h<cardArray.length; h++) {
		if (cardArray[h] == GamerArray[3]) {
		document.getElementById('cardPicGamer4').src = imgArray_3[h];
		} 	
	}

// переходы по набранным очкам

	if (GamerSumm > 21) {
		document.getElementById('gameMessage').innerHTML = "перебор, банк выиграл"
		this.removeEventListener('click', funcGame);
		}
		else if (GamerSumm == 21) {
		document.getElementById('gameMessage').innerHTML = "21, банк пробует сравнять"
		this.removeEventListener('click', funcGame);
		
	}
}

// функция при передаче игры банку(дилеру)

deny.addEventListener('click', funcDeny);
function funcDeny() {
	GamerSumm = SumCards(GamerArray);
	DealerSumm = SumCards(DealerArray);
	moreCard.classList.add('hidden');
	deny.classList.add('hidden');


// переходы по набранным очкам

	if (GamerSumm > 21) {
		document.getElementById('gameMessage').innerHTML = "банк выиграл"
	}
	else
		document.getElementById('gameMessage').innerHTML = "ИГРАЕТ Банк"

		if (GamerSumm <22) {
		document.getElementById('dealPack').innerHTML = DealerArray;
		document.getElementById('dealScore').innerHTML = SumCards(DealerArray);

			while (DealerSumm < 17) 	{
			DealerArray.push(GetCard());
			DealerSumm = SumCards(DealerArray);
			}

			document.getElementById('dealPack').innerHTML = DealerArray;
			document.getElementById('dealScore').innerHTML = SumCards(DealerArray);

// цикл для подбора и подставления изображений карт
		let cardArray = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'D', 'K', 'A'];
		let imgArray   = ["img/img_2.jpg", "img/img_3.jpg", "img/img_4.jpg", "img/img_5.jpg", "img/img_6.jpg", "img/img_7.jpg", "img/img_8.jpg", "img/img_9.jpg", "img/img_10.jpg", "img/img_J.jpg", "img/img_D.jpg", "img/img_K.jpg", "img/img_A.jpg"];
		let imgArray_1 = ["img_1/img_2.jpg", "img_1/img_3.jpg", "img_1/img_4.jpg", "img_1/img_5.jpg", "img_1/img_6.jpg", "img_1/img_7.jpg", "img_1/img_8.jpg", "img_1/img_9.jpg", "img_1/img_10.jpg", "img_1/img_J.jpg", "img_1/img_D.jpg", "img_1/img_K.jpg", "img_1/img_A.jpg"];
		let imgArray_2 = ["img_2/img_2.jpg", "img_2/img_3.jpg", "img_2/img_4.jpg", "img_2/img_5.jpg", "img_2/img_6.jpg", "img_2/img_7.jpg", "img_2/img_8.jpg", "img_2/img_9.jpg", "img_2/img_10.jpg", "img_2/img_J.jpg", "img_2/img_D.jpg", "img_2/img_K.jpg", "img_2/img_A.jpg"];


		for (k=0; k<cardArray.length; k++) {
			if (cardArray[k] == DealerArray[1]) {
			document.getElementById('cardPicDealer2').src = imgArray_2[k];
			} 
		}
		for (w=0; w<cardArray.length; w++) {
			if (cardArray[w] == DealerArray[2]) {
			document.getElementById('cardPicDealer3').src = imgArray_1[w];
			}
		} 
		for (s=0; s<cardArray.length; s++) {
			if (cardArray[s] == DealerArray[3]) {
			document.getElementById('cardPicDealer4').src = imgArray[s];
			}
		} 



		if (DealerSumm > 21) {
		document.getElementById('gameMessage').innerHTML = "у банка перебор, вы выиграли"
		}
		else if (DealerSumm > GamerSumm) {
		document.getElementById('gameMessage').innerHTML = "банк выиграл"	
		}
		else if (DealerSumm == GamerSumm) {
		document.getElementById('gameMessage').innerHTML = "РОВНО"		
		}
		else 
		document.getElementById('gameMessage').innerHTML = "Вы выиграли"		
	}

}


let cardArray = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'D', 'K', 'A'];



function GetCard() {
	a = Math.floor(Math.random()*(13-0));
	b = cardArray[a];
	return (b);
}

let DealerArray = [GetCard()];
let GamerArray = [GetCard(), GetCard()];


function SumCards(arr) {
	var summ = 0;
	let aces = 0;

	for (let elem of arr) {
	if (elem < 11) {
		summ = (summ+ +elem);
	} else
	if (elem == 'J' || elem =='D' || elem == 'K') {
		summ = (summ +10);
	} else
	aces++;
	}

	if (aces > 0) {
		if (summ + 11 +(aces-1) <= 21) {
			summ = (summ +10 + aces);
		} else
			summ = (summ + aces);
	}

	return summ;
	}


function getPic() {



}

