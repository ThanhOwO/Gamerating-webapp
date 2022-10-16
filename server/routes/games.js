const router = require("express").Router();
const Game = require("../models/Game")
const verify = require("../middleware/verifyToken");

//Create ---------------------------------------------------------------------------------------------------------

router.post("/", verify, async(req, res) => {
    if(req.user.isAdmin){
        const newGame = new Game(req.body)

        try {
            const saveGame = await newGame.save()
            res.status(201).json(saveGame)
        } catch (error) {
            res.status(500).json(error)
        }
    }else{
        res.status(403).json("You are not allowed!")
    }
})

//Update ---------------------------------------------------------------------------------------------------------

router.put("/:id", verify, async(req, res) => {
    if(req.user.isAdmin){
        try {
            const updatedGame = await Game.findByIdAndUpdate(req.params.id, {
                $set:req.body
            }, {new:true})
            res.status(200).json(updatedGame)
        } catch (error) {
            res.status(500).json(error)
        }
    }else{
        res.status(403).json("You are not allowed!")
    }
})

//Delete ---------------------------------------------------------------------------------------------------------

router.delete("/:id", verify, async(req, res) => {
    if(req.user.isAdmin){
        try {
             await Game.findByIdAndDelete(req.params.id)
            res.status(200).json("Game has been deleted...")
        } catch (error) {
            res.status(500).json(error)
        }
    }else{
        res.status(403).json("You are not allowed!")
    }
})

//Get ---------------------------------------------------------------------------------------------------------

router.get("/find/:id", verify, async(req, res) => {
        try {
             const game = await Game.findById(req.params.id)
            res.status(200).json(game)
        } catch (error) {
            res.status(500).json(error)
        }
    }
)

//Get random game ---------------------------------------------------------------------------------------------------------

router.get("/random", verify, async(req, res) => {
    const type = req.query.type
    let game;
    try {
        if(type === "series"){
            game = await Game.aggregate([
                {$match: {isSeries: true}},
                {$sample: {size: 1}},
            ])
        }else{
            game = await Game.aggregate([
                {$match: {isSeries: false}},
                {$sample: {size: 1}},
            ])
        }
        res.status(200).json(game)
    } catch (error) {
        res.status(500).json(error)
    }
}
)

//Get all game ---------------------------------------------------------------------------------------------------------
router.get("/", verify, async(req, res) => {
    if(req.user.isAdmin){
        try {
             const games = await Game.find()
            res.status(200).json(games.reverse())
        } catch (error) {
            res.status(500).json(error)
        }
    }else{
        res.status(403).json("You are not allowed!")
    }
})
  

module.exports = router