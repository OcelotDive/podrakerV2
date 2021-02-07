import {useSelector, useDispatch} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import TestConstants from './constants/testConstants';
import Header from './components/Header';
import SearchComponet from './components/SearchComponent';
import MainPage from './MainPage';




function App() {
  console.log(TestConstants.TEST)
  const dispatch = useDispatch();
  dispatch({type: TestConstants.TEST, response: 233 })



  return (
    <BrowserRouter  basename={process.env.PUBLIC_URL}>
    <div className="App">
      <MainPage>
      <Header />
    
      
      <SearchComponet />
      </MainPage>
    </div>
    </BrowserRouter>
  );
}

export default App;
