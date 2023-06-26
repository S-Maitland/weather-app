import axios from 'axios';

export async function getLocation() {
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;

      const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
      const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

      await axios
        .get(geocodingUrl)
        .then((response) => {
          const addressComponents = response.data.results[0].address_components;
          const cityComponent = addressComponents.find((component) =>
            component.types.includes('postal_town')
          );

          if (cityComponent) {
            console.log(cityComponent.long_name);
            return cityComponent.long_name;
          }
        })
        .catch((error) => {
          console.error('Error fetching city: ', error);
        });
    }, (error) => {
      console.error('Error getting location:', error);
    });
}
