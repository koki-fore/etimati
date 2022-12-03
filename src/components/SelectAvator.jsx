import palpal1 from '../assets/palpal1.jpg';
import palpal1_tp from '../assets/palpal1_tp.png';
import palpal2 from '../assets/palpal2.jpg';
import palpal2_tp from '../assets/palpal2_tp.png';
import palpal3 from '../assets/palpal3.jpg';
import palpal3_tp from '../assets/palpal3_tp.png';
import {experience2various, perLevelUp} from '../experience2various';
import { Avatar, Image } from '@chakra-ui/react'


const SelectAvatar = (props) => {
  const {all,version} = props;
  const {level, upto,avatar}=experience2various(all);
  /*
    0:マイページ用,
    1:ヘッダー用,
    2:ヘッダーのIcon
  */
  const forMypage=0;
  const forHeaderMenu=1;
  const forHeaderIcon=2
  /* 第一進化,第二進化 */
  const firstImg = 4;
  const secondImg = 7;
  if (version == forMypage){
    if(level<firstImg){
      return <Image src={palpal1} alt='Avatar' boxSize={'100%'}></Image>
    }else if(level<secondImg){
      return <Image src={palpal2} alt='Avatar' boxSize={'100%'}></Image>
    }else {
      return <Image src={palpal3} alt='Avatar' boxSize={'100%'}></Image>
    }
  }else if(version == forHeaderMenu){
    if(level<firstImg){
      return <Avatar src={palpal1} alt='Avatar' size={'2xl'}></Avatar>
    }else if(level<secondImg){
      return <Avatar src={palpal2} alt='Avatar' size={'2xl'}></Avatar>
    }else {
      return <Avatar src={palpal3} alt='Avatar' size={'2xl'}></Avatar>
    }
  }else if(version == forHeaderIcon){
    if(level<firstImg){
      return <Avatar src={palpal1_tp} alt='Avatar' size={'sm'}></Avatar>
    }else if(level<secondImg){
      return <Avatar src={palpal2_tp} alt='Avatar' size={'sm'}></Avatar>
    }else {
      return <Avatar src={palpal3_tp} alt='Avatar' size={'sm'}></Avatar>
    }
  }
}

export default SelectAvatar;
