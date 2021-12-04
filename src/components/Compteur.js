
function Compteur({nbResult}) { 

    if(nbResult>0)
        return (<p className="compteur">Il y a <span className="title">{nbResult}</span> résultats.</p>);
    else
        return (<span></span>)
}

export default Compteur;