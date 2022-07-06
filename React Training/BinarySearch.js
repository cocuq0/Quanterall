let arr = [1,2,5,7,0,12,15];
let key = 17;
let left = 0,right = arr.length;
while (left <= right) {
    let mid = (left + right)/2;
    if(arr[mid] > key){
        right = mid -1;
    }
    else if(arr[mid] < key){
        left = mid + 1;
    }
    else if(arr[mid] == key){
        return true;
    }
}