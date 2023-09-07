const express = require("express");
const bodyParser = require("body-parser");
const date= require(__dirname +"/date.js");

// console.log(date());

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

const items=[];
const workItems=[];
app.get("/", function (req, res) {

  

  


    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday"
    //         break;
    //     case 1:
    //         day = "Monday"
    //         break;
    //     case 2:
    //         day = "Tuesday"
    //         break;
    //     case 3:
    //         day = "Wednesday"
    //         break;
    //     case 4:
    //         day = "Thursday"
    //         break;
    //     case 5:
    //         day = "Friday"
    //         break;
    //     case 0:
    //         day = "Saturday"
    //         break;

    //     default:
    //         console.log("Error :Currentday is equal to :" + currentDay);
    // }

    // if(currentDay==6 || currentDay==0){
    //     // res.write("<h1>Yay! it's the Weekend</h1>");
    //     day="weekend";
    //     // res.sendFile(__dirname+"/weekend.html")

    // }

    // else{
    //     // res.write("<p>It's Not Weekend</p>");
    //     // res.write("<h1>Boo! I have to work!</h1>");
    //     // res.send(); // After Using write Always use send ---------------------------------------
    //     day="weekday"
    //     // res.sendFile(__dirname+"/weekday.html")  // Need to use Templating
    //     // res.render('list', {kindofday:day});
    // }

    res.render('list', { listTitle: date.getDate(),newlistitems : items });

})

app.get('/work',function (req,res) {
    res.render('list', { listTitle:"Work List",newlistitems : workItems });
    
});

app.post('/work',function(req,res){
    let item= req.body.newItem;

    workItems.push(item)
    // console.log(item);
    // res.render('list',{newlistitem : item});
//  if doing from here then in html html dont know the newlistitem  that why sending from top
    res.redirect("/");

});

app.post("/",function(req,res){

    let item= req.body.newItem;;
    if (req.body.list == "Work") {
        workItems.push(item);
        res.redirect('/work');
    }else{
        items.push(item);
        res.redirect('/')
    }

    // console.log(item);
    // res.render('list',{newlistitem : item});
//  if doing from here then in html html dont know the newlistitem  that why sending from top
    
})

app.get('/about',function (req, res) {
        res.render("about");
    })

app.listen(process.env.port || 3000, function (req, res) {
    console.log("Server is up and Running!! http://localhost:3000/");
})