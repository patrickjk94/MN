import data from './data.json'; 

export const COMPARISON_TYPE = {
    EQUALS : "equals", 
    CONTAINS : "contains"
}

/**
 * filterParams: [
 *     { filterKey: "Group", comparison: "contains", value: "Global Maternity Ca" }, 
 *      ...
 * ]
 * 
 * newFilterParam: { filterKey: "Group", comparison: "contains", value: "Global Maternity Ca" }
 * 
 */
export const updateFilterParams = (filterParams, newFilterParam) => {

    // Remove existing filter param 
    filterParams = filterParams.filter(item => {
        return (!(item.filterKey === newFilterParam.filterKey))
    }); 

    // Add new filter if not null
    if(newFilterParam.value != null) {
        filterParams.push(newFilterParam); 
    }

    return filterParams;
}

/** Note we could restructure to use the reducer syntaxt of action and payload
{
    action: "ADD_FILTER", 
    payload: {
        filterKey: "Group", comparison: "contains", value: "Global Maternity Ca"
    }
}
*/


// Returns a function used for filtering using  prototype function .filter
export const filterComparator = (params) => {
    return (item) => {
        for(let filter of params) 
        {
            switch(filter.comparison) {
                case COMPARISON_TYPE.CONTAINS: 
                    if (item[filter.filterKey] === undefined || !item[filter.filterKey].toString().includes(filter.value)) 
                        return false;
                    break;
                case COMPARISON_TYPE.EQUALS: 
                    if (item[filter.filterKey] === undefined || item[filter.filterKey] !== filter.value)
                        return false;
                    break;
            }
        }
        return true;
    }
}

// export const SORT_TYPE = {
//     ALPHABETICAL : "alphabetical", 
//     NUMBERICAL : "numerical"
// }

export const SORT_ORDER = {
    ACENDING : "acending",
    DESCENDING : "descending"
}

/**
 *
 *   param: {field: Group, sort_order: SORT_ORDER.ASCENDING, ... },
 * 
**/ 
export const comparator = (field, sort_order) => {
    return (a, b) => {

        const reverse = sort_order === SORT_ORDER.ACENDING ? 1 : -1; 

        if ( a[field] < b[field] ) {
            return 1 * reverse;
        }
        if ( a[field] > b[field] ) {
            return -1 * reverse;
        }
        else {
            return 0;
        }
    }
}

const sort_params = [
    {field: "Group", sort_order: SORT_ORDER.ASCENDING }, 
    {field: "Label", sort_order: SORT_ORDER.DESCENDING}
]; 

let sortedData = data.sort(comparator("Group", SORT_ORDER.ASCENDING)); 
console.log(sortedData); 
