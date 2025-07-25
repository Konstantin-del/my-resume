export async function getWeatherForecast<T>(region: string): Promise<T> {
  const key = process.env.REACT_APP_WEATHER_API_KEY;

  const uri = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${region}&days=5`;

  const response = await fetch(uri);
  if (!response.ok) throw new Error("http status code" + response.statusText);
  return await response.json();
}
