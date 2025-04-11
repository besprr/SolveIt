

const PostItem = (props) => {


	return(
		<div className='w-full bg-gray-100 p-5 border-3 flex justify-between items-center rounded-2xl'>
			<div>
			<h2 className='text-4xl font-bold'>{props.post.title}</h2>
			<p className='text-3xl pt-6'>{props.post.body}</p>
			</div>
			<button className='bg-red-400 p-3 rounded-2xl cursor-pointer h-15' onClick={() => props.remove(props.post)}>Удалить</button>

		</div>
	)
}

export default PostItem