




/*


 * This function multiplies two numbers together.
 * @param {number} x - The first number to multiply.
 * @param {number} y - The second number to multiply.
 * @returns {number} The result of multiplying x and y.
 */
const axios = require('axios');

async function Off_grid_Data(){

  let resum = await pvgisData_solution(3000, 20000, 20000); 
 

  console.table(JSON.stringify(resum.data));

}

async function pvgisData_solution(peakPower, consumptionDay, batterysize){
  let lat =39;
  let lon =-0.50;

  var url_UBI = 'https://re.jrc.ec.europa.eu/api/SHScalc?lat='+lat+'&lon='+lon+'&peakpower='+peakPower+'&batterysize='+batterysize+'\
   &consumptionday='+consumptionDay+'&cutoff=20&angle=39';  

        const getResponse= axios ;
        return  getResponse
              .get(url_UBI)
              .then(this.solution)
              .catch((err) => console.log(err));
   }




Off_grid_Data();