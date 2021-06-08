import { useState, useEffect} from 'react'
import Link from 'next/link'

const Form = () => {
    const [name, setName] = useState({firstName: "", lastName: ""})
    return ( 
        <>
            <div>
                <form>
                   <input placeholder="First Name: " value={name.firstName} onChange={(e) => { setName({...name, firstName: e.target.value})}}/>


                   <input placeholder="Last Name: " value={name.lastName} onChange={(e) => { setName({...name, lastName: e.target.value})}}/>
                </form>
                <p>{JSON.stringify(name.firstName)}</p>
                <p>{JSON.stringify(name.lastName)}</p>

            <br />
            <div>
                <Link href="/">
                    <a>Go back</a>
                </Link>
            </div>
            </div>
        </>
     );
}
 
export default Form;


/* 

    apiKey: "AIzaSyBjg8ee7ox59uPzweXbHLjgW-o7pcAmy5M",
    authDomain: "simple-form-6e468.firebaseapp.com",
    projectId: "simple-form-6e468",
    storageBucket: "simple-form-6e468.appspot.com",
    messagingSenderId: "736825322519",
    appId: "1:736825322519:web:cf76235d15c63845610052",
    measurementId: "G-4S9D318E6X"


*/