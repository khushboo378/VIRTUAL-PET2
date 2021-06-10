class Food{
constructor(foodStock,lastFed){
    this.image=loadImage("images/Milk.png")
    this.foodStock=foodStock
   
}

getFoodStock(){
//To get more food stock
foodS+=1
}

updateFoodStock(sto){
//Update the food stock
database.ref("/").update({
    foodStock:sto
})

}

detuctFoodStock(){
    //Keep track of the food stock left
    foodS-=1
}

display(){
var x=100, y=100



imageMode(CENTER)
image(this.image,100,100,30,40)

if(this.foodStock!==0){
for(var i=0;i<this.foodStock;i++){
if(i%10===0){
x=20
y=y+10
}
image(this.image,x,y,30,40)
x=x+10
}
}

//feedPet.mousePressed(function (){
//this.image.hide()
    
//})

}




}