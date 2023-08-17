import City from "../models/city.js";
const controller = {
    getCities: async (req, res) => {
        
        let queries = {}

        if (req.query.name) {
            queries.name = new RegExp(`^${req.query.name}`,`i`)
        }
        if (req.query.country) {
            queries.country = new RegExp(`^${req.query.country}`,`i`)
        }

        try {
           const cities = await City.find(queries)

            if(cities.length > 0) {
                return res.status(200).json({
                    success:true,
                    cities: cities
                })
            }
            return res.status(404).json({
                success:false,
                message: "Sorry, not match cities."
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success:false,
                message:'Error getting cities'
            })
        }
    },
    getCityById: async (req, res) => {
        try {
            const oneCity = await City.findById(req.params.id).populate('user')
            
            if(oneCity) {
                return res.status(200).json({
                    success:true,
                    city: oneCity
                })
            }
            return res.status(404).json({
                success:false,
                message:'Error finding city'
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success:false,
                message:'Error getting city'
            })
        }
    },
    createCity: async (req, res) => {
        try {
            const newCity = await City.create(req.body); 
            return res.status(201).json({
                success:true,
                message:'City created'
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success:false,
                message:'Error creating city'
            })
        }
     }
    //,
    // postCities: () => {},
    // deleteCities: () => {},
}

export default controller;