// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)

};

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2)

};

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];

function createFareMultiplier(multipler) {
    return function(orgfare){
        return orgfare * multipler;

    };
};

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, driversSet) {
    return driversSet(drivers);

};