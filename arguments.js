function getName(firstName,lastName){
    console.log(arguments);
    let fullName="";
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
         fullName= fullName+ " " + element;
        
    }
   
    return fullName;
}
var name=getName('Omor','Faruk','Mahmud','Hasan','Abdull','Mannan','Jafor','Iqbal');
console.log(name);