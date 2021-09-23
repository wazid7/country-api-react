import './App.css';
import Countries from './componants/countries/Countries';


function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

















// function Countries() {
//   const [countries, setCountry] = useState([])
//   useEffect(() => {
//     fetch('https://raw.githubusercontent.com/ProgrammingHero1/rest-countries-data/main/coutries.JSON?fbclid=IwAR3OBkU2LxWWbp58v9r5oE0ve7XgdnomE2baUH1xDv6gzrjvXzU1KO4ju8g')
//       .then(res => res.json())
//       .then(data => setCountry(data))
//   }, [])
//   return (
//     <div>
//       <h2>Country List </h2>
//       <h4>Available Country : {countries.length}</h4>
//       {
//         countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
//       }
//     </div>
//   )
// }
// function Country(props) {
//   return (
//     <div>
//       <h2>Name:{props.name}</h2>
//       <p>Capital:{props.capital}</p>
//     </div>
//   )
// }
export default App;
