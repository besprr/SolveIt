const PostFilter = ({ options, defaultValue, value, onChange }) => {
	return (
		<div className='flex justify-start w-full'>
			<select
				className='text-2xl'
				name=''
				id=''
				value={value}
				onChange={event => onChange(event.target.value)}
			>
				<option disabled value=''>
					{defaultValue}
				</option>
				{options.map(option => (
					<option value={option.value} key={option.value}>
						{option.name}
					</option>
				))}
			</select>
		</div>
	)
}

export default PostFilter
