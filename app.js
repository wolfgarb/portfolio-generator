const profDataArgs = process.argv.slice(2, process.argv.length);

const printProfData = profileDataArr => {

    profileDataArr.forEach(profileItem => console.log(profileItem));
}       
// dividing line that will be output before the user input is turned into output
console.log('================');

printProfData(profDataArgs);