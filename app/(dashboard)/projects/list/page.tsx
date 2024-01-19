//import styles from './styles.module.css'
import styles from './projects.module.css'
export default function ProjectList() {
    return (
      <main>
        <h1>ProjectList</h1>

        <ul className={styles.ul}>
            <li>
                <link href='/projects/jobit'>
                    Jobit
                </link>
            </li>
            <li>
                <link href='/projects/carrent'>
                    CarRent
                </link>
            </li>
            <li>
                <link href='/projects/hipnode'>
                    Hipnode
                </link>
            </li>
        </ul>
      </main>
    )
  }
  