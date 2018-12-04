function fact(n){
    if(n<=1) return 1;
    return n*fact(n-1);
}
//for(var i=1; i<10; i++){
 //   console.log(i+"! = "+ fact(i));
//}
console.log(Math.sqrt(2));
console.log(fact(130))

var sym1 = Symbol("mypet1")
var sym2 = Symbol("mypet2")
console.log(sym1.toString())

var card ={"mine":"Spade A","yours":"Spade B"};
card["third"] = "Spade 9";
console.log(card);
var a=new Date();
console.log('${a.getDate()}');
//console.log("${card["mine"]}");
delete card["third"];
console.log(card);


//####################
var carPosition ={Center:{x:5,y:6},Velocity:60};
console.log(`x value: ${carPosition.Center.x} y value: ${carPosition.Center.y} velocity: ${carPosition.Velocity}`);

function main(center,velocity) {
    this.Center_x = center.x*100;
    this.Velocity = velocity;
    return this.Center_x;
}

console.log(main({x:35,y:22},60));
console.log("It's new");

var a = function aa(x){return function bb(y) {return x+y;};};
console.log(a(5)(2));

function Derivative(f) {
    var h = 1e-06;
    this.f = f;
    this.eval = function(x) {
        return (this.f(x + h) - this.f(x))/ h;
    }
}

sindev = new Derivative(Math.sin);
console.log(sindev.eval(0));

function test(x,y) {
    var param = {
        x: x,
        y: y,
    }
    return param;
}
console.log(test(1,2));

var myJSON = { "name": "Chris", "age": {"x":"38","y":"39"} };
console.log(myJSON);

var myString = JSON.stringify(myJSON);
console.log(myString);

var myJSON2 = JSON.parse(myString);
console.log(myJSON2);

var arr = new Array(4,5,6);
delete arr[0];
arr.pop();
arr.push('hi');
console.log(arr);

function multiples(n){
    var tmp =0;
    for (var i=0; i<n; i++){
        if (i%3 == 0 || i%5 ==0){
            tmp += i;
        }
    }
    return tmp;
}
console.log(multiples(1000))

var circle ={
    center: {x:3,y:3},
    radius: 30,
    area: function(){
        return Math.PI * this.radius **2;
    }
}
console.log(circle.area());
circle.translate = function(a,b){
    this.center.x = this.center.x +a;
    this.center.y = this.center.y +b;
};
circle.translate(3,3);
console.log(circle.center);

//#-------------함수 설정 방법 -----------------//
function card2(x,y){
    this.x = x;
    this.y = y;
    this.center = {x:this.x,y:this.y};
    var a =4;
    this.print = function (){
        return a;
    };
    return a;
}
var c1 = new card2(3,3);
console.log(c1.print());
console.log(card2(3,3));