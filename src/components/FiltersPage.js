import React from "react";
import { connect } from "react-redux";
import { filterByDate, filterByTitle, searchText } from "../actions/filters";

const FiltersPage = (props)=>(
    <div>
        <input type="text" placeholder="Search..." 
            onChange={(e)=>{props.dispatch(searchText(e.target.value))}}
        ></input>
        <select className="select" value={props.filters.filterBy}
            onChange={(e) => { e.target.value === "date" ? props.dispatch(filterByDate()) : props.dispatch(filterByTitle()) }}>
            <option value="date">Date</option>
            <option value="title">Title</option>
        </select>
    </div>
)

const mapStateToProps = (state)=>{
    return {
        filters: state.filters
    }
}
export default connect(mapStateToProps)(FiltersPage)