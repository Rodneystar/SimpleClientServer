function findUniq(arr) {
  if(arr[1] === arr[0]) {
    common = arr[1];
    return arr.filter(num => {

      return num != common;
    })[0];
  }else if(arr[1]==arr[2]){
    return arr[0];
  } else return arr[1];
}
