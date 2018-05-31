class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
    this.$submitButton = $('.submit-button')
    this.$userText = $('.user-text')
    this.$commentsList = $('.comments-list')
  }

  init() {
      // kick off controller from here
      this.addCommentFormListener();
  }

    addCommentFormListener() {
    // create comment form listener code here
      this.$submitButton.on('click', (event) => {
          event.preventDefault();                   
          var id = event.target.id;
          var comment = this.$userText[""+id+""].value;
          var commentObject =new Comment(id,comment);
          this.render(commentObject);
      })
    }
    // appends new comment to the ul
   render(commentObject){
       var ul = "#"+ this.$commentsList[commentObject.$id].id
       var ulStr = ul.toString();
       var li = commentObject.commentEl(commentObject.id, commentObject.comment);
        $(ulStr).append(li);
    }
}
