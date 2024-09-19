

export default function Details({taskState,changeTaskState}){
    return (
        <div className="details">
              <span
                className={`${taskState === "all" ? "all" : ""}`}
                onClick={() => changeTaskState("all")}
              >
                All
              </span>
              <span
                className={`${taskState === "active" ? "all" : ""}`}
                onClick={() => changeTaskState("active")}
              >
                Active
              </span>
              <span
                className={`${taskState === "completed" ? "all" : ""}`}
                onClick={() => changeTaskState("completed")}
              >
                Complited
              </span>
        </div>
    )
}