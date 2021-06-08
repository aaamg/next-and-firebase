import { useState, useEffect} from 'react'
import Link from 'next/link'

const Login = () => {
    const [name, setName] = useState({firstName: "", lastName: ""})
    return ( 
        <>
            <div>
                <form>
                   <input placeholder="email " />


                   <input placeholder="pass: " />
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
 
export default Login;

