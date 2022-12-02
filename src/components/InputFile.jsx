// import { useAuthContext } from '../contexts/AuthContext';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useState, useRef } from 'react';
import { Button } from '@chakra-ui/react';
import theme from '../theme';



const InputFile = () => {
  

  const [file, setFile] = useState()
  const [fileName, setFileName] = useState()

  // Get a reference to the storage service, which is used to create references in your storage bucket
  const storage = getStorage();

  // Create a storage reference from our storage service
  const testRef = ref(storage, 'test');
  // testRef now points to 'test'

  // Child references can also take paths delimited by '/'
  const palpalRef = ref(storage, 'test/'+fileName);

  // 写真をアップロードする
  const upload = (event) => {
    event.preventDefault()
    if (file !== undefined) {
      uploadBytes(palpalRef, file)
      .then((testImage) => {
        console.log('Uploaded a blob or file!',file)
        
        getDownloadURL(palpalRef, 'test/'+fileName)
        .then((url) => {
          // ここにaxiosを書く
          console.log(url)
        })
      })
    }
  }

  // 写真を画面上に置く
  const onFileInputChange = (event) => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  const inputRef = useRef(null);

  // 写真を画面上に置くために画面をクリックする
  const clickFileUpload = (event) => {
    event.preventDefault()
    console.log(inputRef.current);
    inputRef.current.click();
  };

  const cancel = () => {
    setFile(undefined)
    setFileName(undefined)
  }

  return (
    <div>
      <form onSubmit={upload}>
        <Button bg={theme.colors.accent} color='white' onClick={clickFileUpload}>画像を選択する</Button>
          <input
            hidden
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={onFileInputChange}
          />
          <div> {fileName} </div>
        <input type="submit" value='送信' />
      </form>
      <Button bg={theme.colors.main} color='white' onClick={cancel} >取り消し</Button>
    </div>
  )
}
export default InputFile