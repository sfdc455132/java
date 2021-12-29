//let email = 'jerry@gmail.com';
//console.log(email);
//console.log(typeof (email));
//console.log(email.length);
//console.log(email + '.tw');
//console.log(email[email.length - 1])
//console.log(email.toUpperCase());
//console.log(email.toLowerCase());
//console.log(email.indexOf('@'));
//console.log(email.lastIndexOf('m'));
//console.log(email.substring(0, 5));
//console.log(email.replace('jerry', 'mario'));
//console.log(email.includes('jerry'));
//console.log('jerry' == 'jerry1');

//for (let i = 0; i < email.length; i++) {
//console.log(i, email[i])

// const start = 1;
// const end = 49;
// let straa = '';
// let stra = 0;
// let number = 0;
// let table = `<table border="1"><thead>
//     <th>期數</th>
//     <th>1</th>
//     <th>2</th>
//     <th>3</th>
//     <th>4</th>
//     <th>5</th>
//     <th>6</th>
// </thead><tbody>`

// for (let j = 0; j < 10; j++) {
//     table += (`<tr><td>${j + 1}</td>`)
//     straa = ''
//     for (let i = 0; i < 6; i++) {
//         number = Math.floor(Math.random() * (end - start + 1) + start);
//         stra = `第${i + 1}個號碼:${number}`
//         //console.log(stra);
//         straa += (number + ' ')
//         table += `<td>${number}</td>`
//     }
//     //console.log(`第${j + 1}組號碼為:${straa}`)
//     //document.write(`<h2>第${j + 1}組號碼為:${straa}</h2>`)


//     table += `</tr>`

// };
// table += `</tbody></table>`
// document.write(table)
// let students = [
//     ['jerry', 78, 67, 89],
//     ['mary', 100, 99, 88],
//     ['kevin', 77, 99, 77],
// ];

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i])
//     const scores = students[i].slice(1, students[i].length)
//     console.log(scores)
//     let total = 0
//     for (let j = 0; j < scores.length; j++) {
//         console.log(scores[j])
//         total += scores[j]
//     }
//     console.log(total)
//     console.log((total / 3).toFixed(2))
// }



//const PI = 3.1415926;
//let radius = prompt('請輸入半徑');
//const area = radius * PI;

//console.log(area, radius, typeof (radius));
//document.write('半徑為:' + radius);
//document.write('<h1>面積為' + area + '</h1>')

//console.log(radius, typeof (radius))
//alert('半徑為' + radius)
const get_number_random = (start, end) => Math.floor(Math.random() * (end - Number(start) + 1) + Number(start));
function lotto(start, end, numbers, specil = true) {
    let lottos = [];
    do {
        number = get_number_random(start, end);
        if (!lottos.includes(number)) {
            lottos.push(number)
        }
    } while (lottos.length != numbers)

    // for (let i = 0; i < numbers; i++) {
    //     number = get_number_random;
    //     lottos.push(number)
    // }
    if (specil) {
        number = get_number_random(start, end);
        // if (lottos.includes(number)) {
        //     continue
        // }
        lottos.push(number)

    }
    return lottos
}
// function getBmi(height, weight, Point = 2) {
//     bmi = weight / (height / 100) ** 2
//     return bmi.toFixed(Point)
// }
// const get_bmi = (height, weight, Point = 2) => (weight / (height / 100) ** 2).toFixed(Point);

// console.log(lotto(1, 49, 6))
// console.log(getBmi(175, 60))
// console.log(get_bmi(175, 60))
console.log(lotto(1, 49, 6))
const title = document.querySelector('h1');
title.innerText = '大樂透號碼';
const subtitle = document.querySelector('h2');
subtitle.innerText = '大樂透開獎中';
subtitle.innerHTML = `<h2><i>${subtitle.innerText}</i></h2>`;
subtitle.style.backgroundColor = 'red';
const lottoEl = document.querySelector('.lotto_number');
const btm = document.querySelector('#starts');
btm.addEventListener('click', () => {
    console.log('clicks!');

});















