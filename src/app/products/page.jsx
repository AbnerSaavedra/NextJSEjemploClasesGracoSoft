

export default async function ProductsPage() {
  const response = await fetch('https://api.restful-api.dev/objects');
  const products = await response.json();
  console.log("Reponse: ", response, products)

  return (
    <ul className='list-group'>
      {products.map((product) => (
        <li key={product.id} className='list-group-item'>
          <h5>{product.name}</h5>
          <p>{product.data?.color}</p>
        </li>
      ))}
    </ul>
  );
}