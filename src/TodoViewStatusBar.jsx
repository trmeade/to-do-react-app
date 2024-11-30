import PropTypes from "prop-types";

export function TodoViewStatusBar({
  viewStatus,
  setViewStatus
})       
{


  return (
    <>
      <div className="todo-view-status-bar">
        <h4>Show:</h4>
        <span className="status-bar-row">
          <button 
            className={`view-type-btn ${viewStatus === "All" ? "view-type-btn-active" : ""}`}
            type="button" id="all-btn" onClick={() => {
            setActiveBtn("All");
          }}
          >
          All
          </button>
        </span>
        <span className="status-bar-row">
          <button 
            className={`view-type-btn ${viewStatus === "Active" ? "view-type-btn-active" : ""}`}
            type="button" id="active-btn" onClick={() => {   
            setActiveBtn("Active");
          }}>
          Active
          </button>
        </span>

        <span className="status-bar-row">
          <button 
            className= {`view-type-btn ${viewStatus === "Completed" ? "view-type-btn-active": ""}`}
            type="button" id="completed-btn" onClick={() => {
            setActiveBtn("Completed");
          }}>
          Completed
          </button>
        </span>
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
