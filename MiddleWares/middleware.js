module.exports= reqFilter=(req, res, next) =>{
    if(!req.query.age){
        res.send("Please provide your age")
    }else if(req.query.age<18){
        res.send("Since you are under aged,You cannot access this page")
    }else{
        next();
    }
    
}