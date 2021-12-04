
function Page({index, callApi, active}) {

    //soumisison du formulaire call de l'api google pour recup les books
    const changePage = (page) => {
        callApi(page);
    };

    const getClass = () => {
        var name="page";
        if(active)
            name = name + " active";
        return name
    }

    // console.log()
    return (<div onClick={() => changePage(index)} className={getClass()} >{index}{active}</div>);
}

export default Page;