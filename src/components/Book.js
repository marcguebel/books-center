import { useParams } from 'react-router-dom';
import noCover from './../img/no-cover.png'
import { Link } from "react-router-dom";

function Book({books ,setShowListing}) { 
    const { id } = useParams();
    const book = books.find(b => b.id === id);     //recherche du bon livre
    
    if(book){
        return ( 
            <div className="single-page">
            {book.volumeInfo.ratingsCount }
                <br />
                <Link className="title back" to="/" onClick={ () => setShowListing(true) } > Retour</Link><br />
                <div className="primary-content">
                    <img className="img-thumbnail" alt="icon" src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : noCover} />
                    <div>
                        <p><span className="title name">{book.volumeInfo.title}</span></p> 
                        <p><span className="title">Autheur : </span>{book.volumeInfo.authors}</p>
                        <p><span className="title">Description : </span>{book.volumeInfo.description ? book.volumeInfo.description : "pas de description ..." } </p>
                    </div>
                </div><br /><br />
                <div className="secondary-content">
                    <p><span className="title name">Informations complémentaires : </span></p>
                    {book.accessInfo.country ? <p><span className="title">Langue : </span>{book.accessInfo.country}</p> : null}
                    <p><span className="title">Identifiant unique : </span>{id}</p>
                    {book.volumeInfo.subTitle ? <p><span className="title">Sous-titre : </span>{book.volumeInfo.subTitle}</p> : null}
                    {book.volumeInfo.pageCount ? <p><span className="title">Nombre de pages : </span>{book.volumeInfo.pageCount}</p> : null}
                    {book.volumeInfo.categories ? <p><span className="title">Catégorie : </span>{book.volumeInfo.categories}</p> : null}
                    {book.volumeInfo.publishedDate ? <p><span className="title">Date de publication : </span>{book.volumeInfo.publishedDate}</p> : null}
                </div><br /><br />
                <div className="secondary-content">
                    <p><span className="title name">Informations Google : </span></p>
                    <p><span className="title">Note moyenne avis google : </span>{book.volumeInfo.averageRating ? book.volumeInfo.averageRating : 0}</p>
                    <p><span className="title">Nombre d'avis google : </span>{book.volumeInfo.ratingsCount ? book.volumeInfo.ratingsCount : 0}</p>
                    {book.volumeInfo.canonicalVolumeLink ? <p><span className="title">Lien google livre : </span> <a target="_blank" rel="noreferrer" href={book.volumeInfo.canonicalVolumeLink}>ici</a></p> : null}
                    {book.volumeInfo.previewLink ? <p><span className="title">Apercu : </span> <a target="_blank" rel="noreferrer" href={book.volumeInfo.previewLink}>ici</a></p> : null}
                </div>
            </div>
        );
    }
    else
        return (<div>Il n'y a rien ici.</div>)
}

export default Book;