import { Button } from "../ui/button"
import { Header } from "./layout-specifics/header"
import { ModeToggle } from "./mode-toggle"

export const GlobalLayout = () => {
  return (
    <div className="w-fit h-fit p-4">
        <Header />
      <h1>Welcome to Vite + React</h1>
      <p>
        This is my starting point in order to regain my will in programming.
      </p>
      <Button>
        Hello
      </Button>
      <ModeToggle />
    </div>
  )
}
