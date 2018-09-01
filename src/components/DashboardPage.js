import React from 'react';
import { connect } from "react-redux";
import PostsList from "./PostsList";
import FiltersPage from "./FiltersPage";

const DashboardPage = () => (
  <div>
    <FiltersPage/>
    <PostsList/>
  </div>
);

export default connect()(DashboardPage);
