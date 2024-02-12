//Main-----------------Fetch JSON Api Data-------------------------------------------------------------------------------



async function fetchdataStef() {
    try {
        const response = await fetch("https://kitch41.github.io/Webapps-From-Scratch-23-24/info.json");

        if (!response.ok) {
            throw new Error("Failed to get data from stef");
        }

        const data = await response.json();


        return data;

    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; 
    }
}
fetchdataStef();

async function fetchdataNicole() {
    try {
        const response = await fetch("https://kaboutergeitje.github.io/web-app-from-scratch-2324/info.json");

        if (!response.ok) {
            throw new Error("Failed to get data from nicole");
        }

        const data = await response.json();


        return data;

    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; 
    }
}
fetchdataNicole();

async function fetchdataStephan() {
    try {
        const response = await fetch("https://spacejump3.github.io/web-app-from-scratch-2324/info.json");

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

async function fetchdataMitchel() {
    try {
        const response = await fetch("https://mitchel-ds.github.io/web-app-from-scratch-2324/info.json");

        if (!response.ok) {
            throw new Error("Failed to get data for mitchel");
        }

        const data = await response.json();

        return data;

    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; 
    }
}

fetchdataMitchel();


  
async function getData() {

    

    const stef = await fetchdataStef();
    const stephan = await fetchdataStephan();
    const mitchel = await fetchdataMitchel();
    const nicole = await fetchdataNicole();
    
    
    const mdata = {
        stef,
        stephan,
        mitchel,
        nicole
    } ;
    
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

