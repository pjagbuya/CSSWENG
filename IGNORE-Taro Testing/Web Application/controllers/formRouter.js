const Handlebars = require('handlebars');
const express = require("express");
const formRouter = express.Router();

formRouter.get('/', function(req, resp){

    var formDetail =
    {
        academicYear : "AY2023-2024",
        formType : "Fund Transfer Form",
        formCode : "FT-001-0001-001"
    }

    resp.render('form',{
        formDetail : formDetail,
        layout: 'index',
        title: 'Form',
    });//resp render

});//router get

module.exports = formRouter