/**
 * @param {number} N
 * @return {number}
 */
 
var fib = function(N) {
    const memory=[0,1,1]
    console.log(sol(N,memory))
    // return sol(N,memory)
};

function sol(N,memory){    
    if(memory[N]||memory[N]==0) return memory[N]
    memory[N] = sol(N-1,memory) + sol(N-2,memory)
    return memory[N]
}

const N=8
fib(N)