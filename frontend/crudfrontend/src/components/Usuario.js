import React from "react"
import {Table} from "react-bootstrap";

class Usuario extends React.Component{

    constructor(props){
        super(props);

        this.state={
            usuarios:[]
        }
    }

    render(){
        return  (
            <Table>
                <thead>
                    <tr>
                    <th>Cliente</th>
                    <th>Documento</th>
                    <th>Endereço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Anderson Lomba</td>
                        <td>0789324912</td>
                        <td>Rio de Janeiro-RJ</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
    }


export default Usuario;