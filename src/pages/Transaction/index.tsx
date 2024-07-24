import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import {
  PriceHighLight,
  TransActionContainer,
  TransActionTable,
} from './styles'

export function Transaction() {
  return (
    <div>
      <Header />
      <Summary />
      <TransActionContainer>
        <TransActionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td> 12/04/2024</td>
            </tr>

            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="outcome">R$ -59,00</PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td> 12/04/2024</td>
            </tr>
          </tbody>
        </TransActionTable>
      </TransActionContainer>
    </div>
  )
}
