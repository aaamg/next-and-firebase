import { Page, Text, Button, Row, useToasts} from "@geist-ui/react"
import { useState, useEffect } from 'react'
import Link from "next/link"
import Router from 'next/router'

// firebase
import firebase from "firebase/app"
import "firebase/auth"
import initFirebase from '../utils/firebase'

initFirebase();


const provider = new firebase.auth.GoogleAuthProvider();

const Join = () => {
    const [authorizing, setAuthorizing] = useState(false)

    const handleAuth = async () => {
        setAuthorizing(true);
    
        try{
            const result = await firebase.auth().signInWithPopup(provider)
            const { user, credentials } = result;
            console.log({ user, credentials })
            Router.push("/")
        } catch(error){
            setAuthorizing(false)
        }
        
    };
    


    return ( 
        <>
        <Page>
            <Row justify="center">
                <Text>Join Now</Text>
            </Row>
            <Row justify="center">
                <Button loading={authorizing} onClick={handleAuth}>Get started</Button>
            </Row>
        </Page>
        <br />
            <div>
                <Link href="/">
                    <a>Go back</a>
                </Link>
            </div>
        </>
     );
}
 
export default Join;