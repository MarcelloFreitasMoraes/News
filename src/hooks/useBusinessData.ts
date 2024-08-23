import { useQuery } from '@tanstack/react-query'
import { Newservice } from '../service/useServeceData'

const newservice = new Newservice()

export default function useBusinessData(country: 'us' | 'pt') {
    const { data: BusinessQuery } = useQuery({
        queryKey: ['list', country],
        queryFn: ({ queryKey }) => {
            const [, country] = queryKey;
            return newservice.fetchBusiness({ country: country as 'us' | 'pt' });
        },
    });

    return {
        BusinessQuery,
    };
}