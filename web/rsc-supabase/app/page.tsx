import { Suspense } from 'react'
import NotesList from './components/notes-list'
import TimerCounter from './components/timer-counter'
import Spinner from './components/spiner'
import RefreshBtn from './components/refresh-btn'

export default function Page() {
  return (
    <main>
      <div className="m-10 text-center">Hello World.</div>
      <Suspense fallback={<Spinner color="border-green-500" />}>
        <NotesList />
      </Suspense>
      <TimerCounter />
      <RefreshBtn />
    </main>
  )
}
