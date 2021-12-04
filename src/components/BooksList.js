import noCover from './../img/no-cover.png'
import Authors from './Authors.js'
import Publication from './Publication.js'
import Page from './Page.js'
import { Link } from "react-router-dom";

function BooksList({books, nbResult, callApi, currentPage, setShowListing}) { 

    //retourne le nb de page a affiché
    const nbPages = nbResult%40>0 ? ~~(nbResult/40)+1 : ~~(nbResult/40);

    var pagination = [];
    for(var i = 1; i < nbPages+1; i++) {
        var active=false;
        if(i==currentPage)
            active=true;
        pagination.push(<Page key={i} index={i} callApi={callApi} active={active}/>);
    }

    return (
        <div>
            <div className="pagination">{pagination}</div>    
            <div className="box-content">
                {books.map(book => ( 
                    <Link to={`/book/${book.id}`} title={book.volumeInfo.title} className="element" key={book.id} onClick={() => setShowListing()}>
                        <img className="element-img" alt="icon" src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : noCover} /><br />
                        <span className="title">{book.volumeInfo.title}</span><br />
                        <Authors authors={book.volumeInfo.authors} /><br />
                        <Publication publication={book.volumeInfo.publishedDate} /><br />
                    </Link>
                ))}
            </div>
            <div className="pagination">{pagination}</div>    
        </div>

    );
}

export default BooksList;