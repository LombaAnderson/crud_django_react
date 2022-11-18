import React from "react"
import {Button, Table} from "react-bootstrap";

class Usuario extends React.Component{
       state = {usuarios: [], loading: true}

    async componentDidMount(){
      const config = {
        headers:{
            'Content-Type': 'application/json'
        }
      }
      config.headers['Authorization'] = 'Token ad2cab2367d8078b29d0ac9fa0382616894061b9'


        var url =("http://127.0.0.1:8000/user/")
        const response= await fetch(url, config);
        const data = await response.json();
        console.log(data);
        this.setState({usuarios: data, loading: false});
    }
                   
    render(){

        const usuariosApi = this.state.usuarios;
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
                        <td>Anderson Lomba</td>
                        <td>0789324912</td>
                        <td>Rua Depto Newton Moura</td>
                        <td>40220870</td>
                        <td>Salvador</td>
                        <td>BA</td>
                        <td>R$ 77.000,00</td>
                        <td>R$ 777,00 </td>
                        <td>77</td>
                        <td>15/11/2022</td>
                        <td>15/11/2027</td>
                        <td>R$ 77.000,00</td> 
                        <td>Atualizar <Button variant="danger" onClick={() => this.deletarUsuario()}>Excluir</Button></td>
                    </tr>
                    <tr>
                        <td>Josias Ferreira</td>
                        <td>0789324913</td>
                        <td>Travessa dos Crichanás</td>
                        <td>20220870</td>
                        <td>Rio de Janeiro</td>
                        <td>RJ</td>
                        <td>R$ 78.000,00</td>
                        <td>R$ 777,00 </td>
                        <td>77</td>
                        <td>15/11/2022</td>
                        <td>15/11/2027</td>
                        <td>R$ 79.000,00</td> 
                        <td>Atualizar <Button variant="danger" onClick={() => this.deletarUsuario()}>Excluir</Button></td>
                    </tr>
                </tbody>
            
            </Table>
        )
    }

}

export default Usuario;