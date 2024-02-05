import styles from './Playground.module.css'
import Quizz from '../Quizz/Quizz'

export default function Playground() {
  return (
    <div className={styles.container}>
        <p>Ton quizz va s'afficher ici</p>
        <Quizz />
    </div>
  )
}
