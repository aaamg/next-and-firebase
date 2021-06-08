import Link from 'next/link'
import {useState, useEffect} from 'react'

const About = () => {

    // This page is a mess, and test bed. Disregard anything that looks awful :) 
    const names = ["joe", "roe", "moe", "doe"]
    const Randy = {name: 'Randy', age: 77}

    const [testArray, settestArray] = useState(names);
    const [person, setPerson] = useState(Randy);

    const onClicker = () => {
        // Begin: 
        // setPerson( (updateAge) => {
        //     return { ...updateAge, age: updateAge.age + 1 }
        // })
        // console.log(Randy.age)
    }
    useEffect(()=> {
        settestArray(...testArray, "mike")
    }, [])

    return ( 
        <div>
           <p>About</p>

           {console.log(person.age)}
           <button onClick={console.log("nothing yet")}>Increment Randy's Age</button>
           <p>{person.age}</p>

           {console.log(testArray)}

           <br />
            <div>
                <Link href="/">
                    <a>Go back</a>
                </Link>
            </div> 
        </div>
     );
}
 
export default About;