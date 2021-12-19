const restrict = require('../middlewares/user.mdw');
const homepage = require('../controllers/homepage.controller');



module.exports = (app) =>{
    app.get('/',hompage.homepage)
    
}