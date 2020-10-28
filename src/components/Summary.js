function Summary(props) {
  const { cart } = props;

  const itemsCount = cart.length;
  const totalPrice = cart.reduce((sum, curr) => (sum += curr.price), 0);

  return (
    <div>
      <h1>Summary</h1>
      <p>Items: {itemsCount}</p>
      <p>Total price: {totalPrice}</p>
    </div>
  );
}

export default Summary;
