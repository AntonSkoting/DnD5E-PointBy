import './App.css';
import PointCalculator from './components/PointCalculator';

function App() {
  return (
    <div>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 className="header" style={{ margin: '0 0 30px 0' }} >
          Point-by Calculator
        </h1>
        <h6 className="header" style={{ fontWeight: 'normal' }}>
          <b>Abileties:</b><br />Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma.
        </h6>
        <PointCalculator />
      </div>
      <h3 className="credit">Art by Tyler Jacobson</h3>
    </div>
  );
}

export default App;
