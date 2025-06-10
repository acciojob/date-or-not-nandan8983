var isDate = function (input) {
  //   write your code 
	if (input instanceof Date && !isNaN(input)) {
        return true;
    } 

    let parsedDate = new Date(input);
    return !isNaN(parsedDate.getTime());
};
 
// Do not change the code below. 
const input = prompt("Enter Date.");
alert(isDate(input)); 
