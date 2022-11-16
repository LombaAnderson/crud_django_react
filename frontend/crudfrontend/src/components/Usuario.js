import React from "react"
import {Table} from "react-bootstrap";

class Usuario extends React.Component{

    constructor(props){
        super(props);
        
        this.state ={
            usuarios:[
              {'id':1, 'cliente':'Anderson', 'documento':'0789324912','endereco':'Rua Depto Newton Moura',
               'cep':'40220870', 'cidade': 'Salvador', 'uf': 'BA' }
            ]
        }
    }

    componentDidMount(){

    }

    componentWillUnmount(){
        
    }


    render(){
        return  (
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Cliente</th>
                    <th>Documento</th>
                    <th>Endereço</th>
                    <td>CEP</td>
                    <td>Cidade</td>
                    <td>UF</td>
            
                    <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Anderson Lomba</td>
                        <td>0789324912</td>
                        <td>Rua Depto Newton Moura</td>
                        <td>40220870</td>
                        <td>Salvador</td>
                        <td>BA</td>
                        <td>Editar Excluir</td>
                    </tr>
                    <tr>
                        <td>Josias Ferreira</td>
                        <td>0789324913</td>
                        <td>Travessa dos Crichanás</td>
                        <td>20220870</td>
                        <td>Rio de Janeiro</td>
                        <td>RJ</td>
                        <td>Editar Excluir</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
    }


export default Usuario;