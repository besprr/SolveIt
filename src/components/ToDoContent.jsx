import { useMemo, useState } from 'react'
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
	const [searchQuery, setSearchQuery] = useState('')

	const sortedPosts = useMemo(() => {
		if (selectedSort) {
			return [...posts].sort((a, b) =>
				a[selectedSort].localeCompare(b[selectedSort])
			)
		}

		return posts
	}, [selectedSort, posts])

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post =>
			post.title.toLowerCase().includes(searchQuery)
		)
	}, [searchQuery, sortedPosts])

	const createPost = newPost => {
		setPosts([...posts, newPost])
	}

	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	const sortPosts = sort => {
		setSelectedSort(sort)
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
			{
				<PostList
					remove={removePost}
					posts={sortedAndSearchedPosts}
					title={'Посты'}
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
				/>
			}
		</div>
	)
}

export default ToDoContent
