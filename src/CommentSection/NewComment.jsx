import alo from '../assets/alo.jpg'
import ThumbsDown from '../ThumbsDown';
import ThumbsUp from '../ThumbsUp';
function NewComment(props)
{
    return <div className='flex flex-row mt-4 mb-4'>
        <img src={alo} className='rounded-full w-10 h-10'></img>
        <div className='flex flex-col'>
        <p className='font-semibold ml-2 text-lg' >Alo <span className='font-normal'>1 min ago</span></p>
        <p className='ml-2 font-medium'> {props.comment}</p>
        <p className='ml-2'><ThumbsUp /> <ThumbsDown/></p>
        </div>
        
       
    </div>
}
export default NewComment;