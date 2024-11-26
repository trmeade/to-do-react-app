

export function TodoViewStatusBar() {

  return (
    <>
      <label className="status-bar-row">
        <input type="radio" id="active" name="rb-view" checked/>
        Active
      </label>
      <label className="status-bar-row">
        <input type="radio" id="deleted" name="rb-view"/>
        Deleted
      </label>
    </>
  )
}
