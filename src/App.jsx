import reactLogo from './assets/images/react.svg'

import Home from './pages/Home';

import useFindUserById from './hooks/useFindUserById'

function App() {
  const { user } = useFindUserById();

  console.log({ user })

  return (
    <Home />
  )
}

export default App
