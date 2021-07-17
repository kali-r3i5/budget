import { Container } from "./styles"

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <th>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </th>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>15/07/2021</td>
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-R$1000</td>
                        <td>Casa</td>
                        <td>13/07/2021</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    )
}