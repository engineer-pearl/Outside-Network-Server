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
            return(51) //already exists
        }
    }
    else
    {
        return (51) //already exists
    }
}
*/

/*
int check_permissions(user, type, permission, group)
{
    check target file
    if the permission is found on the line
        {
            return(001) //yes
        }
        else
        {
            return(000) //no
        }
}
*/

/*
int move_user(usename, newusename)
{
    if (check_user(newusename, null) = 41 && findgroup(newusename) = 41)
    {
        change usename to newusename in user index
        change group to newusername
    }
}
*/

/*
int remove_user(usernum)
{
    if (user=get_username(usernum) OR if check_permissions(user, manage_users) = 001)
    {
        [wait for password]
        if password=password //uhh... i haven't thought out communications verry well yet...
        {
            Check mod-files to see what files the user is a member of
            for (group, i=0, i++) //oops I think that's a bash loop... I'll fix it later.
            {
                //Check each group's mod files to see if the user is the only member
                if (only_member(group, usernum) = 001)
                {
                    remove_group
                }
                else
                {
                    removeusr(usernum, group)
                }
            }
            remove user from usr index
        }
    }
    check_permissions
}
*/
