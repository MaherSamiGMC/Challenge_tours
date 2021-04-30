const initState= [
    {
      id: 0,
      name: "Best of paris     in 7 days tours",
      info:
        "Paris, capitale de la France, est une grande ville européenne et un centre mondial de l'art, de la mode, de la gastronomie et de la culture. Son paysage urbain du XIXe siècle est traversé par de larges boulevards et la Seine. Outre les monuments comme la tour Eiffel et la cathédrale gothique Notre-Dame du XIIe siècle, la ville est réputée pour ses cafés et ses boutiques de luxe bordant la rue du Faubourg-Saint-Honoré",
      img:
        "https://images.unsplash.com/photo-1613224322723-8e9ba99cc7dd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFyaXMlMjBmcmFuY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      price: "1,995"
    },
    {
      id: 1,
      name: "Best of Ireland    in 14 days tours ",
      info: ` La République d'Irlande occupe la majeure partie de l'île au large des côtes de l'Angleterre et du Pays de Galles. Sa capitale, Dublin, est la ville natale d'écrivains comme Oscar Wilde, et de la Guinness. Le Livre de Kells, datant du IXe siècle, de même que d'autres manuscrits enluminés sont conservés à la bibliothèque du Trinity College. Surnommée l'"île d'émeraude" en raison de son paysage luxuriant, le pays est parsemé de châteaux médiévaux comme le château de Cahir`,
      img:
        "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXJlbGFuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      price: "3,998"
    },
    {
      id: 2,
      name: "Best of brazil     in 18 days tours ",
      info:
        "Le Brésil, vaste pays d'Amérique du Sud, s'étend du bassin amazonien au nord à des vignobles et aux chutes d'Iguaçu au sud. La ville de Rio de Janeiro, caractérisée par sa statue du Christ Rédempteur de 38 mètres de haut située au sommet du Corcovado, est réputée pour ses plages très fréquentées de Copacabana et d'Ipanema, ainsi que pour son énorme carnaval animé, avec défilés de chars, costumes flamboyants, et musique et danse samba.",
      img:
        "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnJhemlsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      price: "4,200"
    },
    {
      id: 3,
      name: "Best of Amesterdam  in 7 days tours",
      info:
        "Amsterdam, capitale des Pays-Bas, est connue pour son patrimoine artistique, son système élaboré de canaux et ses étroites maisons à pignons, héritage de l'âge d'or de la ville, le XVIIe siècle. Le quartier des musées accueille le musée Van Gogh, le Rijksmuseum, présentant les œuvres de Rembrandt et de Vermeer, ainsi que le Stedelijk Museum, dédié à l'art moderne. Le vélo contribue pour beaucoup au caractère de la ville, qui compte un nombre élevé de pistes cyclables",
      img:
        "https://images.unsplash.com/photo-1612521605237-0024ec952cc5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGF5cyUyMGJhc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      price: "3,455"
    },
    {
      id: 4,
      name: "Best of Egypt     in 10 days tours",
      info: `L'Égypte est un pont entre l'Afrique du Nord-Est et le Moyen-Orient et son histoire remonte à l'époque des pharaons. Des monuments millénaires bordent les berges de la fertile vallée du Nil, notamment le sphinx et les pyramides colossales de Gizeh. La ville de Louxor abrite le temple de Karnak et ses hiéroglyphes, ainsi que les tombeaux de la vallée des rois. Le Caire, la capitale, regorge de sites ottomans, comme la mosquée Mohammed Ali ou le musée égyptien et ses trésors d'antiquités`,
      img: `https://images.unsplash.com/photo-1572252009286-268acec5ca0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZWd5cHR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
      price: "1,450"
    }
  ];
const Reducer=(state=initState,action)=>{
    switch(action.type){
        case 'ADD':
            return [...state,action.payload]
        case 'DELETE':
            return state.filter((el,i)=>i!=action.payload)
        default:
            return state
    }
}
export default Reducer