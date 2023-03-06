const axios = require('axios');
const { expect } = require('chai');
/*
 * Complete the function below.
 * Use console.log to print the result, you should not return from the function.
 */

async function getNumberOfMovies(substr) {
  /*
   * Endpoint: "https://jsonmock.hackerrank.com/api/moviesdata/search/?Title=substr"
   */
  let uri = 'https://jsonmock.hackerrank.com/api/moviesdata/search/?Title=';
  return axios.get(uri + substr).then((response) => {
    //console.log(response.data);
    return response.data.total;
  });
}

describe('getNumberOfMovies', () => {
  it('returns the number of movies with a title that includes the specified substring', async () => {
    const count = await getNumberOfMovies('man');
    expect(count).to.be.at.least(1);
  });
});
