import Diseases from "./Diseases.tsx"
import SymptomSelector from "./SymptomSelector/SymptomSelector.tsx"

const App = () => {
  return (
    <div className="flex flex-col gap-10 h-screen justify-center items-center my-16">
      <SymptomSelector />
      <Diseases />
    </div>
  )
}

export default App
