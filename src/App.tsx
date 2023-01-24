import React from "react";
import "./App.css";

export default function App() {
  const [fruitItems, setFruitItems] = React.useState([
    "Manzana",
    "Banana",
    "Narnaja",
    "Pomelo",
  ]);

  // //handle drag start
  // const onDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
  //   console.log("drag started", index);
  // };

  // //handle drag enter
  // const onDragEnter = (e: React.DragEvent<HTMLDivElement>, index: number) => {
  //   console.log("drag enter", index);
  // };

  // //handle drag end
  // const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {};

  //const handle sorting
  const handleSort = () => {
    //duplicar items
    let _fruitItems = [...fruitItems];

    //remover y salvar el dragged item
    const draggedItemContent = _fruitItems.splice(dragItem.current, 1)[0];

    // cambiar posicion
    _fruitItems.splice(dragOverItem.current, 0, draggedItemContent);

    //resetear posicion ref
    dragItem.current = null;
    dragOverItem.current = null;

    //Actualiza el array en uso
    setFruitItems(_fruitItems);
  };

  //Salvar referencias para dragItem and dragoveritem
  const dragItem = React.useRef<any>(null);
  const dragOverItem = React.useRef<any>(null);

  return (
    <div className="App">
      <h2>Lista de frutas</h2>
      <div>
        {fruitItems.map((item, index) => (
          <div
            className="listado"
            key={index}
            draggable
            onDragStart={(e) => (dragItem.current = index)}
            onDragEnter={(e) => (dragOverItem.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
          >
            <i>
              <h3>{item}</h3>
            </i>
          </div>
        ))}
      </div>
    </div>
  );
}
