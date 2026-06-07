// enum

// type userRoles = "admin" | "editor" | "user";

enum UserRoles {
    Admin = "admin",
    Editor = "editor",
    viewer = "viewer",
}

const canEdit = (role:UserRoles) => {
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

// senior developer wont recommended it



