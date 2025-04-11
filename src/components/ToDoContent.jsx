import { useState } from 'react'
import PostFilter from './PostFilter'
import PostForm from './PostForm'
import PostList from './PostList'

const ToDoContent = () => {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'Пост 1', body: 'Мой первый пост' },
		{ id: 2, title: 'Пост 2', body: 'Мой второй пост' },
		{ id: 3, title: 'Пост 3', body: 'Мой третий пост' },
		{ id: 4, title: 'Пост 4', body: 'Мой четвертый пост' },
	])

	const [selectedSort, setSelectedSort] = useState('')

	const createPost = newPost => {
		setPosts([...posts, newPost])
	}

	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	const sortPosts = sort => {
		setSelectedSort(sort)
		setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
	}

	return (
		<div className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-y-10 pb-10'>
			<PostForm create={createPost} />
			<PostFilter
				value={selectedSort}
				onChange={sortPosts}
				defaultValue={'Сортировка по'}
				options={[
					{ value: 'title', name: 'По названию' },
					{ value: 'body', name: 'По описанию' },
				]}
			/>
			{posts.length === 0 ? (
				<h1 className='text-9xl text-red-500'>Постов нет</h1>
			) : (
				<PostList remove={removePost} posts={posts} title={'Посты'} />
			)}
		</div>
	)
}

export default ToDoContent
