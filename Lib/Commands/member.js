/*
int newusr(username)
{
    if (check_user(username, null) = 41)
    {
        if (newgroup(username) = 020)
        {
            add user to user index
            return(020)
        }
        else
        {
            return(51)
        }
    }
    else
    {
        return (51)
    }
}
*/

/*
int check_permissions(user, type, permission, group)
{
    //check target file
    //if the permission is found on the line
        {
            return(001) //yes
        }
        else
        {
            return(000) //no
        }
}
*/

int move_user(usename, newusename)
{
    if (check_user(newusename, null) = 41 && findgroup(newusename) = 41)
    {
        change usename to newusename in user index
        change group to newusername
    }
}
