import { Link } from "react-router-dom"

export default function About() {
    return (
        <main>
            <h1>What is H.S.T.M.?</h1>
            <p>It’s an easy way for you to create transcripts. You don’t need to do any research, or time-consuming form creation. Just fill in the information and that’s it! Start making your transcript by going to the <Link to="/create">Create</Link> page.</p>
            <h1>Who made this?</h1>
            <p>Transcript Templates is the pet project of Yang Yi, a 15-year old homeschooler from Taiwan who also happened to need an easy way to create his High School transcript.</p>
        </main>
    )
}