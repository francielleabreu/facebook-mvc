const Feed = require('../models/Feed')

const getHomepage = (req, res)=>{
    Feed.find()
        .then(result=>{
            result.forEach(element => {
                console.log(element)
            })
            res.render('index', {result})
        })
        .catch(err => console.log(err))
}

const getFeed = (req, res)=>{
    Feed.findById({_id: req.params.id})
        .then(result=>{    
        console.log(result)       
            res.render('feed-1', { result })
        })
        .catch(err => console.log(err))
}

const editPost = (req, res)=>{
    Feed.findById({_id: req.params.id})
        .then(result=>{    
        console.log(result)       
            res.render('feed-edit', { result })
        })
        .catch(err => console.log(err))
}

const addMessage = (req, res) =>{
    console.log(req.body)
    const feed = new Feed(req.body)
    feed.save()
        .then(result => res.redirect('/feed'))
        .catch(err =>console.log(err))
}

const deleteMessage = (req, res) => {
    const messageId = req.params.id;
    Feed.findByIdAndDelete(messageId)
    .then(result => {
      if (!result) {
        return res.status(404).send("Message not found");
      }
      res.redirect('/feed');
    })
    .catch(err => {
      console.log(err);
      res.status(500).send("Error");
    });
};

const editMessage = (req, res) => {
    const messageId = req.params.id;
    const { name, message } = req.body; 
  
    Feed.findById(messageId)
      .then(feed => {
        if (!feed) {
          return res.status(404).send("Message not found");
        }
        feed.name = name;
        feed.message = message;
        return feed.save();
      })
      .then(result => {
        res.redirect('/feed');
      })
      .catch(err => {
        console.log(err);
        res.status(500).send("Error");
      });
};
  
module.exports ={
    getHomepage,
    getFeed,
    editPost,
    addMessage,
    editMessage,
    deleteMessage
}