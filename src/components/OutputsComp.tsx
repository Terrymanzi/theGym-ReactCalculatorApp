interface OutputsCompProps {
  display: string;
}

function OutputsComp({ display }: OutputsCompProps) {
  return (
    <div className="bg-blue-400 p-4 rounded-lg mb-4 text-right text-2xl font-mono h-16 flex items-center justify-end overflow-hidden">
      {display || "0"}
    </div>
  );
}

export default OutputsComp;
