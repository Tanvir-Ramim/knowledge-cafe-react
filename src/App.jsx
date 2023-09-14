import { useState } from "react"
import Blogs from "./Components/Blogs/Blogs"
import Bookmarks from "./Components/Bookmarks/Bookmarks"
import Header from "./Components/Header/Header"



function App() {
  const [bookmarks,setBookmarks]=useState([])
      const handleAddToBookmark=blog=>{
        const  newBookmarks=[...bookmarks,blog]
        setBookmarks(newBookmarks)
      }
      const[readingTime,setReadingTime]=useState(0)

      const handleMarkAsRead=(time,id )=>{
             setReadingTime(readingTime+time)
             const remainingBookmarks=bookmarks.filter(bookmark=>bookmark.id !==id)
             setBookmarks(remainingBookmarks)
      }

  return (
    <>
     <Header></Header>
     <div className="md:flex max-w-7xl mx-auto">
     <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
     <Bookmarks readingTime={readingTime}  bookmarks={bookmarks}></Bookmarks>
     </div>
    </>
  )
}

export default App
