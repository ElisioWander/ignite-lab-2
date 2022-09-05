import { useParams } from 'react-router-dom'
import { Header } from '../Components/Header'
import { Sidebar } from '../Components/Sidebar'
import { Video } from '../Components/VideoSection'

export function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 ">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar />
      </main>
    </div>
  )
}
