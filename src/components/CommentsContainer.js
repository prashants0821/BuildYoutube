import React from 'react'
import Comment from './Comment';

const commentsData = [
    {
        name: 'Prashant',
        text:'Lorem Ipsum and replicated',
        replies:[ ]
    },
    {
        name: 'Prashant',
        text:'Lorem Ipsum and replicated',
        replies:[{
            name: 'Prashant',
            text:'Lorem Ipsum and replicated',
            replies:[ ]
        }, ]
    },
    {
        name: 'Prashant',
        text:'Lorem Ipsum and replicated',
        replies:[ ]
    },
    {
        name: 'Prashant',
        text:'Lorem Ipsum and replicated',
        replies:[ {
            name: 'Prashant',
            text:'Lorem Ipsum and replicated',
            replies:[ {
                name: 'Prashant',
                text:'Lorem Ipsum and replicated',
                replies:[ ]
            },]
        },]
    },
]

// const CommentsList = ({ comments }) => {
//     // Disclaimer: Don't use indexes as keys
//     return comments.map((comment, index) =>(
//         <div>
//             <Comment key={index}  data={comment} />
//             <div className='pl-5 border border-l-black ml-5'>
//             <CommentsList comments={comment.replies}/>
//             </div>
//         </div>
      
//       ));
//     };

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments:</h1>
        <Comment data = {commentsData[0]}/>
    </div>
  )
}

export default CommentsContainer;