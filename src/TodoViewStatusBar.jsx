

export function TodoViewStatusBar({
    showActive, 
    showCompleted, 
    showDeleted,
    setShowActive,
    setShowCompleted,
    setShowDeleted,
})       
{

  return (
    <>
      <label className="status-bar-row">
        <input type="checkbox" id="active" onClick={() => {
          const val = document.getElementById("active").checked;
          setShowActive(val);
        }}
        defaultChecked={showActive}
        />
        Active
      </label>
      <label className="status-bar-row">
        <input type="checkbox" id="completed" onClick={() => {   
          const val = document.getElementById("completed").checked;
          setShowCompleted(val);
        }}
        defaultChecked={showCompleted}
        />
        Completed
      </label>
      <label className="status-bar-row">
        <input type="checkbox" id="deleted" onClick={() => {
          const val = document.getElementById("deleted").checked;
          setShowDeleted(val);
        }}
        defaultChecked={showDeleted}
        />
        Deleted
      </label>
    </>
  )
}
