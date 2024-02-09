  //Main-----------------Fetch JSON Api Data-------------------------------------------------------------------------------



  async function fetchdataStef() {
    try {
        const response = await fetch("https://kitch41.github.io/Webapps-From-Scratch-23-24/json/info.json");

        if (!response.ok) {
            throw new Error("Failed to get data");
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; 
    }
}

  async function fetchDataNicole() {

    const response = await fetch("https://kitch41.github.io/Webapps-From-Scratch-23-24/json/info.json");
    const data = await response.json();

    console.log(data);

    return data;

}

async function fetchdataStephan() {

    const response = await fetch("https://spacejump3.github.io/web-app-from-scratch-2324/app.json");
    const data = await response.json();

    console.log(data);

    return data;

}

async function fetchdataMitchel() {

    const response = await fetch("https://mitchel-ds.github.io/web-app-from-scratch-2324/docs/app.json");
    const data = await response.json();

    console.log(data);

    return data;

}
  
  


//Main-----------------Animal API Data-------------------------------------------------------------------------------




  async function animalapi() {

      const response = await fetch("https://emojihub.yurace.pro/api/all/category/animals-and-nature");
      const data = await response.json();
  
      // console log data from api
      console.log (data);

    }


    fetchdataStef()