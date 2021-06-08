import Link from 'next/link'

const Nasa = () => {
    return (
        <div>
            <p>NASA</p>
            <p>Working on our internal systems are a challenge.</p>
            <p>Stuff.</p>
            <sub>I do not work for NASA</sub>
            <br />
            <br />
            <div>
                <Link href="/">
                    <a>Go back</a>
                </Link>
            </div>
        </div>
    )
}

export default Nasa;