const API_ENDPOINT="https://randomuser.me/api/?results=10"

/**
* Get the users from the API endpoint and pass to a callback function
* 
* @param {function} callback - The callback function that will consumes the data
* @return {null} 
*/
function getUsersAysnc(callback)
{
    axios.get(API_ENDPOINT).then(function(response){
        // if callback is not null
        if (callback) {
            callback(response.data);
        }
    })
}

/**
 * Calculate BMI from the given weight and height
 * 
 * Precondition:
 * weight - must be larger than 0
 * height - must be larger than 0
 * 
 * Postcondition:
 * bmi - must be larger than 0
 * 
 * @param {float} weight - weight of the person
 * @param {flot} height - height of the person
 * @return {float} - the calculated BMI
 */
function calculateBMI(weight, height)
{
    let bmi = weight / (height * height)
    return bmi
}