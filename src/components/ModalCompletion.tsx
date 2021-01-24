import { useGameContext, Difficulty } from '../contexts'
import { GameProgress } from '../globals'

const ModalCompletion = () => <ModalWrapper/>
export default ModalCompletion

function ModalWrapper() {
  const { gameProgress } = useGameContext()

  return(
    <>
      { gameProgress === GameProgress.Won && (<VictoryModal/>) }
      { gameProgress === GameProgress.Lost && (<FailureModal/>) }
    </>
  )
}

const VictoryModal = () => (
  <div data-testid='modal-completion'>
    "Congratulations! You trumped Trump's lies!"
    {<RestartButton/>}
  </div>
)

const FailureModal = () => (
  <div data-testid='modal-completion'>
    "Dangit! Trump triumphed! Play again?"
    {<RestartButton/>}
  </div>
)

const RestartButton = () => {
  const { setGameProgress, setDifficulty } = useGameContext()

  const handleNewGame = () => {
    setGameProgress(GameProgress.NewGame)
    setDifficulty(Difficulty.Easy)
  }

  return(
    <button 
      data-testid='restart-game-button' 
      onClick={() => handleNewGame()}>
        Play Again?
    </button>
  )
}
