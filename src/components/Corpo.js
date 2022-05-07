import Story from "./Story";
import Post from "./Post";


export default function Corpo() {
  return(
    /* to-do: fazer várias funções para subdividir as partes da div corpo e chamar ela aqui */
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
      {/* renderiza os stories aqui */}

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

