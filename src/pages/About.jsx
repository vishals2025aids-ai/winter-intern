import Parent from '@/components/ui/Parent'
import Count from '../hooks/Count'
import { StudentContext } from '@/StudentContext'

const About = () => {
    let StudentName = "Vishal"
    return (
        <div className="flex flex-col items-center gap-4 p-5">

            <h1>About Page</h1>

            <p>This is About Page</p>

            <Count />

            <StudentContext.Provider value={StudentName}>
            <Parent />
            </StudentContext.Provider>
        </div>
    )
}

export default About