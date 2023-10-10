/**
 * @group integration
 */

const fetch = require('node-fetch');

describe('Movie API', () => {
  it('should fetch data from the API', async () => {
    const response = await fetch('https://www.omdbapi.com/?apikey=57a921d4&s=Naruto');
    const data = await response.json();
    
    expect(response.status).toBe(200);
    expect(data.Response).toBe('True');
    expect(data.Search).toBeDefined();
  });
});
