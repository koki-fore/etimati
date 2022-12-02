/*
  status:statusを追加
  only:達成したもののみ
  notAchieved:未達成のもののみ
*/
function MakeListOfAccomplishments(all, achievements,str){
  let json=[];
  switch (str){
    case 'status':
      let tureFalse = new Array(all.length).fill(false);
      for(let i=0;i<achievements.length;i++){
        tureFalse[achievements[i].challenge_FK-1]=true;
      }
      for(let i=0;i<all.length;i++){
        all[i].status=tureFalse[i];
      }
      return all;
    case 'only':
      for(let i=0;i<achievements.length;i++){
        json.push({
          title: all[Number(achievements[i].challenge_FK-1)].title,
          text: all[achievements[i].challenge_FK-1].text,
          experience_point: all[achievements[i].challenge_FK-1].experience_point,
          id: all[achievements[i].challenge_FK-1].id
        })
      }
      return json
    case 'notAchieved':
      let j=0
      let i=0
      if(achievements.length==0){
       return all; 
      }
      for(i=0;i<all.length;i++){
        if(all[i].id!=achievements[j].id){
          json.push({
            title: all[i].title,
            text: all[i].text,
            experience_point: all[i].experience_point,
            id: all[i].id
          })
        }else{
          j++;
        }
        if(j==achievements.length){
          break;
        }
      }
      for(let k=i;k<all.length;k++){
        json.push({
          title: all[k].title,
          text: all[k].text,
          experience_point: all[k].experience_point,
          id: all[k].id
        })
      }
      return json;
  }
}

export default MakeListOfAccomplishments;
