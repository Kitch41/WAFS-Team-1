//Main-----------------Fetch JSON Api Data-------------------------------------------------------------------------------



async function fetchdataStef() {
    try {
        const response = await fetch("https://kitch41.github.io/Webapps-From-Scratch-23-24/json/info.json");

        if (!response.ok) {
            throw new Error("Failed to get data");
        }

        const stef = await response.json();


        return stef;

    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; 
    }
}
fetchdataStef();

async function fetchDataNicole() {

    const response = await fetch("link");
    const data = await response.json();

    console.log(data);

    return data;

}
// fetchDataNicole();

async function fetchdataStephan() {
    try {
        const response = await fetch("https://spacejump3.github.io/web-app-from-scratch-2324/json/info.json");

        if (!response.ok) {
            throw new Error("Failed to get data for stephan");
        }

        const data = await response.json();

        return data;

    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; 
    }
}
// fetchdataStephan()

async function fetchdataMitchel() {

    const response = await fetch("https://mitchel-ds.github.io/web-app-from-scratch-2324/docs/app.json");
    const data = await response.json();

    console.log(data);

    return data;

}

// fetchdataStephan()
  
  
async function getData() {

    

    const stef = await fetchdataStef()
    const stephan = await fetchdataStephan()

    
    
    const mdata = {
        stef,
        stephan
    } 
    
    console.log(mdata);
}

getData();


//Main-----------------Animal API Data-------------------------------------------------------------------------------




  async function animalapi() {

      const response = await fetch("https://emojihub.yurace.pro/api/all/category/animals-and-nature");
      const animaldata = await response.json();
  
      // console log data from api
      console.log (animaldata);

    }

    animalapi();

