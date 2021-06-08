import Link from 'next/link'

const CarHome = () => {
    return ( 
        <div>
            <p>Car Home</p>
            <p>This is a folder's index page, which is a route.</p>
            <p>Any pages in this folder, will be /cars/[route]</p>

            <p>Lets see some Cars:</p>
            <Link href="/Cars/mclaren">
                <a>McLaren</a>
            </Link>

            <br />
            <br />
            <div>
                <Link href="/">
                    <a>Go back</a>
                </Link>
            </div>
        </div>
    );
}
 
export default CarHome;