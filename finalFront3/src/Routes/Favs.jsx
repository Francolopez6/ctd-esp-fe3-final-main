import Card from "../Components/Card";

const Favs = () => {

  const favoritos = JSON.parse(localStorage.getItem('favs')) || []

  return (
    <div className="section">
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {
          favoritos.map( favorito => (<Card key={favorito.id} {...favorito} /> )  )
        }
      </div>
    </div>
  );
};

export default Favs;
