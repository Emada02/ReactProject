export const exerciseOptions = {
    method: 'GET',
    
    headers: {
       'x-rapidapi-key': 'caf06f839cmshc61b9875defc650p15620ejsn28fa19c84bfa',
       'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };


export const fetchData=async(url,options)=>{
    const response=await fetch(url,options);//fetch-a build in js function that makes network requests and returns a promise
    const data=await response.json();//promises-objects representing the eventual results of an asynchronous operation
    return data;
}