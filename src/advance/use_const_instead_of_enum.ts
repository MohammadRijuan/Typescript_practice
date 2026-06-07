// use as const isntead of enum
// use of assertion

// enum UserRoles {
//     Admin = "admin",
//     Editor = "editor",
//     viewer = "viewer",
// }

const UserRoles ={
    Admin : "admin",
    Editor : "editor",
    viewer : "viewer",
}

const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor)
    {
        return true;
    }
    else {
        return false;
    }
}

const isEditPermission = canEdit(UserRoles.Admin);
console.log(isEditPermission);
