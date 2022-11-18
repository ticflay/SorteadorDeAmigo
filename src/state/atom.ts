import { atom } from 'recoil';

export const playersListState = atom<string[]>({
    key: 'playersListState',
    default: []
})

export const errorState = atom<string>({
    key: 'errorState',
    default: ''
})