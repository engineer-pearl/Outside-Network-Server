#!/usr/bin/perl

/*
addusr(usenum):
{
    usename=get_usename
    if (check_permissions(@user, "group", addusr, group) = 001)
    {
        report(023) # permissions accepted #like return but without stopping
        check group MEMBERS file for usename
        If (usenum is not in the group)
        {
            pull from the addreq file
            If [usenum] Req Join is in addreq
            {
                add to Members
                Run set_privs(usename, "member", group) #fixed that newline problem by forcing it to another part of the code lol
                Remove "[usenum] Req Join" #oh... it looks like I'm going to have to do some seroius research to get variables into strings...
                return(020) #done
            }
            else
            {
                Send mail to person attemtped to be added #Mail function should never be deleted, only ever locked or modified.
                Add "[@user], req add [usenum]" to addreq
                Run set_privs(usename, "addreq", group)
                return(024) #request submitted
        }
        else
        {
            return(051) #already exists
        }
    else
    {
        return(046) #missing permissions
    }
}
*/

/*
int removeusr(usenum, group)
{

}
*/

/*
int rejectuser(usenum)
{
    if (check_permissions(ADDUSER) = 001)
    {
        Remove "[usenum] Req Join"
        return(020)
    }
    else
    {
        return(046) #Missing permissions
    }
}
*/

/*
int reqadd(usenum)
{
    usename=get_usename
    check addreq for usename
    if "*, req add [usename]" found
    {
        add to members
        transfer permissions
        Send mail to all members
        return(020)
    }
    else
    {
        add "[usenum] Req Join" to addreq
        Send mail to group with username requesting to be added
        return(24) #request submitted
    }
}

some newgroup(name)
{
    #Checks group index to see if group exists
    if (name exists)
    {
    return (51) #already exists
    }
    else
    {
        #create the group file structure
        Add to members
        run set_privs
    }
#Creates nessasary folder structure
#Takes minimum initial information
# Adds to members
# Okay I'll work on this one later
}
*/

/*
int findgroup
{
    idk how to check directories in javascript.
}
