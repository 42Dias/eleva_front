import { FiTrash } from 'react-icons/fi'
import * as S from './DeleteButton.styled'

const DeleteButton = () => {
  return (
    <S.Content>
      <button
        onClick={onDelete}
        style={{ background: 'none' }}
        title='Deletar?'
      >
        <FiTrash size={20} />
      </button>
    </S.Content>
  )
}

export default DeleteButton
