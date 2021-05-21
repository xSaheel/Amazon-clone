import AddItem from "../UI//Product";

const MyProducts = () => {

    const products = [
      {
        id: Math.random(1000000),
        name: 'Sony Bravia 4K TV',
        price: 2500,
        quantity: 1
      },
      {
        id: Math.random(1000000),
        name: 'IPhone 12 Pro',
        price: 1300,
        quantity: 1
      },
      {
        id: Math.random(1000000),
        name: 'Honor Play X',
        price: 699,
        quantity: 1
      },
      {
        id: Math.random(1000000),
        name: 'Acer Predator Helio 300',
        price: 1100,
        quantity: 1
      },
      {
        id: Math.random(1000000),
        name: 'Whirlpool 3D Refridgerator',
        price: 1800,
        quantity: 1
      },
    ];

    products.sort((itemA, itemB) => (itemA.price >= itemB.price ? 1 : -1));

    return (
      <div className="cart-container">
        <h1>View Products</h1>
        {products.map(item => <AddItem key={item.id} item={item}/>)}
      </div>
    )
  }
  
  export default MyProducts;