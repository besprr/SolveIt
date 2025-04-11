import PostItem from './PostItem'

const PostList = ({ title, posts, remove }) => {
	return (
		<>
			<h1 className='text-6xl font-bold'>{title}</h1>
			{posts.map(post => (
				<PostItem remove={remove} post={post} key={post.id} />
			))}
		</>
	)
}

export default PostList
