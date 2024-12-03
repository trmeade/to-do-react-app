import PropTypes from "prop-types";

export function TodoViewStatusBar({
  viewStatus,
  setViewStatus
})       
{

  return (
    <>
      <div className="todo-view-status-bar">
        <p id="view-state-header">Select View:</p>
          <div id="view-state-buttons">
            <button 
              className={`view-type-btn ${viewStatus === "All" ? "view-type-btn-active" : ""}`}
              type="button" id="all-btn" onClick={() => {
              setActiveBtn("All");
            }}
            >
              All
            </button>
            <button 
              className={`view-type-btn ${viewStatus === "Active" ? "view-type-btn-active" : ""}`}
              type="button" id="active-btn" onClick={() => {   
              setActiveBtn("Active");
            }}>
              Active
            </button>
            <button 
              className= {`view-type-btn ${viewStatus === "Completed" ? "view-type-btn-active": ""}`}
              type="button" id="completed-btn" onClick={() => {
              setActiveBtn("Completed");
            }}>
              Completed
          </button>
        </div>
      </div>
    </>
  )

  function setActiveBtn(status) {
    
    setViewStatus(status);

    document.getElementById("all-btn").classList.remove("view-type-btn-active");
    document.getElementById("active-btn").classList.remove("view-type-btn-active");
    document.getElementById("completed-btn").classList.remove("view-type-btn-active");
    
    switch(status) {
      case "All":
        document.getElementById("all-btn").classList.add("view-type-btn-active");
        break;

      case "Active":
        document.getElementById("active-btn").classList.add("view-type-btn-active");
        break;
    
      case "Completed":
        document.getElementById("completed-btn").classList.add("view-type-btn-active");
        break;
    }
  }
}

TodoViewStatusBar.propTypes = {
  viewStatus: PropTypes.string,
  setViewStatus: PropTypes.func,
}
