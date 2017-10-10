 "use strict";

 exports.getotp = function(req, res){
   if(req.query.mobilenumber){
        res.send({"ResponseCode": "True"});
   }
 }

 exports.validateotp = function(req, res){
     var creds = req.body;
     if(creds.OTP == "123456" && creds.MobileNumber){
         res.send({"ResponseCode": "00"});
     }else{
        res.send({"ResponseCode": "02"}); 
     }
 }

 exports.createaccount = function(req, res){
     var creds = req.body;
     if(creds){
         res.send({"AccountNumber": "0123456789"});
     }
 }

 exports.savedetails = function(req, res){
     var creds = req.body;
     if(creds){
         res.send({"ResponseCode": "00"});
     }
 }

 exports.getuserdetails = function(req, res){
     if(req.query.mobilenumber === '08096499286'){
         res.send({"Title":"Mr.","FirstName":"Kolawole","MiddleName":"Idris",
"LastName":"Abobade","MotherMaidenName":"Omenai","DateOfBirth":"10-3-1987","BirthPlace":"Ilorin",
"Nationality":"Nigerian","OriginState":"Oyo","HomeAddress":"Road 22, House 7 Ikota Villa Estate",
"HomeTown":"Lagos","Phone":"08096499286","EMail":"kolawole.abobade@gmail.com",
"Alert":"True","SecurityQues1":"samplestring29","SOL":"725","OriginCity":"Lagos"});
     }
 }

 exports.branchlist = function(req, res){
     if(req.query.statename === 'LAGOS'){
         res.send([{"BranchName": "MISAU BRANCH","SolId": " 725"},{"BranchName": "TEJUOSHO MARKET QSP","SolId": " 621"}]);
     }
 }

exports.bvnvalidation = function(req, res){
    if(req.query.bvnnumber === '22222222246'){
        res.send({
            "BVNNumber": "22222222246",
            "FirstName": "Michael",
            "LastName": "Henderson",
            "Gender": "Male",
            "DateOfBirth": "10-Sep-1956",
            "Email": "Michaellhenderson@armyspy.com",
            "LevelOfAccount": "Level 2 - Medium Level Accounts",
            "LgaOfOrigin": "Ohimini",
            "LgaOfResidence": "Ardo Kola",
            "MaritalStatus": "Single",
            "MiddleName": "L",
            "NIN": "215-625-8750",
            "NameOnCard": "Michael Henderson",
            "Nationality": "Nigeria",
            "PhoneNumber1": "08013952719",
            "PhoneNumber2": "07014051129",
            "ResidentialAddress": "2922 Rocky Road",
            "StateOfOrigin": "benue state",
            "StateOfResidence": "taraba state",
            "Title": "Chief",
            "ResponseCode": "00",
            "ResponseMessage": "Successful"
        });
    }
}