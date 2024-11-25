
export function NewTodoForm() {

  function handleSubmit(e) {
    e.preventDefault();
    
  }


  return (
    <form onSubmit= { handleSubmit } className="new-item-form">
      New todo-form here
    </form>
  )




}