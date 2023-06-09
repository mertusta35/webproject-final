import {createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase";



const SignIn = () => {
    const logGoogleUser = async () =>{
        // Popup ile hesap seçimi
        const {user} = await signInWithGooglePopup();
        // console.log("LGU",user);
        // Seçilen hesaba göre veritabanına bağlantı noktası oluşturma
        await createUserDocumentFromAuth(user);
    }
    return ( 
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google
            </button>
        </div>
    );
}
 
export default SignIn;