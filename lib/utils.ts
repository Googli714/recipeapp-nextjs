'use client'

export function AddRecipeToLS(id: string) {

    if(IsInLS(id)) {
        return
    }

    let t = localStorage.getItem("favorites");
    t = t == null ? '' : t;
    t += ` ${id}`
    localStorage.setItem("favorites", t);
}

export function RemoveRecipeFromLS(id: string) {
    if(!IsInLS(id)) return
    
    let t = localStorage.getItem("favorites");
    let ta = t?.split(' ');

    let newFav = ''
    for (let index = 0; index < ta!.length; index++) {
        const element = ta![index];

        if (element == id) {
            continue
        }
        newFav += element;
    }

    localStorage.setItem("favorites", newFav.trim())
}

export function IsInLS(id: string): boolean | undefined {
    let t = localStorage.getItem("favorites");
    let ta = t?.split(' ');

    return ta?.includes(id);
}