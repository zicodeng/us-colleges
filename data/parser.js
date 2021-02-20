const fs = require('fs');

const csv = require('csvtojson');

console.log('Parsing CSV...');

csv()
  .fromFile('./us-colleges.csv')
  .then(items => {
    const colleges = items.map(({ latitude, longitude, ...rest }) => ({
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      ...rest,
    }));
    console.log(`Count: ${colleges.length}`);
    console.log('Writing parsed data to us-colleges.json');
    fs.writeFileSync('us-colleges.json', JSON.stringify(colleges), 'utf8');
  });
