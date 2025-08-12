import { Content } from "./layout-specifics/content"
import { Header } from "./layout-specifics/header"

export const GlobalLayout = () => {
  return (
    <div className="w-full h-full">
        <Header />
        <Content />
    </div>
  )
}
