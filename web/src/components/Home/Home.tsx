import Tools from 'src/components/Tools'
import { Hero } from './Hero'
import { useStyles } from './Home.styles'

const Home = () => {
  const classes = useStyles()

  return (
    <main>
      <Hero />
      <Tools />
    </main>
  )
}

export default Home
