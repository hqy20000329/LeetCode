//暴力解决
/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */


var cal = function (piles, H, high, low, mid) {
    let time = 0   
    if((high-low)==1){
        return high
    }
    mid = Math.ceil((low + high) / 2)
    for (let i = 0; i < piles.length; i++) {
        time += Math.ceil(piles[i] / mid)
    }
    
    if (time < H) {
        high = mid
    }
    else if (time > H) {
        low = mid
    }
    else if(time==H){
        return mid
    }
    
    return cal(piles, H, high, low, mid)
}

var c = function(piles,H,spd){
    let time1 = 0,
        time2 = 0;
    for (let i = 0; i < piles.length; i++) {
        time1 += Math.ceil(piles[i] / (spd))
    }
    for (let j = 0; j < piles.length; j++) {
        time2 += Math.ceil(piles[j] / (spd-1))
    } 
    if((time1<=H)&&!(time2==H)) return spd
    else {
    spd-=1;
    return c(piles,H,spd)
    }
}

var minEatingSpeed = function (piles, H) { 
    let high = Math.max(...piles),
        low = 0,
        spd = Math.ceil(cal(piles, H, high, low));
    if((spd==2)||(spd==1)) return spd
    else return c(piles,H,spd)   
};

minEatingSpeed([3, 6, 7, 11], 8);
