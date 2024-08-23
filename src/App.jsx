import { LandingPage } from "./pages/LandingPage/LandingPage";
import { ThemeProvider } from "styled-components";
import ChatPage from "./pages/Chat/ChatPage";
import { Header } from './pages/Header'

function App() {
    //<VisualizarAnuncio />
    //<ChatPage />
    <Header/>
    return (
        <>
            <LandingPage />;
        </>
    );
}

export default App;
