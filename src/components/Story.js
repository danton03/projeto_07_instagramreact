export default function Story(props) {
  return(
    <div class="story">
      <div class="imagem">
        <img src={props.urlImg} alt={props.userName} />
      </div>
      <div class="usuario">
        {props.userName}
      </div>
    </div>
  );
}
