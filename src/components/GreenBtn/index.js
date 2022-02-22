import React from 'react'
import * as S from './styled'

export default function GreenBtn({buttonType, content}) {
  return (
    <S.GreenBtn
    type={buttonType}
    >
      {content}
    </S.GreenBtn>
  )
}
