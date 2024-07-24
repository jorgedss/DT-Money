import { HeaderContainer, HeaderContent, NewTransactionButton } from './style'
import logoImg from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransActionModal } from '../NewTransActionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            {/* asChild faz com que o Dialog.Trigger aproveite o botão já existente e não crie um novo */}

            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransActionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
