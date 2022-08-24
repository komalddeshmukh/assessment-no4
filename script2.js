//use the same rest countries and print all countries name,region,sub-region, population

let xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
 xhr.onload=function(){
    console.log("..connect..");
    let data=JSON.parse(xhr.responseText)

    for (const i of data) {
        console.log(`
        name:${i.name.common};
        region:${i.region};
        sub-region:${i.subregion};
        population:${i.population};
        
        `);
    }
 }