let list = [
'uova',
'guanciale',
'pecorino',
'pepe',
'pasta',
'parmiggiano'
];

console.log(list)

const list_dom = document.getElementById('list');
console.log(list_dom);

let i=0;
while(i<list.length){
    console.log(list[i]);
    let element = document.createElement('li');
    element.innerText = list[i];
    list_dom.append(element);
    i++;
}