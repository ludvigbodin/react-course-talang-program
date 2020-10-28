import CartItem from "./CartItem";

function Cart(props) {
  const { cart } = props;

  const uniqueItems = [...new Set(cart)];

  const uniqueItemsWithCount = uniqueItems.map(item => {
    return {
      ...item,
      count: cart.filter(cartItem => cartItem.id === item.id).length
    };
  });

  const cartItems = uniqueItemsWithCount.map(item => (
    <CartItem key={item.id} item={item} />
  ));

  return (
    <div>
      <h1> Cart </h1>
      {cartItems}
    </div>
  );
}

export default Cart;
