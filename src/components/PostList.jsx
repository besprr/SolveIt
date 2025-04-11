import PostItem from './PostItem'

const PostList = ({ title, posts, remove, onChange, value }) => {
	return (
		<>
			<h1 className='text-6xl font-bold'>{title}</h1>
			<input
				value={value}
				onChange={onChange}
				type='text'
				className='w-full 
			border p-5 text-3xl'
				placeholder='Поиск...'
			/>

			{posts.length === 0 ? (
				<h1 className='text-3xl text-red-500'>Нет постов</h1>
			) : (
				posts.map(post => (
					<PostItem remove={remove} post={post} key={post.id} />
				))
			)}
		</>
	)
}

export default PostList
