function Store(props) {
  const { items, index, setIndex, addItemToCart } = props;

  const item = items.length > 0 && items[index];

  const style = { width: "250px", height: "250px" };

  function next() {
    const nextIndex = index + 1;
    setIndex(nextIndex);
  }

  function addToCart() {
    addItemToCart(item);
  }

  return (
    <div>
      <img src={item.image} style={style} />
      <h2>{item.title}</h2>
      <h3>Price: {item.price}</h3>
      <button onClick={next}> Next </button>
      <button onClick={addToCart}> Add to cart</button>
    </div>
  );
}

export default Store;
