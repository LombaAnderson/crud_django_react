import React from "react"
import {Table} from "react-bootstrap";

class Financeiro extends React.Component{

    constructor(props){
        super(props);

        this.state={
            financeiro:[]
        }
    }

    render(){
        return  (
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <td>Valor do Emprestimo</td>
                    <td>Valor da Parcela</td>
                    <td>Parcela</td>
                    <td>Data de Emissão</td>
                    <td>Data de Vencimento</td>
                    <td>Preço de Aquisição</td>            
                    <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>R$ 77.000,00</td>
                        <td>R$ 777,00 </td>
                        <td>77</td>
                        <td>15/11/2022</td>
                        <td>15/11/2027</td>
                        <td>R$ 77.000,00</td> 
                        <td>Editar Excluir</td>
                    </tr>
                    <tr>
                        <td>R$ 79.000,00</td>
                        <td>R$ 779,00 </td>
                        <td>79</td>
                        <td>15/11/2022</td>
                        <td>15/11/2027</td>
                        <td>R$ 79.000,00</td> 
                        <td>Editar Excluir</td>
                    </tr>
               
                </tbody>
            </Table>
        )
    }
    }


export default Financeiro;