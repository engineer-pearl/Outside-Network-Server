//all post-based commands moved to here
//notes verry much based on vague memory of c++
//i think it goes "something function()" so that's what i'm going to do

/*
**Included:
*new, addnotes, comments, like, share
**NEEEDS:
*addnotes for other servers
*better handling for other servers
*finished sharing function
*/


/*
int post()
{
    if (check_permissions(usr, "group", post, group) = 001)
    {
        Creates new post folder with post number
        Adds post to index
        Creates new Title file
        Creates new content file
        Creates new !Tags file
        Creates new Tags file
        Indexes tags
        Creates new Orin file
        Creates new RULES file
        Creates new Notes file
        Creates new replies file
        return(020)
    }
    else
    {
        return(046)
    }
*/

//###########################################################
/*
some addnotes(user, poster, post number, type, snipit) //maybe?
{
    if post exists
    {
        add comment to comments
        add note w/ comment to post notes
        add note w/ comment to usr notes
    }
    else
    {
        report that user does not exist
    }
}
*/
/*
int addnotes(user, poster, post number, type) //can i just make them one function? i don't remember!
{
    if post exists
    {
        add note to post notes
        add note to usr notes
        if type=like
            {
                add one to like counter
            }
    }
    else
    {
        report that user does not exist
    }
}
*/
/*
int comment(user, poster, post number)
{
    check RULES to see if comments allowed
    if allowed
    {
        create  variables from orin file
        {
                var op
                var op-server
                var opn //orriginal post number
        }
        var comment = [ask for input] //no i don't know how that works in javascript!
        var snipit = [20 char of comment] //no, i don't know how that works either.
        check if post still exists
        notes(user, poster, post number, comment, snipit) //okay i don't remember how to do that. this is why i'm just commenting in stuff for now
        if poster = op
        {
            nothing here
        }
        else
        {
            if op-server = @server //@server is the global value for server, right?
            {
                comment(user, op, orriginal post number, comment)
            }
            else
            {
                check if other server allowes comments //might not be enabled for the first version
                if other server allows comments
                {
                    send comment request to server
                }
                else
                {
                    report that op will not get the note
                }
            }
        }
    }
    else
    {
        report that commenting is not enabled on this post
    }
}
*/

/*
int like (user, poster, post number)
{
    //check RULES to see if likes are allowed
        {
        //addnotes(user, poster, post number, "like")
        //create  variables from orin file
        {
                //var op
                //var op-server
                //var opn
        }
        //if user=op && op-server=@server
        {
            //do the thing that ends the function
        }
        //else
        {
            //if op-server=@server
            {
                //addnotes(op, poster, opn, "like")
            }
            //else
            {
                //if op-server allows likes
                {
                    //send like request
                }
                //else
                {
                    //report that OP will not recieve a like
                }
            }
        }
    }
    //else
    {
        //report that likes are not allowed
    }
}  
*/ 

/*
//some share(user, poster, post number)
{
    //variables from RULES
    {
        //var sharable
        //var crossshare
    }
    //var sharable=no
    {
        //report that the post can not be shared
        //end the function
    }
    //else
    {
        //if (op-server =/= @server) && (croshare = no)
        {
            //report that the post cannot be shared between servers
            //end function
        }
        //else
        {
            var reply = [ask for input]
            coppy title orin content !tags replies
            add reply to end of replies
            create  variables from orin file
            {
                var op
                var op-server
                var opn
                var ***** //remember to finish making the list later
            }
            create RULES from Orin and User Input
            addnotes(user, poster, post number, type, snipit)
        }
        }
    }
}     
*/
/* If allowed:
// Coppies title
// Coppies Orin
// Coppies Content
// Coppies !tags
// Creates RULES based on Orin and user input [Server rules may come into play here]
// Coppies replies
// Adds reply to end of replies file
// Creates new Tags file
// // Checks if OP
// If not also do dashes
// - Adds to OPs Notes [In Posts folder] [Includes tags and snipit of text]
// - Adds to OPs other Notes [In post itself] [Includes tags and snipit of text]
// Adds to previous Notes [In Posts folder] [Includes tags and snipit of text]
*/ Adds to previous other Notes [In post itself] [Includes tags and snipit of text]
