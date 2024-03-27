// create a variable to contain 'baseURL'
const baseURL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT'

// establish state
const state = {
  events: [],
};

// helper function
async function logAsync(func) {
    const result = await func();
    console.log(result);
}

// get party data
async function getParty() {
  const response = await fetch(`${baseURL}/events`);
  const json = await response.json();

  if(!json.success) {
    throw new Error(json.error);
  }

  state.events = [...json.data];

  render();
}

// logAsync(getParty);

// render party data
function addPartyToScreen(party) {
  const partyElement = document.getElementById('parties');
  const element = document.querySelector('div');
    element.classList.add('party');

    const idElement = document.createElement('div');
    idElement.classList.add('id');
    idElement.append(party.id);

    const nameElement = document.createElement('div');
    nameElement.classList.add('name');
    nameElement.append(party.name);

    const descriptionElement = document.createElement('div');
    descriptionElement.classList.add('description');
    descriptionElement.append(party.description);

    const dateElement = document.createElement('div');
    dateElement.classList.add('date');
    dateElement.appende(party.date);

    const locationElement = document.createElement('div');
    locationElement.classList.add('location');
    locationElement.append(party.location);

    const cohortIdElement = document.createElement('div');
    cohortIdElement.classlist.add('cohortId');
    cohortIdElement.append(party.cohortId);

    element.append(idElement);
    element.append(nameElement);
    element.append(descriptionElement);
    element.append(dateElement);
    element.append(locationElement);
    element.append(cohortIdElement);
}

// get a single party

// create a party


// update a party

// delete a party