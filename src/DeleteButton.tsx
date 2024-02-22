interface DeleteButtonProps {
  onDelete: () => void;
}

function DeleteButton({ onDelete }: DeleteButtonProps) {
  const handleClick = () => {
    onDelete();
  };

  return (
    <button
      onClick={handleClick}
      className="ml-auto text-white text-xs pr-3 font-bold"
    >
      delete
    </button>
  );
}

export default DeleteButton;
