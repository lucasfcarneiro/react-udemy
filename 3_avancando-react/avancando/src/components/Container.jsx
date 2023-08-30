const Container = ({children, myValue}) => {

  return (
    <div>
        <h2>Este é o titulo do Container</h2>
        {children}
        <h2>Valor props: {myValue}</h2>
    </div>
  )
}

export default Container;