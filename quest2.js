let request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();

request.onload=()=>{
    console.log(request.response);
    let a=JSON.parse(request.response);
    for(let i=0;i<a.length;i++){
        console.log(a[i].flag);
    }

}
request.onerror=()=>{
    console.log("Something went wrong");
}
