export async function getStocks(symbol) {
  const promise = fetch(
    `http://api.marketstack.com/v1/eod?access_key=c76ba321491d62e2d69f288b68319269&symbols=${symbol}&date_from=2021-04-26&date_to=2021-05-06`
  );
  const response = await promise;
  if (response.status === 404) {
    return [];
  }
  const data = await response.json();
  console.log(data);
  return data.data;
}
