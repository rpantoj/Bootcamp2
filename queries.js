/* Add all the required libraries*/

var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

mongoose.set('useFindAndModify', false);
mongoose.connect(config.db.uri, { useNewUrlParser: true, useUnifiedTopology: true });

/* Connect to your database using mongoose - remember to keep your key secret*/

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
    /* 
      Find the document that contains data corresponding to Library West,
      then log it to the console. 
     */
    Listing.find({ name: 'Library West' }, function(err, doc) {
        if (err)
            return err;
        console.log(doc);
    });

};
var removeCable = function() {
    /*
      Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
      on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
      and remove this listing from your database and log the document to the console. 
     */
    Listing.findOneAndDelete({ code: 'CABL' }, function(err, doc) {
        if (err)
            return err;
        console.log(doc);
    });
};
var updatePhelpsMemorial = function() {
    /*
      Phelps Lab address is incorrect. Find the listing, update it, and then 
      log the updated document to the console. 
      
      Correct Address: 1953 Museum Rd, Gainesville, FL 32603
     */

    var phelps;

    Listing.findOneAndUpdate({ name: 'Phelps Laboratory' }, { address: '1953 Museum Rd, Gainesville, FL 32603' }, { new: true }, function(err, doc) {
        if (err)
            return err;
        console.log(doc);
    });
    // Listing.find({ name: 'Phelps Laboratory' }, function(err, doc) {
    //     console.log(doc);
    // });

};
var retrieveAllListings = function() {
    /* 
      Retrieve all listings in the database, and log them to the console. 
     */

    Listing.find(function(err, doc) {
        if (err)
            return err;
        console.log(JSON.stringify(doc, null, 1));
    });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();