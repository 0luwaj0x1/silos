
  const openModal = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -30%) scale(0.5); }
  100% {
    opacity: 1;
    transform: translate(-50%, -30%) scale(1); } 
  }
`

export const modalContainer = {
  width: '100%',
  height: '100vh',
  position: 'absolute',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  top: '0',
  left: '0'
};

export const modalContent = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -30%)',
  padding: '4rem 2rem',
  borderRadius: '.4rem',
  outline: 'none',
  width: '40%',
  animation: `${openModal} .4s .2s`,
  backgroundColor: '#fff'
};

export const span = {
  position: 'absolute',
  top: '0',
  right: '0',
  fontSize: '2rem',
  lineHeight: '1',
  padding: '1rem',
  cursor: 'pointer'
};



