import styled from 'styled-components'

export const HomeContainer = styled.main`
  margin-top: 5.875rem;
  /* padding: 0 160px; */
`

export const IntroContainer = styled.section`
  /* filter: blur(80px); */
  display: flex;
  /* grid-template-columns: 1fr 1fr; */
  justify-content: space-between;
  gap: 3.5rem;
`
export const IntroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
  /* margin-right: 3.5rem; */
`
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 1rem;

  h2 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
  }

  p {
    font-size: 20px;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
    font-stretch: 100;
  }
`

export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  gap: 0.75rem;

  p {
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
  }
`
const STATUS_COLORS = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  base: 'base-text',
  purple: 'purple',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Icon = styled.div<StatusProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  width: 2rem;
  height: 2rem;
  background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  color: ${(props) => props.theme.background};
  border-radius: 1000px;
`

export const ImageContainer = styled.div`
  align-self: center;
`
