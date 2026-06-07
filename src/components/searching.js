import { rules, createComparison } from "../lib/compare.js";

export function initSearching(searchField) {
    const { searchMultipleFields } = rules;
    
    const searchRule = searchMultipleFields(
        searchField,
        ['date', 'customer', 'seller'],
        false
    );
    
    const compare = createComparison(
        ["skipEmptyTargetValues"],
        [searchRule]
    );

    return (data, state, action) => {
        return data.filter((row) => compare(row, state));
    };
}