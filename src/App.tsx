import { Header } from "./components/Header"
import { SideBar } from "./components/SideBar";
import { Post, PostProps } from "./components/Post";

import styles from './App.module.css';
import './global.css';

interface Post extends PostProps {
  id: number
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/iTzRodz.png',
      name: 'Rodolfo Carvalho',
      role: 'Desenvolvedor',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare'
      },
    ],
    publishedAt: new Date('2023-12-13 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego',
      role: 'Desenvolvedor',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare'
      },
    ],
    publishedAt: new Date('2023-12-10 20:00:00')
  }
]

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <SideBar />
        </aside>
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </>
  )
}

export default App
