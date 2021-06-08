import Link from 'next/link'

const McLaren = () => {
    return ( 
        <div>
            <p>McLaren's are pretty cool.</p>
            <p>Very fast.</p>
            <p>Quite Sleek</p>
            <br />
            <div>
                <Link href="/">
                    <a>Go back</a>
                </Link>
            </div>
        </div>
     );
}
 
export default McLaren;