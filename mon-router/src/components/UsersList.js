import React from 'react'
import {Container,Row} from 'reactstrap'
import {list} from '../const/Const'
import UserCard from './UserCard'
import {Redirect} from 'react-router-dom'


function UsersList({isLogin}) {
    
    return (
   <>
   {!isLogin ? (<Redirect to='/'/>):
   
  ( <Container>
   <Row>
{ list.map((user,i)=><UserCard  key={i}  user={user} />)}
   </Row>
</Container>)
}
   </>
    )
}

export default UsersList;