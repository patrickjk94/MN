import {filterComparator, updateFilterParams} from './dataFilter.js'; 
import testData from './testData.json';

test('filter based on string value equality check', () => {
    let params = []; 

    params = updateFilterParams(params, { filterKey: "Code", comparison: "equals", value: "59610" } ); 
    params = updateFilterParams(params, { filterKey: "Code", comparison: "equals", value: "59400" } ); 

    console.log('params: ', params);

    expect(testData.filter(filterComparator(params))).toMatchObject([
        {
            "Group": "Global Maternity Care",
            "Code": "59400",
            "Global": false,
            "Description": "Routine obstetric care including antepartum care, vaginal delivery (with or without episiotomy, and/or forceps) and postpartum care",
          },
    ]);
});

test('filter based on a boolean equality check', () => {
    let params = [
        { filterKey: "Global", comparison: "equals", value: true }
    ]; 

    expect(testData.filter(filterComparator(params))).toMatchObject([
        {
            "Group": "Global Maternity Care",
            "Code": "59610",
            "Global": true,
            "Description": "Routine obstetric care including antepartum care, vaginal delivery (with or without episiotomy, and/or forceps) and postpartum care, after previous cesarean delivery"
        },
        {
            "Group": "Global Maternity Care",
            "Code": "59612",
            "Global": true,
            "Description": "Vaginal delivery only, after previous cesarean delivery (with or without episiotomy and/or forceps);"
        }
    ]);
});
