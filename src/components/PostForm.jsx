import { useState } from 'react'

const PostForm = ({create}) => {
	const [post, setPost] = useState({ title: '', body: '' })

	const addNewPost = e => {
		e.preventDefault()

		const newPost = {
			...post,
			id: Date.now(),
		}

		create(newPost)
		setPost({ title: '', body: '' })
	}

	return (
		<form
			action=''
			className='flex flex-col w-full max-w-7xl mx-auto items-center justify-center gap-y-10 border-b pb-10'
		>
			<input
				onChange={e => setPost({ ...post, title: e.target.value })}
				value={post.title}
				type='text'
				className='text-3xl w-full max-w-100 border rounded-2xl px-3'
				placeholder='Введите заголовок поста.'
			/>
			<input
				onChange={e => setPost({ ...post, body: e.target.value })}
				value={post.body}
				type='text'
				className='text-3xl w-full max-w-100  border rounded-2xl px-3'
				placeholder='Введите контент поста.'
			/>
			<button
				onClick={addNewPost}
				type='submit'
				className='p-2 text-4xl bg-green-200 rounded-2xl'
			>
				Отправить
			</button>
		</form>
	)
}

export default PostForm
