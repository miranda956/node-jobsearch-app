module.exports= function isadmin(){
    if(req.user.isadmin)
    return next()
    res.redirect('/admin/login')

}
module.exports=function isapplicant(){
    if(req.authenticated())
    return next();
    res.redirect('/applicant/login')
}
module.exports=function isrecruiter(){
    if(req.authenticated())
    return next();
    res.redirect('/recruiter/login')
}