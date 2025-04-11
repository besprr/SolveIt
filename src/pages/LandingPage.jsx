import Header from '../components/Header'
import MainContent from '../components/MainContent'
import ToDoContent from '../components/ToDoContent'

const LandingPage = () => {
	return (
		<>
			<Header />
			<MainContent city='London'/>
			<ToDoContent />
		</>
	)
}

export default LandingPage
