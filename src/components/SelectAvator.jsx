import palpal1 from '../assets/palpal1.jpg';
//import palpal1_tp from '../assets/palpal1_tp.jpg';
import palpal2 from '../assets/palpal2.jpg';
//import palpal2_tp from '../assets/palpal2_tp.jpg';
import palpal3 from '../assets/palpal3.jpg';
//import palpal3_tp from '../assets/palpal3_tp.jpg';
import {experience2various, perLevelUp} from '../experience2various';
import { Image } from '@chakra-ui/react'

/*
  0:マイページ用,
  1:ヘッダー用
*/
const SelectAvatar = (props) => {
  const {all,version} = props;
  const {levelo, upto,avatar}=experience2various(all);
  if (version == 0){
    if(level<=3){
      return <Image src={palpal1} alt='Avatar'></Image>
    }else if(level<=6){
      return <Image src={palpal2} alt='Avatar'></Image>
    }else if(level<=12){
      return <Image src={palpal3} alt='Avatar'></Image>
    }
  }
}

export default SelectAvatar;
