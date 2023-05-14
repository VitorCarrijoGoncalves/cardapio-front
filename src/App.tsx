import './App.css';
import { Card } from './components/card/card';
import { FoodData } from './interface/FoodData';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/create-modal/create-modal';
import { useState } from 'react';

function App() {
  const { data, isLoading, isError } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {
          !isLoading && <>
            {data?.map(foodData => 
              <Card 
                price={foodData.price} 
                title={foodData.title} 
                image={foodData.image}
              />
            )}
          </>
        }
        {isLoading && <p>carregando</p>}
        {isError && <p>erro!</p>}
        {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
        <button onClick={handleOpenModal}>novo</button>
      </div>
    </div>
  )
}

export default App
