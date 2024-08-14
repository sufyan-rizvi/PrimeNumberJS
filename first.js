function checkPrime(){
    p = document.getElementById("result")
    var n1 = parseInt(f1.n1.value)
    var isPrime = true
    for (var i = 2; i <= Math.sqrt(n1);i++){
        console.log(typeof n1)
        console.log(typeof i)  
        if(n1 % i == 0){                  
            isPrime = false
        }

    }
    if(isPrime){
        p.innerHTML = "Your number is prime !" 
        alert("Your number is prime !" )
    }
    else{
        p.innerHTML = "Your number is not prime !"
        alert("Your number is not prime !")
    }
}