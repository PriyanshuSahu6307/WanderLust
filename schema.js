const Joi = require('joi');

   module.exports.listingSchema  =Joi.object({
          listing: Joi.object({
                    title: Joi.object().required(),
                    description: Joi.object().required(),
                    location: Joi.object().required(),
                    country: Joi.object().required(),
                    country: Joi.number().required() .min(0),
                    image: Joi.string().allow("" ,null),
          }).required(),
});

module.exports.reviewSchema=Joi.object({
   review:Joi.object({
   review: Joi.number().required().min(1).max(5),
   comment:Joi.string().required(),
}).required(),
});