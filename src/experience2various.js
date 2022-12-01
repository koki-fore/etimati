function experience2various( totalExperience){
  /*固定値*/
  const perLevelup=30;
  const level=(Math.floor(totalExperience/perLevelup))+1;
  const upto=(totalExperience%perLevelup);
  const avatar=level/2;
  return {level:level,upto:upto,avatar:avatar}
}

export default experience2various;
