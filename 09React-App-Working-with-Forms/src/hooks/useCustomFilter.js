
import { useLocalStorage } from "./useLocalStorage";

export function useCustomFilter(data, callback) {
    const [query, setQuery]= useLocalStorage('query', '')

    const filteredData = data.filter((datum) =>
        callback(datum).toLowerCase().includes(query)
      );

    return [filteredData, setQuery, query]
}