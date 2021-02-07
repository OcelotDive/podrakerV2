import {useSelector, useDispatch} from 'react-redux';
import './App.css';
import TestConstants from './constants/testConstants';
import Test from './components/Test';
import Header from './components/Header';
import Container from '@material-ui/core/Container';
import SearchComponet from './components/SearchComponent';




function App() {
  console.log(TestConstants.TEST)
  const dispatch = useDispatch();
  dispatch({type: TestConstants.TEST, response: 233 })



  return (
    <div className="App">
      <Header />
    
      
      <SearchComponet />

    </div>
  );
}

export default App;
