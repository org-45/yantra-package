import Promise from 'bluebird';
import https from 'https';

function getData(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (error) {
          reject(error);
        }
      });

      response.on('error', (error) => {
        reject(error);
      });
    });
  });
}

async function getUserData(url) {
  try {
    const data = await getData(url);
		return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

export { getUserData as default };
