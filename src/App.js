import CartForm from './components/CarForm'
import CarList from './components/CarList'
import CarSearch from './components/CarSearch'
import CarValue from './components/CarValue'

const App = () => {
	return (
		<div className="container is-fluid">
			<CartForm />
			<CarSearch />
			<CarList />
			<CarValue />
		</div>
	)
}

export default App
