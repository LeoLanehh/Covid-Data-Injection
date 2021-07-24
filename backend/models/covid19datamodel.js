const { Int32 } = require('mongodb');
const mongoose = require('mongoose');


//Covid Schema

const Schema = mongoose.Schema;
const covid19dataSchema = new Schema({
    iso_code: String,
    continent: String,
    location: String,
    date: String,
    total_cases: Number,
    new_cases: Number,
    new_cases_smoothed: String,
    total_deaths: Number,
    new_deaths: Number,
    new_deaths_smoothed: String,
    total_cases_per_million: String,
    new_cases_per_million: String,
    new_cases_smoothed_per_million: String,
    total_deaths_per_million: String,
    new_deaths_per_million: String,
    new_deaths_smoothed_per_million: String,
    reproduction_rate: String,
    icu_patients: Number,
    icu_patients_per_million: String,
    hosp_patients: Number,
    hosp_patients_per_million: String,
    weekly_icu_admissions: String,
    weekly_icu_admissions_per_million: String,
    weekly_hosp_admissions: String,
    weekly_hosp_admissions_per_million: String,
    new_tests: Number,
    total_tests: Number,
    total_tests_per_thousand: String,
    new_tests_per_thousand: String,
    new_tests_smoothed: String,
    new_tests_smoothed_per_thousand: String,
    positive_rate: String,
    tests_per_case: String,
    tests_units: String,
    total_vaccinations: String,
    people_vaccinated: String,
    people_fully_vaccinated: String,
    new_vaccinations: String,
    new_vaccinations_smoothed: String,
    total_vaccinations_per_hundred: String,
    people_vaccinated_per_hundred: String,
    people_fully_vaccinated_per_hundred: String,
    new_vaccinations_smoothed_per_million: String,
    stringency_index: String,
    population: Number,
    population_density: String,
    median_age: String,
    aged_65_older: String,
    aged_70_older: String,
    gdp_per_capita: String,
    extreme_poverty: String,
    cardiovasc_death_rate: String,
    diabetes_prevalence: String,
    female_smokers: String,
    male_smokers: String,
    handwashing_facilities: String,
    hospital_beds_per_thousand: String,
    life_expectancy: String,
    human_development_index: String,
    excess_mortality: String

});


//Covid Model
const Covid19dataModel = mongoose.model('Covid19dataModel', covid19dataSchema);

module.exports = Covid19dataModel;
