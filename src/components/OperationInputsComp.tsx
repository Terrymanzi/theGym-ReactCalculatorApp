interface OperationInputsProps {
  onOperationClick: (operation: string) => void;
}

function OperationInputs({ onOperationClick }: OperationInputsProps) {
  return (
    <div className="flex flex-col gap-2">
      <button 
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => onOperationClick('+')}
      >
        +
      </button>
      <button 
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => onOperationClick('-')}
      >
        -
      </button>
      <button 
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => onOperationClick('*')}
      >
        ×
      </button>
      <button 
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => onOperationClick('/')}
      >
        ÷
      </button>
    </div>
  );
}

export default OperationInputs;
