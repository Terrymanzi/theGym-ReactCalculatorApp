interface NumpadInputProps {
  onNumberClick: (num: string) => void;
  onClearClick: () => void;
  onEqualsClick: () => void;
  onDecimalClick: () => void;
}

function NumpadInput({
  onNumberClick,
  onClearClick,
  onEqualsClick,
  onDecimalClick,
}: NumpadInputProps) {
  return (
    <div className="grid grid-cols-3 gap-2">
      <button
        className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
        onClick={() => onNumberClick("7")}
      >
        7
      </button>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
        onClick={() => onNumberClick("8")}
      >
        8
      </button>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
        onClick={() => onNumberClick("9")}
      >
        9
      </button>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
        onClick={() => onNumberClick("4")}
      >
        4
      </button>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
        onClick={() => onNumberClick("5")}
      >
        5
      </button>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
        onClick={() => onNumberClick("6")}
      >
        6
      </button>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
        onClick={() => onNumberClick("1")}
      >
        1
      </button>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
        onClick={() => onNumberClick("2")}
      >
        2
      </button>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
        onClick={() => onNumberClick("3")}
      >
        3
      </button>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded col-span-2"
        onClick={() => onNumberClick("0")}
      >
        0
      </button>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
        onClick={onDecimalClick}
      >
        .
      </button>
      <button
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded col-span-2"
        onClick={onClearClick}
      >
        C
      </button>
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        onClick={onEqualsClick}
      >
        =
      </button>
    </div>
  );
}

export default NumpadInput;
