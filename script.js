
const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ,0, 'A' , 'B' , 'C' , 'D' , 'E' , 'F'];

const paletteColors = document.querySelectorAll(".color");

const generateBtn = document.getElementById("generate");

//adding colors - calling func

addColorsToPage();


//add the event to copy 
paletteColors.forEach((color)=>{
    color.addEventListener('click', copyToClipboard);
});

generateBtn.addEventListener('click', addColorsToPage);


function addColorsToPage(){
    paletteColors.forEach((color) => {


        const randomColor = generateColor();
        const p = color.querySelector('p');
        const innerColor = color.querySelector('.inner_color');

        p.innerHTML = randomColor;

        innerColor.style.background =
         randomColor;
    });
  
}

function copyToClipboard(e){
    


    const { target } = e;
    console.log(e);
    
    let color = '';

    if(target.tagName === 'P'){
        color = target.innerHTML;
    }
    else if(target.classList.contains('color')){
        color = target.querySelector('p').innerHTML;
    }
    else{
        color = target.parentNode.querySelector('p').innerHTML;
    }

    //create a textarea
    const textarea = document.createElement('textarea');
    //add the value
    textarea.value = color;
    // add to dom
    document.body.appendChild(textarea);
    //select the value
    textarea.select();
    //execComand('copy')
    document.execCommand('copy');
    //removeText area
    textarea.remove();

    //success message
    const message = document.createElement('div');
    message.classList.add('message');
    message.innerText ='Sucessfully copied to clipboard';
    
    document.body.appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 3000)

}

function generateColor(){
    const arrColors = [];

    for ( let i=0; i<6 ; i++){
        const randomColor = colors[Math.floor(Math.random()* colors.length)];

        arrColors.push(randomColor);
    }

    return `#${arrColors.join('')}`;
}

