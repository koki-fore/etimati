import { Button } from "@chakra-ui/react"
import { signOut } from "firebase/auth";
import auth from "../firebaseEnv"
import theme from "../theme";

const SignOutButton = () => {
    
    const pushSignOut = () => {
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
        <Button bg={theme.colors.accent} color='white' onClick={pushSignOut}>ログアウト</Button>
    )
}
export default SignOutButton