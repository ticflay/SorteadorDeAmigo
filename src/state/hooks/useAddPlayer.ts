import { useSetRecoilState, useRecoilValue} from 'recoil';
import { errorState, playersListState } from '../atom';

export const useAddPlayer = () => {
    const setList = useSetRecoilState(playersListState);
    const list = useRecoilValue(playersListState)
    const setError = useSetRecoilState(errorState);
    return (playerName: string) => {
        if(list.includes(playerName)) {
            setError("Nomes duplicados não são permitidos!");
            setTimeout(() => {
                setError("");
            }, 3000)
            return;
        }
        return setList(current => [...current, playerName])
    }
}