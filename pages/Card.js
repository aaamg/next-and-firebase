import Link from 'next/link'

const Card = () => {

    let animals = ["dog", "cat", "zebra", "hippo"];
    return (
        <div>
            <p>Animals:</p>
            <div>{animals.map((item) => {
                return <p>{item}</p>})}</div>
            <br />
            <div>
                <Link href="/">
                    <a>Go back</a>
                </Link>
            </div>
        </div>
    );
}

export default Card;