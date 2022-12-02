/*固定値*/
const perLevelup=30;
function experience2various( totalExperience){
  
  const level=(Math.floor(totalExperience/perLevelup))+1;
  const upto=perLevelup-(totalExperience%perLevelup);
  const avatar=level/2;
  return {level:level,upto:upto,avatar:avatar}
}

function perLevelUp(){
  return perLevelup;
}

export { experience2various, perLevelUp};
