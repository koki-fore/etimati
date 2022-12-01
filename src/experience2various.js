function experience2various( totalExperience){
  /*固定値*/
  const perLevelup=30;
  const level=(totalExperience/perLevelup)+1;
  const upto=perLevelup-(totalExperience%perLevelup);
  const avatar=level/2;
  return {level:level,upto:upto,avatar:avatar}
}

export default experience2various;
