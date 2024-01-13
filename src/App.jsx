import { Container } from 'react-bootstrap';
import 'react-piano/dist/styles.css';
import './styles/estilos.css';
import { BasicPiano } from './Components/BasicPiano';
import { ResponsivePiano } from './Components/ResponsivePiano';
import './styles/estilosPiano.css';

function App() {
	//<BasicPiano />
	//<ResponsivePiano />

	return (
		<Container>
			<div id='Contenedor'>
				<div>
					<ResponsivePiano className='PianoDarkTheme' />
				</div>
			</div>
		</Container>
	);
}

export default App;
