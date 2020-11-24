import { Router, Link } from "@reach/router";
import Generate from "./pages/Generate";
import Home from "./pages/Home";
import Insights from "./pages/Insights";
import ViewSamples from "./pages/ViewSamples";

const App = () => (
	<Router>
		<Home path="/" />
    <ViewSamples path="/samples" />
    <Generate path="/generate" />
    <Insights path="/insights" />
	</Router>
);

export default App;
