/*
  status:statusを追加
  only:達成したもののみ
*/
function MakeListOfAccomplishments(all, achievements,str){

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
      let json=[];
      for(let i=0;i<achievements.length;i++){
        json.push({
          title: all[Number(achievements[i].challenge_FK-1)].title,
          text: all[achievements[i].challenge_FK-1].text,
          experience_point: all[achievements[i].challenge_FK-1].experience_point,
          id: all[achievements[i].challenge_FK-1].id
        })
      }
      console.log(json)
      return json;


  }
}

export default MakeListOfAccomplishments;
