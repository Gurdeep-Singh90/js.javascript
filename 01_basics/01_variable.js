const accountId = 123654
let  accountEmail = "Sagr@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"
let accountStore;
// accountId = 2 // not allowed
accountEmail = "sg@gj.com"
accountPassword = "12122121"
accountCity = "Bengaluru"

console.log(accountId);

/*
prefer not to use var 
because of issue in block and functional block 
*/

console.table([accountEmail, accountId, accountPassword, accountCity, accountStore])