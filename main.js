const getPrimes = function(rangeLimit) {
  // Create your range, starting at two and ending at the given limit.
  let numbers = [];
  for(let i = 2 ; i <=rangeLimit; i++){
    //loop start from 2 to given limit 
    numbers.push(i);//add the i o arry called numbers 
  }
  console.log(numbers)
  // The algorithm consists of repeating the following over and over:
  let primes = [];
  while (numbers.length > 0 ){
    //the irst element in the array will be remeved
    let prime = numbers.shift(); 
    numbers = numbers.filter(function(num){
      /* return the numbers that didn't multiply by 2 
          e.g. [3,5,7,9,11, ...]
       */
      return num % prime !== 0 ; 
    });
    primes.push(prime);
  }
  console.log(primes)
  /*  take the next available unmarked number in your list (it is prime)
      remove all the multiples of that number (they are not prime)
      Repeat until you don't have any possible primes left in your range.*/
      for(let i = 0 ; i <primes.length ; i++){
        console.log(primes[i])
      }
  // When the algorithm terminates, all the numbers in the list that have not been removed are prime.
  // loop through all the prime numbers and print them to the console
}

getPrimes();


/* Hello, World Team Solution  */
const getPrimes = function(rangeLimit) {
  // Create your range, starting at two and ending at the given limit.
  let list = [];
  for (let i = 2; i <= rangeLimit; i++) {
    list.push(i);
  }
  // The algorithm consists of repeating the following over and over:
  for (let i = 0; i < list.length; i++){
    for (let j = list[i]; j <= rangeLimit; j++){
         if(list.indexOf(j * list[i]) !== -1){
          list.splice([list.indexOf(j * list[i])], 1);
        }
    }
  }
  console.log(list)
}

getPrimes(13);