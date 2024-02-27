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
      className="delete-btn ml-auto text-white text-xs pr-3 font-semibold"
    >
      archive
    </button>
  );
}

export default DeleteButton;
