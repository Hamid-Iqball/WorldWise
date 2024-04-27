import styles from "./CitesList.module.css";
import Spinner from "./Spinner";
import CityItem from "./cityItem";

function CitesList({ cities, isLoading }) {
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
