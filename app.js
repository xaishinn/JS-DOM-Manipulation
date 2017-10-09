console.log('Hey, this stuff actually works.');

let pTag = 
document.createElement('p')
let pTag2 = 
document.createElement('p')
let section =
document.getElementsByClassName('info')[0]


pTag.innerText = 'moose'
pTag2.innerText = 'manatee'

section.append(pTag,pTag2)


var arr = ['moose', 'cheetah', 'manatee', 'kangaroo']

for (var i=0; i<arr.length; i++){
    let sec = document.getElementsByClassName('info')[0];
    let pTg = document.createElement('p');

    pTg.append(arr[i]+ '');
    sec.append(pTg);   
}

let button = document.getElementsByClassName('button')[0]

button.addEventListener('click', (event) => {
    // console.log(event.target.classList[1]);
    
    event.preventDefault();
    event.target.classList.remove('blue')
    event.target.className += ' black'
    
    // button.style.color = 'red';
    // button.style.backgroundColor = 'black';
})