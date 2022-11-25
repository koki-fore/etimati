import { Button } from "@chakra-ui/react"
import { signOut } from "firebase/auth";
import auth from "../firebaseEnv"

const SignOutButton = () => {
    
    const signOut = () => {
        signOut(auth)
        .then(() => {
            console.log('Sign-out successful.')
        })
        .catch((error) => {
            // An error happened.
            console.log(error)
        });
    }
    return(
        <Button onClick={signOut}>ログアウト</Button>
    )
}
export default SignOutButton