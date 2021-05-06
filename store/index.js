export const state = () => ({
  countries: [],
  search: '',
  statisticsKeys: [
    'Confirmed',
    'Deaths',
    'Recovered',
  ]
});

export const mutations = {
  SET_COUNTRIES(state, countries) {
    state.countries = countries;
  },
  SET_SEARCH(state, search) {
    state.search = search;
  }
};
export const actions = {
  getCountries({commit}){
    this.$axios.$get('https://api.covid19api.com/summary').then((data) => {
      console.log(data);
      commit('SET_COUNTRIES', data.Countries);
    });
  }
};
export const getters = {
  filteredCountries(state){
    return state.countries.filter(country => {
      // search: "aaa" country: "Estonia" => "Est"
      let partial = country.Country.substr(0, state.search.length).toLowerCase();
      return partial === state.search.toLowerCase();
    })
  },
  fullStatisticsKeys(state){
    return [
      ...state.statisticsKeys.map(key => ({key:'New'+key, label:'New ' + key})),
      ...state.statisticsKeys.map(key => ({key:'Total'+key, label:'Total ' + key})),
    ]
  },
  sortStatisticsKeys(state, getters) {
    return getters.fullStatisticsKeys.reduce((array, key) => {
      return [
        ...array,
        {key:key.key, label: key.label + ' Desc', sort: 'desc'},
        {key:key.key, label: key.label + ' Asc', sort: 'asc'}
        ]
    }, []);
  }
};
