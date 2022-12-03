import { 
  useEffect,
  useState,
  useRef,
} from 'react'
import {
    Box,
    Textarea,
    Heading,
    Button,
    Select
} from '@chakra-ui/react';
import '../App.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import theme from '../theme'
import axios from 'axios';
// import { useAuthContext } from '../contexts/AuthContext';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {onAuthStateChanged} from 'firebase/auth';
import { auth } from '../firebaseEnv'
import allChallenges from '../assets/challenges.json';
import MakeListOfAccomplishments from '../MakeListOfAccomplishments';
import { Spinner } from '@chakra-ui/react'


const PostPage = () => {
  const todoContents = allChallenges;

  //DBのuser情報
  const [userData, setUserData] = useState()

  //textareaの情報
  const [text, setText] = useState()

  //達成したタスクを表示するためのchallengeId
  const [value, setValue] = useState(null)
  const [ChallengesList, setChallengesList] = useState();

  // 画像選択のため
  const [file, setFile] = useState()
  const [fileName, setFileName] = useState()

  const inputRef = useRef(null);

  // Get a reference to the storage service, which is used to create references in your storage bucket
  const storage = getStorage();

  // Create a storage reference from our storage service
  const postsRef = ref(storage, 'posts');

  // Child references can also take paths delimited by '/'
  const pictureRef = ref(storage, 'posts/'+fileName);

  // 画面描画時
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log('user = '+user.uid)
      axios.get('http://localhost:8080/users/me/'+user.uid)
      .then((res) => {
        // console.log('userdata = '+JSON.stringify(res.data))
        // console.log('challenge_completed = '+JSON.stringify(res.data.challenge_completed))
        setUserData(res.data)
        setChallengesList(MakeListOfAccomplishments(todoContents,res.data.challenge_completed,'notAchieved'));
      })
      .catch((err) => {
        console.log(err)
      })})
  },[])

  // 写真を画面上に置くために画面をクリックする
  const clickFileUpload = (event) => {
    event.preventDefault()
    console.log(inputRef.current);
    inputRef.current.click();
  };

  // 写真をキャンセル
  const cancel = () => {
    setFile(undefined)
    setFileName(undefined)
  }

  // 写真を画面上に置く
  const onFileInputChange = (event) => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // 画像があったら
    if (file !== undefined) {
      uploadBytes(pictureRef, file)
      .then((Image) => {
        console.log('Uploaded a blob or file!',file)
        
        getDownloadURL(pictureRef, 'test/'+fileName)
        .then((url) => {
          console.log(url)
          console.log(value)
          console.log(userData.id)
          // ここにaxiosを書く
          axios.post('http://localhost:8080/posts',{
            user_FK:userData.id,
            challenge_FK:value,
            text:text,
            picture_path_01:url,
            picture_path_02:null,
            picture_path_03:null,
            picture_path_04:null
          })
          .then((res)=>{
            if (value !== null) {
              axios.post('http://localhost:8080/challenge-completed',{
                challenge_FK: value,
                user_FK: userData.id
              })
              .then((res)=>{
                console.log(res);
              })
              .catch((err)=>{
                console.log('challlenge-comp')
                console.log(err);
              })
              // axios.put('http://localhost:8080/users/'+userData.firebase_FK, {
              //   experience_point_num: userData.experience_point_num + todoContents[value-1].experience_point
              // })
              // .then((res)=>{
              //   console.log(res);
              // })
              // .catch((err)=>{
              //   console.log('experience')
              //   console.log(userData.experience_point_num)
              //   console.log(todoContents[value-1].experience_point)
              //   console.log(userData.experience_point_num + todoContents[value-1].experience_point)
              //   console.log(err);
              // })
            }
            console.log(res);
          })
          .catch((err)=>{
            console.log('post投稿')
            console.log(err);
          })
          
          
        })
        .catch((err) => {
          console.log(err)
        })
      })
      .catch((err) => {
        console.log(err)
      })
    }
    // 画像が無かったら
    else {
      axios.post('http://localhost:8080/posts',{
        user_FK:userData.id,
        challenge_FK:value,
        text:text,
        picture_path_01:null,
        picture_path_02:null,
        picture_path_03:null,
        picture_path_04:null
      })
      .then((res)=>{
        console.log(res);
        if (value !== null) {
          axios.post('http://localhost:8080/challenge-completed',{
            challenge_FK: value,
            user_FK: userData.id
          })
          .then((res)=>{
            console.log(res);
          })
          .catch((err)=>{
            console.log('challlenge-comp')
            console.log(err);
          })
          // axios.put('http://localhost:8080/users/'+userData.firebase_FK, {
          //   experience_point_num: userData.experience_point_num + todoContents[value-1].experience_point
          // })
          // .then((res)=>{
          //   console.log(res);
          // })
          // .catch((err)=>{
          //   console.log('experience')
          //   console.log(userData.experience_point_num)
          //   console.log(todoContents[value-1])
          //   console.log(err);
          // })
        }
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  }
  if (!userData) return(
    <Box textAlign='center'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color={theme.colors.main}
        size='xl'
      />
    </Box>
  )
  
  // console.log('userData = '+JSON.stringify(userData))
  return (
    <Box style={{textAlign: 'center',paddingTop:'4rem'}}>
      <Header userInfo={userData} />
      <form onSubmit={handleSubmit} >
        <Heading as='h3' size='lg' style={{margin:'0.7rem'}}>
          投稿メッセージ
        </Heading>
        <Textarea placeholder="コメントを記入" resize={'none'} style={{height:'30vh',width:'80vw'}} value={text} onChange={(event) => setText(event.target.value)}/>
        <Heading as='h3' size='lg' style={{margin:'0.7rem'}}></Heading>
        <Button bg={theme.colors.accent} color='white' onClick={clickFileUpload}>画像を選択</Button>
        <input
          hidden
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={onFileInputChange}
        />
        <div> {fileName} </div>
        <Button bg={theme.colors.accent} color='white' onClick={cancel} >取り消し</Button>
        <Heading as='h3' size='lg' style={{margin:'0.7rem'}}>
          チャレンジ
        </Heading>

          <Select value={value} onChange={(event) => {
            setValue(event.target.value)
            console.log(event.target.value)
            }}>
            <option value={null} key={null} >なし</option>
            {ChallengesList?.map(challenge => (
              <option value={challenge.id} key={challenge.id} >{challenge.title}</option>
            ))}
          </Select>
        <Box style={{margin:'0.7rem'}}>
          <Button type='submit'  bg={theme.colors.main} color={'white'} _hover={{bg: theme.colors.sub}}>送信</Button>
        </Box>
      </form>
      <Footer/>
    </Box>
  )
}

export default PostPage;
