/*
//Check if admin //Admin here is short for if they have permission to do this
// ADMIN:

//For ADD:
{
    //If they have permission to add users to the group
    {
        //Contine
    }
    //If they don't
    {
        //return appropriate error
    }
//If target user is in group
{
    //report to usr
    //return appropriate error
}
//If NOT in group:
* - - Continue
**
* - check if they requested access
* - - If [Usr Name] Req Join is in addreq
* - - - add to Members
* - - - - Run set privs >> Members //or did I have a special file for permissions? I'll have to check... is that something I want?
* - - - Remove "[Usr Name] Req Join"
* - - If not
* - - - Send mail to person attemtped to be added
* - - - Add "[Owner] req add [Usr Name]" to addreq
* - - - Run Set Privs >> addreq //I should do something about the probability of adding a new line. I'll worry about that when actually coding the damn thing
**
* For REMOVE:
*
*
*
*
* NON ADMIN:
*
* For REQADD
* - - Check name
* - - enter into log as attempting to gain access
* - - Send mail to group with username requesting to be added //[This is why you SHOULDN'T delete the mail code when disabling]
* - - Return
* - - Send report to all group members

some NEW
//Checks name avalibility
//Rejects any unavalible names
//Creates nessasary folder structure
//Takes minimum initial information
// Adds to members
// Okay I'll work on this one later
*/