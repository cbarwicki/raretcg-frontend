import { useState, useEffect } from 'react'
import axios from 'axios'

function Test() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get("http://localhost:8000/api/cards");
              const data = await response;
              console.log(`fetch successful: ${data}`)
              setCards(data)
          } catch (error) {
              console.error('Error:', error);
          }
      };
      fetchData();  
  }, []);

  console.log(cards)

  return (
    <>
      {cards.message.map((card) => (
        <div>
          {card.name}
        </div>
      ))}
    </>
  );
}

export default Test;