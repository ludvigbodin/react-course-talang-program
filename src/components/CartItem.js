function CartItem(props) {
  const { item } = props;

  return (
    <div>
      <img src={item.image} style={{ width: "100px", height: "100px" }} />
      <p>{item.title}</p>
      <p>{item.price}</p>
      <p>{item.count}</p>
    </div>
  );
}

export default CartItem;
