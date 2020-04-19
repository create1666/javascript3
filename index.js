let result = []; let replaced;
const check = param => {
for (i=1; i<=param; i++){
    if (i%2==0 && i%3==0 && i%5==0) {
        replaced = "yu-gi-oh";
        }
        else if (i%2===0 && i%3===0 ){
            replaced = "yu-gi";
        } else if(i%2==0 && i%5==0){
            replaced = "yu-oh";
        }else if(i%3==0 && i%2==0){
            replaced = "gi-yu";
        } else if(i%3==0 && i%5==0){
            replaced = "gi-oh";
        } else if (i%5==0 && i%2==0){
            replaced = "oh-yu";
        }else if(i%5==0 && i%3==0){
            replaced = "oh-gi";
        } 
       else if(i%2==0){
         replaced = "yu";
      } else if (i%3==0){
       replaced = "gi";
      } else if (i%5==0){
           replaced = "oh";
        } else if(i%2!==0 && i%3!==0 && i%5!==0){
          replaced = i;
        }   
       
        result.push(replaced);
    }  
    
   
    console.log(result);

};
 check(100);
 check(30);





// let result;
// const replaced = [];

// const checkDivisible = arr => {
// for(i=0; i<=arr.length; i++)
//     if(arr[i]%2===0  ){
        
//     arr[i] = "yu";
//     replaced.push(arr[i]);
//     console.log(replaced);

//     } else if(arr[i]%3===0){

//         arr[i] = "gi";
//         replaced.push(arr[i]);
//         console.log(replaced);

//       } else if(arr[i]%5===0 ){

//         arr[i] = "oh";
//         replaced.push(arr[i]);
//         console.log(replaced);

//       }else if(arr[i]%2||3||5!==0){

//            replaced.push(arr[i]);
//            console.log(replaced);

//      } //else if (arr[i]%2&&3==0){
//     //     arr[i] = "yu-gi";
//     //     replaced.push(arr[i]);
//     //     console.log(replaced);

//     //   } else if (arr[i]%2&&5){
//     //     arr[i] = "yu-oh";
//     //     replaced.push(arr[i]);
//     //     console.log(replaced);
//     //   }
//    };
//  };

//  checkDivisible([1,2,3,5,7,8,9,10]);