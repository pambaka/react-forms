type Data = { name: string; code: string }[];

async function getCountries(): Promise<string[]> {
  const countries: string[] = [];

  await fetch('src/data/countries.json')
    .then((res) => {
      if (res.ok) return res.json();
      else return [];
    })
    .then((data: Data) => {
      if (data.length !== 0)
        data.forEach((country) => {
          countries.push(country.name);
        });
    });

  return countries;
}

export default getCountries;
