const User = require('../models/user.model.js');
const userOrAdmin = async (req,res,next)=>{
    try {
        
        const name =req.params.name
        const user = await User.findOne({ username : name })

        if(user.role !== 'admin'){
            return res.status(400).json({ msg:`Access denied : ${name} do not have rights.` })
        }

        next();
    } catch (err) {
        return res.status(500).json({msg:err.message})
    }
}

module.exports = userOrAdmin;