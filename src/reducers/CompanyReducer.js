import companies from "../data/companies.json"
const companyList = [...companies]

const initialState = {
  companies: companyList
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
