import React, {Component} from 'react';
import './ContactTable.css'
import FunctionButton from '../FunctionButton/FunctionButton';


export default class Table extends Component{

render(){
    return(
        <table>
            <thead>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {this.props.contactsProp.map((e,idx)=>{
                    return <tr key={idx}>
                        <td><img className='img-table' src={e.pictureUrl} /></td>
                        <td>{e.name}</td>
                        <td>{e.popularity.toFixed(3)}</td>
                        <td><FunctionButton functionProp={()=>this.props.deleteProp(e.name)}>Delete</FunctionButton></td>
                    </tr>
                })}
            </tbody>
        </table>
    )

}


}



