var item2 = document.querySelector('.item2')
var item3 = document.querySelector('.item3')
var item3_1 = document.querySelector('.item3_1')
var item3_2 = document.querySelector('.item3_2')
var area = document.querySelector('.area')
var animation1 = gsap.timeline();
var countBottle = 4;
var rotation;
var i;
Draggable.create('.item3_2',{
    bounds: area,
    type: 'x,y' , 
    intertia: true,
    onDragStart: function(){
        StartX = this.x;  StartY = this.y;
        animation1.to(".item3_2", {opacity: 1})
                    .to(".item2",{duration: 1, rotation: 270})  
                    .to(".item3_2", {autoAlpha:0})
                
    },
    onDragEnd: function(){
        TweenLite.to( this.target , 1 , { x:StartX , y:StartY})
    }
    
    })

Draggable.create('.item3_1',{
    bounds: area,
    type: 'x,y' , 
    intertia: true,
    onDragStart: function(){
        StartX = this.x;  StartY = this.y;
        animation1.to(".item3_1", {autoAlpha: 1})
                    .to(".item2",{duration: 1, rotation: 180}) 
                    .to(".item3_1",{autoAlpha: 0})
    },
    onDragEnd: function(){
        TweenLite.to( this.target , 1 , { x:StartX , y:StartY})
        setTimeout(function(){
            animation1.to(".item3_2", {opacity: 1})
        },1000)
    }
    
    })

Draggable.create('.item3',{
    bounds: area,
    type: 'x,y' , 
    intertia: true,
    onDragStart: function(){
        StartX = this.x;  StartY = this.y;
        animation1.to(".item2", {duration: 1, rotation: 90})
                .to(".item3", {autoAlpha: 0})       
    },
    onDragEnd: function(){
        TweenLite.to( this.target , 1 , { x:StartX , y:StartY})
        setTimeout(function(){
            animation1.to(".item3_1", {opacity: 1})
        },1000)    
    }
    
    })



