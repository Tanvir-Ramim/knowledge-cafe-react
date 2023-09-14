import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog,handleAddToBookmark ,handleMarkAsRead}) => {
   const {title,cover,reading_time,author_img,author,posted_date,hashtags,id}=blog
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex gap-6'>
              <img className='w-16' src={author_img} alt="" />
              <div >
                <h3 className='text-2xl'>{author}</h3>
                <p>{posted_date}</p>
              </div>
                </div>
                <div>
                      <span>{reading_time}min read</span>
                      <button onClick={()=>handleAddToBookmark(blog)} className='m-2 text-red-600 '><FaBookmark></FaBookmark></button>

                </div>
            </div>
              <h1 className='text-4xl'>{title}</h1>
              <p>
                {
                    hashtags.map((hash,inx)=><span key={inx}> <a href=""># {hash} </a> </span>)
                    
                }
             
              </p>
              <button onClick={()=>handleMarkAsRead(reading_time,id)} className='text-purple-600 font-bold underline'>Mark As Read </button>
        </div>
    );
};
 
Blog.propTypes={
     blog:PropTypes.object.isRequired,
     handleAddToBookmark:PropTypes.func,
     handleMarkAsRead:PropTypes.func
}
export default Blog;