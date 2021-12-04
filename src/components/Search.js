import { useState } from 'react';
import { Link } from "react-router-dom";

function Search({setSearch, search, callApi}) {    
    const urlApi = 'https://www.googleapis.com/books/v1/volumes?key=AIzaSyDPrNxqtqqNviN8nJ75KTS-BWBWTagoRLY&maxResults=40&q='; //url api comprend api key

    //soumisison du formulaire call de l'api google pour recup les books
    const submitSearch = () => {
        callApi(1)
    };

    //si press enter dans l'input on appel submitSearch
    const submitSearchFromEnter = (e) => {
        if(e.key === "Enter")
            submitSearch();
    }
    
    return (
        <div>
            <input className="input-search" type="text" placeholder="Livres ..." onChange={e => setSearch(e.target.value)} onKeyPress={submitSearchFromEnter} /><br />
            <Link to="/"><button className="button-search" onClick={submitSearch}>Recherche</button></Link>
        </div>
    );
}

export default Search;