import { atom, selector } from "recoil"
import { getItem, setItem } from "../utils/storage"


export const boardListState = atom<CallbackParams[]>({
    key: "boardListState",
    default: []
})


export const boardListSelector = selector<CallbackParams[]>({
    key: "boardListSelector",
    get: () => {
        return (getItem("LIST") || []) as CallbackParams[]
    },
    set: (_, newValue) => {

        setItem("LIST", newValue)
    }
})