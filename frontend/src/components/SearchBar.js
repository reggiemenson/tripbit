// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import Auth from '../lib/auth'
// import FilteredSearchForm from './FilteredSearchForm'

// const SearchBar = () => {
//   const [initialData, setInitialData] = useState([])
//   const [filteredData, setFilteredData] = useState([])
//   const [searchBarModal, setSearchBarModal] = useState(false)


//   useEffect(() => {
//     axios.get('/api/users')
//       .then(response => {
//         setInitialData(response.data)
//         setFilteredData([...response.data])
//         console.log(filteredData)
//       })
//       .catch(error => console.log(error))
//   }, [])




//   // function toggleSearchBar() {
//   //   setSearchBarModal(!searchBarModal)
//   // }

//   return <>

//     {/* <div className={searchBarModal === true ? 'modal is-active' : 'modal'}>
//       <div className="modal-background" onClick={toggleSearchBar}></div>
//       <div className="modal-content">
//           toggleRegistration={toggleSearchBar}
//       </div>
//       <button className="modal-close is-large" aria-label="close" onClick={toggleSearchBar}></button>
//     </div> */}
//     <div>
//       <FilteredSearchForm
//         Users={filteredData}
//       />
//     </div>
//     <div className="columns is-multiline">
//       {/* {filteredData.map((results, i) => {
//         return <UserCard key={i} results={results} />
//       })} */}
//     </div>
//   </>
// }
// export default SearchBar