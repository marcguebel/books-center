
function Publication({publication}) {  
    const dateFormat = new Date(publication);

    if(!isNaN(dateFormat)){
        var day=dateFormat.getDate().toString();
        var month=(dateFormat.getMonth()+1).toString();
        var year=dateFormat.getFullYear().toString();

        if(month.length===1)
            month="0"+month;

        if(day.length===1)
            day="0"+day;

        return (
            <span><span className="title">Date :</span> {day + "/" +month + "/" + year}</span>
        );
    }
    else
        return (<span></span>);
}

export default Publication;