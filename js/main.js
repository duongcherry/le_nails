function countPositivesSumNegatives(input){
  
  if (input == 0 || input.length == 0)
    return [];
  
  let positives = 0; 
  let negatives = 0; 
  
  for(let i=0; i<input.length; i++){
  
    if (input[i] > 0){
     positives +=1 
    } else {
      negatives = negatives + input[i] 
    }
    
    console.log (positives, negatives);

}
}


countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])