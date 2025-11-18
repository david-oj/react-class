import Greeting from "./component/Greeting"
import UserCard from "./component/UserCard"
import { img1, img2, img3, flower } from "./assets"
import Counter from "./component/Counter"
import TextInput from "./component/TextInput"
import FetchData from "./component/FetchData"

function App() {


  return (
    <>
      <Greeting />
      <div className="flex gap-6 flex-wrap justify-center">
        <UserCard name="John Doe" title="Project Manager" age={25} image={img1} hobbies={["Reading", "Coding", "Cooking", "Swimming"]} />
        <UserCard name="Greg Smith" title="Software Engineer" age={35} image={img2} hobbies={["Cooking", "Coding", "Sleeping"]} />
        <UserCard name="Constance" title="UI/UX Designer" age={27} image={img3} hobbies={["Shopping", "Dancing", "Driving"]} />
        <UserCard name="Deborah" title="Software Engineer" age={35} image={flower} hobbies={["Cooking", "Coding", "Sleeping"]} />
        <UserCard name="Esther" title="UI/UX Designer" age={27} image={img2} hobbies={["Shopping", "Dancing", "Driving"]} />
      </div>

      <Counter />

      <TextInput />
      <FetchData />
    </>
  )
}

export default App
