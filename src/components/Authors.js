
function Authors({authors}) {  

    if(authors){
        return (
            <span><span className="title">Auteur :</span> {authors[0]}</span>
        );
    }
    else
        return (<span></span>);
}

export default Authors;