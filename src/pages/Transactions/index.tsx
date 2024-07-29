import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './Components/SearchForm'
import {
  PriceHighLight,
  TransActionContainer,
  TransActionTable,
} from './styles'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFotmatter } from '../../utils/formatter'
import { useContextSelector } from 'use-context-selector'

export function Transactions() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions,
  )

  return (
    <div>
      <Header />
      <Summary />
      <TransActionContainer>
        <SearchForm />
        <TransActionTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFotmatter.format(transaction.price)}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransActionTable>
      </TransActionContainer>
    </div>
  )
}
