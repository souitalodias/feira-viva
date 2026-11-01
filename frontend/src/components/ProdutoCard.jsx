export default function ProdutoCard({ produto }) {
    return (
        <article style={{
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '1rem',
            background: 'white'
        }}>
            <h3 style={{ margin: '0 0 0.5rem' }}>{produto.nome}</h3>
            <p style={{ color: '#64748b', margin: '0 0 0.5rem', fontSize: '0.9rem' }}>
                {produto.descricao}
            </p>
            <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#15803d', margin: '0' }}>
                R$ {Number(produto.preco).toFixed(2)}
            </p>
            <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '0.5rem 0 0' }}>
                Estoque: {produto.estoque}
            </p>
        </article>
    );
}