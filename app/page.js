import Styles from './styles/home.scss'
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import About from "@/components/About";


export default function Home() {
  return (
    <main>
       <Header />
        <Intro />
        <About />
    </main>
  )
}
