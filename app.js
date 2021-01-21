'use strict'
function Product(name ,source) {
    this.name = name;
    this.source = source;
    this.vote = 0;
    this.view = 0;
    Product.prototype.allProduct.push(this);
    productsName.push(name);
  }
  var productsName=[];
  Product.prototype.allProduct=[];

new Product('bag','img/bag.jpg');
new Product('banana','img/banana.jpg');
new Product('bathroom','img/bathroom.jpg');
new Product('boots','img/boots.jpg');
new Product('breakfast','img/breakfast.jpg');
new Product('bubblegum','img/bubblegum.jpg');
new Product('chair','img/chair.jpg');
new Product('cthulhu','img/cthulhu.jpg');
new Product('dog-duck','img/dog-duck.jpg');
new Product('dragon','img/dragon.jpg');
new Product('pen','img/pen.jpg');
new Product('pet-sweep','img/pet-sweep.jpg');
new Product('scissors','img/scissors.jpg');
new Product('shark','img/shark.jpg');
new Product('tauntaun','img/tauntaun.jpg');
new Product('unicorn','img/unicorn.jpg');
new Product('usb','img/usb.gif');
new Product('water-can','img/water-can.jpg');
new Product('wine-glass','img/wine-glass.jpg');

function randNumGenerator() {
    return  Math.floor(Math.random()*Product.prototype.allProduct.length);


}

var perviousLeftImageIndex= -1;
var perviousRightImageIndex=-1;
var perviousMiddleImageIndex=-1;
var leftImg = document.getElementById('LeftProduct');
var MidImg = document.getElementById('MiddleProduct');
var rightImg = document.getElementById('RightProducte');
var productbox= document.getElementById('productbox');
var showResultButton=document.getElementById('final-result');
var userInput=document.getElementById('form')

var leftImgIndex;
var MidImgIndex;
var rightImgIndex;
var maxClick= 25;
var userClickCounter=0;
var names = [];



function renderThreeRandImg() {
    var forbiddenIndex=[perviousLeftImageIndex,perviousRightImageIndex,perviousMiddleImageIndex]
    do{
        leftImgIndex = randNumGenerator();
        rightImgIndex = randNumGenerator();
        MidImgIndex = randNumGenerator();
    } while (leftImgIndex===rightImgIndex ||leftImgIndex===MidImgIndex||MidImgIndex===rightImgIndex);
    
   
do{
    leftImgIndex = randNumGenerator();
    
} while (forbiddenIndex.includes(leftImgIndex));
  perviousLeftImageIndex=leftImgIndex;
    forbiddenIndex.push(leftImgIndex);
do{
    rightImgIndex = randNumGenerator();

}while (forbiddenIndex.includes(rightImgIndex)) ;
perviousRightImageIndex=rightImgIndex;
   forbiddenIndex.push(leftImgIndex);

do{
    MidImgIndex = randNumGenerator();
}while ( forbiddenIndex.includes( MidImgIndex));
perviousMiddleImageIndex= MidImgIndex
// forbiddenIndex.push(MidImgIndex);

  
leftImg.src=Product.prototype.allProduct[leftImgIndex].source;

Product.prototype.allProduct[leftImgIndex].view++

MidImg.src=Product.prototype.allProduct[MidImgIndex].source;

Product.prototype.allProduct[MidImgIndex].view++

rightImg.src=Product.prototype.allProduct[rightImgIndex].source;

Product.prototype.allProduct[rightImgIndex].view++
}
renderThreeRandImg();

productbox.addEventListener('click',clickByUser);
showResultButton.addEventListener('click',showResult);
userInput.addEventListener('submit',numOfRound);


function clickByUser(event) {
    userClickCounter++;
    
    if(userClickCounter <= maxClick){
        if(event.target.id==='LeftProduct'){
            userClickCounter++;
            Product.prototype.allProduct[leftImgIndex].vote++;
            renderThreeRandImg();
        }
    else if(event.target.id==='MiddleProduct'){
        Product.prototype.allProduct[MidImgIndex].vote++;
        renderThreeRandImg();
    }else if(event.target.id==='RightProducte'){
        userClickCounter++
        Product.prototype.allProduct[rightImgIndex].vote++;
        renderThreeRandImg();

    }else{
    
    productbox.removeEventListener('click',clickByUser);
    showResultButton.disabled=false;
    }
    productStorage () ;

}
}
function showResult() {
var resultList=document.getElementById('final-results');
    var lastResult;
    for (var i = 0; i< Product.prototype.allProduct.length; i++) {

        lastResult=document.createElement('li');
        lastResult.textContent=Product.prototype.allProduct[i].name  + ' was clicked ' +  Product.prototype.allProduct[i].vote + ' times '+   ' and was shown '+ Product.prototype.allProduct[i].view + ' times' + ' The percentage of choosing this product is : '+( Product.prototype.allProduct[i].vote * 100 / Product.prototype.allProduct[i].view)+'%'
        resultList.appendChild(lastResult);
    }

    showChart();
}

function numOfRound(event) {
    event.preventDefault();
    maxClick=event.target.rounds.value;
}

    
    function showChart() {
        var votesArray=[];
        var viewArray=[];

        for (var i = 0; i < Product.prototype.allProduct.length; i++) {
            votesArray.push(Product.prototype.allProduct[i].vote);
            viewArray.push(Product.prototype.allProduct[i].view);
    
        }
    
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            type: 'bar',
    
    
        
            data: {
                labels: productsName,
                datasets: [{
                    label: 'votes',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: votesArray,
                    
    
    
                },
                {
                    label: 'Your view',
                    backgroundColor: 'rgb(0, 0, 0)',
                    borderColor: 'rgb(0, 0, 0)',
                    data: viewArray,
                }
            ]
            },
    
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            max: 10,
                            min: 0,
                            beginAtZero: 0,
                            stepSize: 1,
                        }
                    }],
    
                }
            }
        });
       
    
    
    }
    for (var i = 0; i < Product.prototype.allProduct.length; i++) {
        names.push(Product.prototype.allProduct[i].name);
    }
    
    
    function productStorage (){
        var localStorage =JSON.stringify(Product.prototype.allProduct);
        localStorage.setItem('product',localProduct);
    }
    

    function getTheData (){
        var ProductList =localStorage.getItem('product');
        var jsProductList = JSON.parse(ProductList);
    
        if(jsProductList != null )
        Products.prototype.allProducts = jsProductList ;
    
        console.log(jsProductList);
        productStorage () ;

    }
    getTheData();
    
    
