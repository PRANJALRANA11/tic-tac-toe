let box=document.getElementsByClassName('box')
let reset=document.querySelector('.reset')
let turn="X";
let gameover=false;
const changeTurn=()=>{
    return turn==='X'?'0':"X"
}
const checkwin=()=>{
    let boxcont=document.getElementsByClassName('boxcontent');
    let wins=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    wins.forEach(e=>{
        if ((boxcont[e[0]].innerText===boxcont[e[1]].innerText)&&(boxcont[e[1]].innerText===boxcont[e[2]].innerText)&&(boxcont[e[0]].innerText!=='')) {
            document.querySelector('.info').innerText=boxcont[e[0]].innerText+'won' 
            gameover=true;
        }
    })
}
Array.from(box).forEach(element => {
    let boxcont=element.querySelector('.boxcontent');
    element.addEventListener('click',()=>{
        if (boxcont.innerText==='') {
            boxcont.innerText=turn;
            turn=changeTurn();
            document.querySelector('.info').innerText="turn for"+turn;
            checkwin(); 
        }
    })    
});
reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.boxcontent')
    Array.from(boxtext).forEach(elem=>{
        elem.innerText=""
    })
})