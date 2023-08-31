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
            .populate({
                path: 'Itinerary',
            })
            .populate('user');

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
            const oneCity = await City.findById(req.params.id)
            
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
            const cities = req.body.cities;
            
            for (const cityData of cities) {
                const newCity = await City.create(cityData);
            }
            
            return res.status(201).json({
                success: true,
                message: 'Cities created'
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error creating cities'
            });
        }
    }
    ,
    UpdateCity: async (req, res) => {
        try {
            await City.updateOne({_id: req.params.id}, req.body)
            
            return res.status(200).json({
                success: true,
                message: 'The city was succefully updated'
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error updating city'
            });
        }    
     }, 
    deleteCity: async (req, res) => {
        try {
            await City.deleteOne({_id: req.params.id})
            
            return res.status(200).json({
                success: true,
                message: 'The city was succefully deleted'
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error delete city'
            });
        }    
    }
}

export default controller;