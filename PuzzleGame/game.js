let array = [13,3,7,6,5,15,2,8,12,"x",9,10,11,1,14,4];
let indexOfEmpty;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element ==="x"){
        indexOfEmpty == index;
    }
}
let ifMovableUp;
let ifMovableDown;
let ifMovableForward;
let ifMovableBack;
if(indexOfEmpty - 4 >= 0){
    ifMovableUp == true;
}
if (indexOfEmpty + 4 <= 16) {
    ifMovableDown == true;
}
if (indexOfEmpty  + 1 <= 16) {
    ifMovableForward == true;
}
if(indexOfEmpty - 1 >=0){
    ifMovableBack == true;
}
let completed;
let ifCompleted;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element = index - 1 && element != "x") {
        completed ++;
    }
    if (completed == 15) {
        ifCompleted == true;
    }
}
while(!ifCompleted){
    if(ifMovableUp && array[indexOfEmpty - 4] != array[indexOfEmpty-4] -1){
        let i,j;
        i = array[indexOfEmpty];
        j = array[indexOfEmpty - 4]
        array[indexOfEmpty] == j;
        array[indexOfEmpty - 4] ==i;
        indexOfEmpty -= 4;
    }
    else if(ifMovableUp && array[indexOfEmpty - 1] != array[indexOfEmpty-1] -1){
        let i,j;
        i = array[indexOfEmpty];
        j = array[indexOfEmpty - 1]
        array[indexOfEmpty] == j;
        array[indexOfEmpty - 1] ==i;
        indexOfEmpty -= 1;
    }
    else if(ifMovableUp && array[indexOfEmpty + 1] != array[indexOfEmpty + 1] -1){
        let i,j;
        i = array[indexOfEmpty];
        j = array[indexOfEmpty + 1 ]
        array[indexOfEmpty] == j;
        array[indexOfEmpty + 1 ] ==i;
        indexOfEmpty += 1;
    }
    else if(ifMovableUp && array[indexOfEmpty + 4] != array[indexOfEmpty +4] -1){
        let i,j;
        i = array[indexOfEmpty];
        j = array[indexOfEmpty + 4]
        array[indexOfEmpty] == j;
        array[indexOfEmpty + 4] ==i;
        indexOfEmpty += 4;
    }
}
if (ifCompleted) {
    array.forEach(element => { console.log(element)});
}