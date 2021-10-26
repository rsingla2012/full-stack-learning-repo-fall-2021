import "./style.css";

//class ListItem, param props
export default function ListItem(props) {
  function handleClick() {
    if (props.type === "todo") {
      return props.finishTask(props.cur_index);
    } else {
      return props.removeTask(props.cur_index);
    }
  }

  let icon= '';
  if (props.type === "toDo") {
    icon = <img src="/assets/checkmark.svg" alt="checkmark" class="checkIcon"></img>;
  } else {
    icon = <img src="/assets/arrow-undo.svg" alt="undo" class="removeIcon"></img>;
  }

  return (
    <li key={props.cur_index}>
      <div id="list_item">
        {props.input}
        <div
          onClick={() => handleClick()}
        >
          {icon}
        </div>
      </div>
    </li>
  );
}
