import { atom, selector } from "recoil"
import { getItem, setItem } from "../utils/storage"


export const boardListState = atom<DashboardCallbackParams[]>({
    key: "boardListState",
    default: []
})


export const boardListSelector = selector<DashboardCallbackParams[]>({
    key: "boardListSelector",
    get: ({ get }) => {

        const res = get(boardListState)
        if (res?.length === 0) {
            return (getItem("LIST") || []) as DashboardCallbackParams[]
        }
        return res
    },
    set: ({ set }, newValue) => {
        setItem("LIST", newValue)
        set(boardListState, newValue)

    }
})