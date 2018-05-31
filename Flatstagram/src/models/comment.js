// create Comment class here
class Comment{
    constructor(imageId, comment){
        this.$comment = comment;
        this.$id = imageId;
        this.commentEl(imageId, comment);
        this.findImage(imageId, comment);
        this.all();

    }
    //push comment constructor object into allComments array
    all() {
        this.constructor.allComments.push(this);
    }

    findImage(imageId, comment) {                         // this will find the image object comment section using the id of the image
        var commentArray = Image.all[imageId].comments;
        commentArray.push(comment);
        return Image.all[imageId]                         
    }

    //return html with parameter template strings
    commentEl(imageId, comment){                            //returns a string of html
        return `<li id="newComment-${this.$id}">${this.$comment}</li>`
    }

};


//create empty array that won't re-empty with each new comment
Comment.allComments= [];
