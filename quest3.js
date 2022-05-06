let request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();

request.onload=()=>{
    console.log(request.response);
    let a=JSON.parse(request.response);
    for(let i=0;i<a.length;i++){
        console.log(a[i].flag);
        console.log(a[i].name);
        console.log(a[i].region);
        console.log(a[i].subregion);
        console.log(a[i].population);
    }

}
request.onerror=()=>{
    console.log("Something went wrong");
}