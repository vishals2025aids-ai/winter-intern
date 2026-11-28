
import Students from '../components/Students'
import { Button } from '../components/ui/button'

const Home = () => {
    let name = 'Vishal'
    let age = 18

    return (
        <div className="flex flex-col items-center gap-4 p-5">
            <h1>Home Page</h1>

            <h2>Welcome {name}</h2>

            <p>Age: {age}</p>

            <Students name={name} age={age} />

            <Button variant="default">Default</Button>

            <Button variant="destructive">Delete</Button>

            <Button variant="outline">Outline</Button>

            <Button variant="secondary">Secondary</Button>

            <Button variant="ghost">Ghost</Button>

            <Button>Click Me</Button>
        </div>
    )
}

export default Home
