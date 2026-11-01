import Navbar from './components/Navbar';
import ProdutoGrid from './components/ProdutoGrid';

function App() {
    return (
        <div>
            <Navbar />
            <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <h1>Produtos da feira</h1>
                <p style={{ color: '#64748b' }}>
                    Direto do produtor local para a sua mesa.
                </p>
                <ProdutoGrid />
            </main>
        </div>
    );
}

export default App;