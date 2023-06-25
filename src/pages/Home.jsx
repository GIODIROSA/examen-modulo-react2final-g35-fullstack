//style - css
import "../assets/css/home-pizzeria.css";

// import pizza card
import PizzaCard from "../components/PizzaCard";

const Home = () => {
  return (
    <>
      <div className="pizzeria-contenedor__galeria">
        <PizzaCard />
      </div>
    </>
  );
};

export default Home;
