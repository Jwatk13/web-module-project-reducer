import React, { useReducer } from 'react';
import reducer, { initialState } from '../reducers/index';

// import { addOne }  from '../actions/index';
import { applyNumber } from '../actions/index';
import { changeOperation } from '../actions/index';
import { clearDisplay } from '../actions/index';
import { currentMemory } from '../actions/index';
import { memoryReturn } from '../actions/index';
import { memoryClear } from '../actions/index';
import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {

  const [ state, dispatch ] = useReducer(reducer, initialState)

  // const handleAdd = () => {
  //   dispatch(addOne())
  // }

  const handleNum = (number) => {
    dispatch(applyNumber(number))
  }

  const handleOperatorType = (operator) => {
    dispatch(changeOperation(operator))
  }

  const handleClearDisplay = () => {
    dispatch(clearDisplay())
  }

  const handleMemory = () => {
    dispatch(currentMemory())
  }

  const handleMemoryReturn = (memory) => {
    dispatch(memoryReturn(memory))
  }

  const handleMemoryClear = () => {
    dispatch(memoryClear())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={handleMemory}/>
              <CalcButton value={"MR"} onClick={() => handleMemoryReturn(state.memory)}/>
              <CalcButton value={"MC"} onClick={handleMemoryClear}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleNum(1)}/> 
              <CalcButton value={2} onClick={() => handleNum(2)}/>
              <CalcButton value={3} onClick={() => handleNum(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleNum(4)}/>
              <CalcButton value={5} onClick={() => handleNum(5)}/>
              <CalcButton value={6} onClick={() => handleNum(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleNum(7)}/>
              <CalcButton value={8} onClick={() => handleNum(8)}/>
              <CalcButton value={9} onClick={() => handleNum(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleOperatorType("+")} />
              <CalcButton value={"*"} onClick={() => handleOperatorType("*")}/>
              <CalcButton value={"-"} onClick={() => handleOperatorType("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClearDisplay}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
