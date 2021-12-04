import './../css/App.css';
import Search from './Search.js'
import BooksList from './BooksList.js'
import Book from './Book.js'
import About from './About.js'
import Aside from './Aside.js'
import Compteur from './Compteur.js'
import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import loader from './../img/loader.gif'

function App() {    
    const [books, setBooks] = useState([]); //books comming from api
    const [showListing, setShowListing] = useState(true); //affichage de la list, necessaire car on ne passe pas par une url distincte (sur l'url "/" le component peux etre afficher ou non)
    const [nbResult, setNbResult] = useState(0);
    const [displayLoader, setIsLoaded] = useState(false); //loader 
    const [search, setSearch] = useState(""); //champ recherche
    const [currentPage, setCurrentPage] = useState(1); //champ recherche

    //appel a l'api de google book avec le bon start index pour la pagination
    function callApi(page){
        var start = (page-1)*40;
        var urlApi = "https://www.googleapis.com/books/v1/volumes?key=AIzaSyDPrNxqtqqNviN8nJ75KTS-BWBWTagoRLY&maxResults=40&startIndex="+start+"&q=";
        setIsLoaded(true);
        setShowListing(false);
        fetch(urlApi+'"'+search+'"').then(res => res.json()).then((result) => {
            setIsLoaded(false);
            setBooks(result.items);
            setShowListing(true);
            setNbResult(result.totalItems);
            setCurrentPage(page);
        },(error) => {
            console.log(error);
        });
    }

    return (
        <div className="App">
            <BrowserRouter>
                <div className="box-header">
                    <nav className="menu">
                        <Link to="/" onClick={() => setShowListing(true)}>Home</Link><br />
                        <Link to="/about" onClick={() => setShowListing(false)}>About</Link>
                    </nav>
                    <Search callApi={callApi} displayLoader={displayLoader} search={search} setSearch={setSearch}/>
                    <Aside />
                </div>
                <Routes>
                    <Route path="/about" element={<About />}   />
                    <Route path={'/book/:id'} element={<Book books={books} setShowListing={setShowListing} />} />
                </Routes>
                { showListing ? <Compteur nbResult={nbResult} /> : null }
                { showListing ? <BooksList callApi={callApi} books={books} nbResult={nbResult} currentPage={currentPage} setShowListing={setShowListing} /> : null }
                { displayLoader ? <div className="div-loader"><img src={loader} alt='loader' className='loader-img'  /></div> : null }
            </BrowserRouter>
        </div>
    );
}

export default App;