const fs = require('fs');

const csv = require('csvtojson');

console.log('Parsing CSV...');

csv()
  .fromFile('./us-colleges.csv')
  .then(items => {
    const colleges = [];

    items.forEach(item => {
      const name = item.institution.name;
      const zip_code = item.HD2013.ZIP.code;
      const state_name = item.HD2013.State.abbreviation;
      const state_abbreviation = item.state.x;
      const city = item.city.x;
      const latitude = parseFloat(item.latitude);
      const longitude = parseFloat(item.longitude);
      const college = {
        name,
        zip_code,
        state_name,
        state_abbreviation,
        city,
        latitude,
        longitude,
      };

      colleges.push(college);
    });

    console.log(`Count: ${colleges.length}`);

    console.log('Writing parsed data to us-colleges.json');
    fs.writeFileSync('us-colleges.json', JSON.stringify(colleges), 'utf8');
  });
