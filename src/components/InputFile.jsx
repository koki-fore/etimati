import { useAuthContext } from '../contexts/AuthContext';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { useState, useRef } from 'react';



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

    uploadBytes(palpalRef, file)
    .then((testImage) => {
    console.log('Uploaded a blob or file!',file)
    })
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

  return (
    <div>
      <form onSubmit={upload}>
        <button onClick={clickFileUpload}>画像を選択する</button>
          <input
            hidden
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={onFileInputChange}
          />
        <input type="submit" value='送信' />
      </form>
    </div>
  )
}
export default InputFile