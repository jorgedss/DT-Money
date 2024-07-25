import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './Components/SearchForm'
import {
  PriceHighLight,
  TransActionContainer,
  TransActionTable,
} from './styles'

export function Transactions() {
  fetch('http://localhost:3000/transaction')

  return (
    <div>
      <Header />
      <Summary />
      <TransActionContainer>
        <SearchForm />
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
