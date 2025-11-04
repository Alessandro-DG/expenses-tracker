function Welcome({userName, total}) {
  return (<>
    <h2>Benvenuto {userName}</h2>
    <p>
      Hai speso €{total}
    </p>
  </>);
}

export default Welcome;