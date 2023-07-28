import { useState } from 'react'
import './App.css'
import People from './components/People'
function App() {
  const PeopleData = [
    { name: 'walid', age: 27, email: 'walid.ali.ggg@gmail.com', number: '0941535901' },
    { name: 'pull', age: 24, email: 'pull.pull.ggg@gmail.com', number: '0941535901' },
    { name: 'patrick', age: 25, email: 'patrick.patrick.ggg@gmail.com', number: '0941535901' },
    { name: 'ali', age: 23, email: 'ali.ali.ggg@gmail.com', number: '0941535901' },
    { name: 'leo', age: 22, email: 'leo.leo.ggg@gmail.com', number: '0941535901' }
  ]
  return (
    <>
      <div className='app'>
        <People data={PeopleData} />
      </div>
    </>
  )
}

export default App
