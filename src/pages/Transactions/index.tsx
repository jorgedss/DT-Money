import { useContext } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './Components/SearchForm'
import {
  PriceHighLight,
  TransActionContainer,
  TransActionTable,
} from './styles'
import { TransactionsContext } from '../../contexts/TransactionsContext'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />
      <TransActionContainer>
        <SearchForm />
        <TransActionTable>
          <tbody>
            {transactions.map((transiction) => {
              return (
                <tr key={transiction.id}>
                  <td width="50%">{transiction.description}</td>
                  <td>
                    <PriceHighLight variant={transiction.type}>
                      {transiction.price}
                    </PriceHighLight>
                  </td>
                  <td>{transiction.category}</td>
                  <td> {transiction.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransActionTable>
      </TransActionContainer>
    </div>
  )
}
