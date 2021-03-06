import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { editShop } from '../actions';
import {Link} from 'react-router';

class Edit extends React.Component {
  constructor(props){
    super(props)
    this.state = { };
    this.state.shopName = props.shop.name;
    this.state.shopLocation = props.shop.location;
    this.state.shopContactNumber = props.shop.contactNumber;


  }

  render(){
    return (
      <div>
      <h1>Store name</h1>
        <h3>{this.props.params.id}</h3>
        <input type="text" value={this.state.shopName} onChange={(e)=>{this.setState({shopName: e.target.value})}}/>
        <input type="text" value={this.state.shopLocation} onChange={(e)=>{this.setState({shopLocation: e.target.value})}}/>
        <input type="text" value={this.state.shopContactNumber} onChange={(e)=>{this.setState({shopContactNumber: e.target.value})}}/>
        <Link to="/main"><button type="submit" onClick={(e)=>{this.props.editShop(this.props.shop.id, this.state.shopName, this.state.shopLocation, this.state.shopContactNumber)}}>Update</button></Link>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const shopId = ownProps.params.id

  const shop = state.shops.filter((td)=>{return (td.id == shopId)})[0] || {};

  return {
    shop
  }
}


function mapDispatchToProps(dispatch) {
  return {
    editShop: (id, name,location,contactNumber) => {
      dispatch(editShop(id, name,location,contactNumber))
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Edit);
