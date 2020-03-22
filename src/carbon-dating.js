const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof Number(sampleActivity) !== "number"){
    return false;
  }

  if(!sampleActivity || sampleActivity <= 0 || sampleActivity > 15 || typeof sampleActivity !== "string"){
    return false
  }
  sampleActivity = Number(sampleActivity);
  
   console.log (sampleActivity); 
 let k = 0.693/HALF_LIFE_PERIOD;
 let t = (Math.log(MODERN_ACTIVITY / sampleActivity))/k;

t = Math.floor(t) + 1;
return t
 
};
