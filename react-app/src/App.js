import GlobalStyle from "./theme/globalStyles";
import NavBar from "./containers/NavBar";
import Home from "./containers/Home";
import About from "./containers/About";
import Work from "./containers/Work";
import Contact from "./containers/Contact";
import Content from "./common/Content";

const App = () => {
	return (
		<div className="App">
			<GlobalStyle />
			<NavBar />
			<Content>
				<Home />
				<About />
				<Work />
				<Contact />
			</Content>
		</div>
	);
}

export default App;
