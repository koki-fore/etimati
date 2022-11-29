function MakeListOfAccomplishments(all, achievements){
  let tureFalse = new Array(all.length).fill(false);
  for(let i=0;i<achievements.length;i++){
    tureFalse[achievements[i].id-1]=true;
  }
  for(let i=0;i<all.length;i++){
    all[i].status=tureFalse[i];
  }
  return all;
}

export default MakeListOfAccomplishments;
