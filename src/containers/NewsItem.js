import React from 'react';
import { connect } from 'react-redux'


const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%'
};
const articleStyle = {
  width: '50%',
  margin: '0 auto',
  color: 'olive'
}

let UserItem = ({ users }) => (
  users ?
    <article style={articleStyle} >
      <div>
        <h1>Hi{users}</h1>
        <h2>hello{users.id}</h2>
      </div>
    </article> :
    <div>
    </div>
);

const mapStateToProps = (state) => (
  {
  users: state.users,
})

UserItem = connect(
  mapStateToProps,
  null
)(UserItem)

export default UserItem;


