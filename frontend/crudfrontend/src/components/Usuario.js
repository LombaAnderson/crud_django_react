import React from "react"
import {Table} from "react-bootstrap";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

class Usuario extends React.Component{

    constructor(props){
        super(props);
        
        this.state ={
            usuarios:[
            
            ]
        }
    }

    async componentDidMount(){
        
    }

    componentWillUnmount(){

    }

    async buscarUsuario(){
        var url =("http://127.0.0.1:8000/user/")
        const response= await fetch(url);
        const data = await response.json();
 
    }

    async deletarUsuario(id){
        var url =("http://127.0.0.1:8000/user/" +id, {method: 'DELETE'})
        .then(response => {
                if(response.ok){
                    this.buscarUsuario();
                }
            })
        }
             
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