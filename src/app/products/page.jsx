export default async function ProductsPage() {
  const response = await fetch('https://ve.dolarapi.com/v1/dolares');
  const products = await response.json();
  console.log("Reponse: ", response, products)

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h2>{product.fuente}</h2>
          <p>{product.promedio}</p>
        </li>
      ))}
    </ul>
  );
}