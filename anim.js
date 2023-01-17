document.getElementById('circle1').addEventListener('mouseover', scaleUp1);
document.getElementById('circle2').addEventListener('mouseover', scaleUp2);
document.getElementById('circle3').addEventListener('mouseover', scaleUp3);

document.getElementById('circle1').addEventListener('mouseout', scaleDown1);
document.getElementById('circle2').addEventListener('mouseout', scaleDown2);
document.getElementById('circle3').addEventListener('mouseout', scaleDown3);

// ============================================================== //

function scaleUp1(){
    document.getElementById('circle1').classList.add('change1');
}

function scaleUp2(){
    document.getElementById('circle2').classList.add('change2');
}

function scaleUp3(){
    document.getElementById('circle3').classList.add('change3');
}

// ================================================================ //

function scaleDown1(){
    document.getElementById('circle1').classList.remove('change1');
}

function scaleDown2(){
    document.getElementById('circle2').classList.remove('change2');
}

function scaleDown3(){
    document.getElementById('circle3').classList.remove('change3');
}

// ===============================================

// let a = 'kszdonf'
// let b = {
//     Kavish : 'kombish',
//     Anirban : 'banboy',
//     Kajal : 'baby'
// }

// let c = ['anirban', 'kajal', 'indrani', 'verma']

// let d = []
// for(let i = 0; i<4; i++)
// {
//     d.push(c[i].toUpperCase())
// }

// for( let name in b )
// {
//     console.log(b[name])
// }

// for( let name of b )
// {
//     console.log(name)
// }

// b.forEach( (boo)=>{console.log(boo)} )


// d = c.map( (boo) =>{return boo.toUpperCase()} )

// let d = c.filter( (boo) =>{if(boo.includes('ni')){return true}} )
// console.log(d)


// let arr = [1,2,3,4]
// let squarearray = []

// function doSquare(num){
//     return num*num
// }

// for(let i = 0; i<4;i++)
// {
//     squarearray.push(doSquare(arr[i]))
// }

// let squarearray = arr.map( (boo)=>{return doSquare(boo)} )

// console.log(squarearray)

// let a = new Map()

// a.add('hemlo', )
// a.add('hemlo')

// console.log(a)

// =================================================

function change()
{
    
}