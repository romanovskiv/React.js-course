const arr = ['foo', 'baz', 'bar'];

const List = () => {
  return (
    <>
      <h3>Mapped list:</h3>
      <ul>
        {arr &&
          arr.map((item) => {
            return <li key={item.id}>{item}</li>;
          })}
      </ul>
    </>
  );
};

export default List;
