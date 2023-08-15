const controller = {
    getCities: (req, res) => {
        res.json({
            cities: [
                {
                    id: 1,
                    name: "City Name 1",
                    country: "Country Name 1",
                    descripcion: "Description of City 1",
                    image: "url-to-image-1.jpg"
                },
                {
                    id: 2,
                    name: "City Name 2",
                    country: "Country Name 2",
                    descripcion: "Description of City 2",
                    image: "url-to-image-2.jpg"
                },
            ]
        });
    },
    postCities: () => {},
    deleteCities: () => {},
}

export default controller;