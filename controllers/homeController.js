
class HomeController {


    homeView(req, res) {
        res.render('home/index.ejs', {});
    }
}


module.exports = HomeController;