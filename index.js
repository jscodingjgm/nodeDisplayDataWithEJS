const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    function getEmployeeData(){
        return fetch('http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees');
    }

    const employeeGetDetails = await getEmployeeData();
    const getJSONData = await employeeGetDetails.json();
    res.render('employee', {
        employeeList : getJSONData
    });
});

app.listen(3000);