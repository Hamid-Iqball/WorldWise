import styles from "./CitesList.module.css";
import Spinner from "./Spinner";
import CityItem from "./cityItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
function CitesList() {
  const { cities, isLoading } = useCities();
  if (!cities.length)
    return (
      <Message message="Add your first city by clickin on a city on the map" />
    );

  if (isLoading) return <Spinner />;
  return (
    <ul className={styles.CitesList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CitesList;
