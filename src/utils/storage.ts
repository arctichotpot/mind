
export const getItem = (name: string): string | null => {
    const item = localStorage.getItem(name)
    if (item) return JSON.parse(item)
    return null
}

export const setItem = (name: string, data: any) => {
    if (typeof data === "string")
        localStorage.setItem(name, data)
    else localStorage.setItem(name, JSON.stringify(data))
}

export const removeItem = (name: string) => {
    localStorage.removeItem(name)
}


