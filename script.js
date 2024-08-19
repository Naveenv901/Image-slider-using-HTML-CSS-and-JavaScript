const slider=document.querySelector('.slider')
const btn=document.querySelectorAll(".btn");
const img=["image1.png","image2.png","image3.png","image4.png","image5.png","image6.png"]
var index=0;
btn.forEach((button) =>{
    button.addEventListener('click',()=>{
        console.log("clicked")
        if(button.classList.contains('left')){
            index--;
            
            if(index<0){
                index=img.length-1;
                
            }
            console.log(index);
           
        }
        else{
            index++;
            if(index==img.length){
                index=0;
            }
            console.log(index);
           
        }
        slider.style.backgroundImage = `url("${img[index]}")`;
    })
})