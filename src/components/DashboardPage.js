import React from 'react';
import { connect } from "react-redux";
import PostsList from "./PostsList";
import FiltersPage from "./FiltersPage";
import { Link } from "react-router-dom";

const DashboardPage = () => (
  <div className="content-container">
    <div className="dashboard-filters">
      <FiltersPage/>
      <Link className="button" to="/create">Add  Post</Link>
    </div>  
    <PostsList/>
  </div>
);

export default connect()(DashboardPage);
