import { errorState } from "../atom"
import {useRecoilValue} from 'recoil'

export const useErrorMessage = () => {
    const mensagem = useRecoilValue(errorState);
    return mensagem;
}