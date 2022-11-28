// 출력하는 데이터의 형식은 같으나 여러 개의 데이터를 출력하기 위해
// 함수로 데이터를 전달하는 형태를 매개변수라고 함

function printFruit(name){
    console.log(name);
}
printFruit("banana");
printFruit("apple")


function printtxt(txt){
    console.log(txt + " 반갑습니다.");
}
printtxt("안녕하세요");


function printsell(food, sell){//직접 해본 거
    console.log(food + "의 가격은: " + sell + "원 입니다.");
}
printsell("바나나", 5000)


function printFruitArr(arr){
    console.log(arr[0]+"는 "+ arr[1] +"원 입니다.");
}
printFruitArr(['banana', 2000]);


function printFruitObj(obj){
    console.log(obj.name +"은 "+ obj.price +"원 입니다.");
}
printFruitObj({name:'apple', price:3000});


