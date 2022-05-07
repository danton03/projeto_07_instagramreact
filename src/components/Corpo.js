/* Importação dos componentes genéricos */
import Story from "./Story";
import Post from "./Post";
import Sugestao from "./Sugestao";


export default function Corpo() {
  return(
    <div class="corpo">
      <Esquerda />
      <SideBar />
    </div>
  );
}


/*==============================================================*/

/* Reune os componentes da parte esquerda */
function Esquerda() {
  return(
    <div class="esquerda">
      <Stories />
      <Posts />
    </div>
  );
}

/*==============================================================*/

function Stories() {
  //Usa um array de objetos para jogar as imagens no componente Story
  const storiesData = [
    {userName: "9gag", urlImg:"./assets/img/9gag.svg"},
    {userName: "meowed", urlImg:"./assets/img/meowed.svg"},
    {userName: "nathanwpylestrangeplanet", urlImg:"./assets/img/nathanwpylestrangeplanet.svg"},
    {userName: "wawawicomics", urlImg:"./assets/img/wawawicomics.svg"},
    {userName: "respondeai", urlImg:"./assets/img/respondeai.svg"},
    {userName: "filomoderna", urlImg:"./assets/img/filomoderna.svg"},
    {userName: "memeriagourmet", urlImg:"./assets/img/memeriagourmet.svg"}
  ]
  return(
    <div class="stories">
      {/* renderiza os stories */}
      {storiesData.map((user) => (
        <Story urlImg={user.urlImg} userName={user.userName} />
      ))}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

/*==============================================================*/

function Posts() {
  const postsData = [
    {
      nome: "meowed", userImg:"./assets/img/meowed.svg",
      postImg: "./assets/img/gato-telefone.svg", 
      likedByImg: "./assets/img/respondeai.svg", 
      likedBy: "respondeai", 
      otherLikes:"101.523"
    },

    {
      userName: "barked", 
      userImg:"./assets/img/barked.svg", 
      postImg: "./assets/img/dog.svg", 
      likedByImg: "./assets/img/adorable_animals.svg", 
      likedBy: "adorable_animals", 
      otherLikes:"99.159"
    }
  ]

  return (
    <div class="posts">
      {postsData.map((data) => (
      <Post 
        userName={data.nome} 
        userImg={data.userImg}
        postImg={data.postImg}
        likedByImg={data.likedByImg}
        likedBy={data.likedBy}
        otherLikes={data.otherLikes}
      />
      ))}
    </div>
  )
}

/*==============================================================*/
/* Sidebar */
function SideBar() {
  const userData = {
    name: "Catana", 
    nick: "catanacomics", 
    profile:"./assets/img/catanacomics.svg"
  }

  return(
    <div class="sidebar">
      <Usuario userName={userData.nick} name={userData.name} src={userData.profile} />
      <Sugestoes />
    </div>
  );
}

/*==============================================================*/
function Usuario(props) {
  return(
    <div class="usuario">
      <img src={props.src} alt={props.name} />
      <div class="texto">
        <strong>{props.userName}</strong>
        {props.name}
      </div>
    </div>
  );
}

/*==============================================================*/
function Sugestoes() {
  const recommended = [
    {name: "bad.vibes.memes", urlImg: "assets/img/bad.vibes.memes.svg", reason:"Segue você"},
    {name: "chibirdart", urlImg: "./assets/img/chibirdart.svg", reason:"Segue você"},
    {name: "razoesparaacreditar", urlImg: "./assets/img/razoesparaacreditar.svg", reason:"Novo no Instagram"},
    {name: "adorable_animals.svg", urlImg: "./assets/img/adorable_animals.svg", reason:"Segue você"},
    {name: "smallcutecats", urlImg: "./assets/img/smallcutecats.svg", reason:"Segue você"}
  ]

  return(
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      
      {recommended.map((user) => (
        <Sugestao userName={user.userName} img={user.urlImg} reason={user.reason} />
      ))}

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
  );
}


