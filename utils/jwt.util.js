// Imports
var jwt= require('jsonwebtoken');


const JWT_SIGN_SECRET = '5sJQxZ2bp3wfmAr68928qVS333nG4TAuFHN8vY9iCc';
// Exported functions

module.exports = {
    generateTokenForUser: function(userData){
        return jwt.sign({
            userId: userData.id,
            isAdmin: userData.isAdmin
        },
        JWT_SIGN_SECRET,
        {
            expiresIn:'1h'
        });
    }
}