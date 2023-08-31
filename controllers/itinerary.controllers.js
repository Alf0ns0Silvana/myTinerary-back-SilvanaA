import Itinerary from "../models/itinerary.js";

const controller = {
    getItinerary: async (req, res) => {
        try {
           const itineraries = await Itinerary.find()
           .populate('city')
           .populate('user')

            if(itineraries.length > 0) {
                return res.status(200).json({
                    success:true,
                    itineraries: itineraries
                })
            }
            return res.status(404).json({
                success:false,
                message: "No itineraries found."
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success:false,
                message:'Error getting itineraries.'
            })
        }
    },

    getItineraryById: async (req, res) => {
        try {
            const oneItinerary = await Itinerary.findById(req.params.id)
            
            if(oneItinerary) {
                return res.status(200).json({
                    success:true,
                    itinerary: oneItinerary
                })
            }
            return res.status(404).json({
                success:false,
                message:'Error finding itinerary'
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success:false,
                message:'Error getting itinerary'
            })
        }
    },
    
    getItineraryByCityName: async (req, res) => {
        try {
            const cityName = req.params.cityName;
            const itineraries = await Itinerary.find({ city: cityName }).populate('cities');
       
        if (itineraries.length > 0) {
            return res.status(200).json({
                success: true,
                itineraries: itineraries
            });
        }
            return res.status(404).json({
              success: false,
              message: `No itineraries found for city '${cityName}'.`
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error getting itineraries for that city.'
            });
        }
    },

    createItinerary: async (req, res) => {
        try {
            const itineraryData = req.body.itineraries;
        
            for (const itinerary of itineraryData) {
                await Itinerary.create(itinerary);
            } 
            
            return res.status(201).json({
                success: true,
                message: 'Itinerary created'
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error creating itinerary'
            });
        }
    },

    updateItinerary: async (req, res) => {
        try {
            await Itinerary.updateOne({_id: req.params.id}, req.body)
            
            return res.status(200).json({
                success: true,
                message: 'The itinerary was succefully updated'
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error updating itinerary'
            });
        }    
     }, 

    deleteItinerary: async (req, res) => {
        try {
            await Itinerary.deleteOne({_id: req.params.id})
            
            return res.status(200).json({
                success: true,
                message: 'The itinerary was succefully deleted'
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error delete itinerary'
            });
        }    
    }
}

export default controller;
