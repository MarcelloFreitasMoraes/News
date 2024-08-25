import { useQuery } from '@tanstack/react-query'
import { Newservice } from '../service/useServeceData'

const newservice = new Newservice()

    export default function useCnnBrasil() {
        const { data: CnnBrasilQuery } = useQuery({
            queryKey: ['list'],
            queryFn: newservice.fetchCnnBrasil,
        })

    return {
        CnnBrasilQuery,
    };
}