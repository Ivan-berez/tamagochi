class Cat
{
    constructor(food){
        this.food = food;
    }

    feed(){
        this.food += 10;
        if(this.food >= 100){
            this.food = 100;
        }
    }

    checkState(){
        if(cat.food > 50){
            document.querySelector('.pet_img').src = 'https://polinka.top/uploads/posts/2023-05/1685469078_polinka-top-p-kartinka-s-visunutim-yazikom-draznilka-kra-16.jpg'
        } else{
            document.querySelector('.pet_img').src ='https://uroki-risovanie.ru/wp-content/uploads/2022/11/grustnyy-smayl.png'
        }

        document.querySelector('.food').textContent = cat.food;
    }
}


const cat = new Cat(100);

let intervalId = setInterval(()=>{
    cat.food -= Math.floor(Math.random()* 20);
    if (cat.food <= 0 ){
        cat.food = 0;
        clearInterval(intervalId);
    }
    
    cat.checkState();
    console.log(cat)
}, 3000);

document.querySelector('.feed').addEventListener('click',()=>{
    cat.feed();
})
