
export default function Post(props) {
  return (
    <div class="post">
      <Topo urlImg={props.userImg} name={props.userName} />
      <Conteudo postImg={props.postImg}/>
      <Fundo src={props.likedByImg} likedBy={props.likedBy} otherLikes={props.otherLikes}/>
    </div>
  );
}

//Componentes menores
function Topo(props) {
  return(
    <div class="topo">
      <div class="usuario">
        <img src={props.urlImg} alt={props.name} />
        {props.name}
      </div>

      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}

function Conteudo(props) {
  return(
    <div class="conteudo">
      <img src={props.postImg} alt="Imagem do post"/>
    </div>
  );
}

function Fundo(props) {
  return(
    <div class="fundo">
      <div class="acoes">
        <div>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div class="curtidas">
        <img src={props.src} alt={props.likedBy}/>
        <div class="texto">
          Curtido por <strong>{props.likedBy}</strong> e <strong>outras {props.otherLikes} pessoas</strong>
        </div>
      </div>
    </div>
  );
}

